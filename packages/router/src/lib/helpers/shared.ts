import {
  calculateExchangeWad,
  GAS_ESTIMATES,
  getNtpTimeSeconds as _getNtpTimeSeconds,
  getRateFromPercentage,
} from "@connext/nxtp-utils";
import { BigNumber } from "ethers";
import { getContext } from "../../router";

import { AmountInvalid } from "../errors";

const ROUTER_FEE = "0.05"; // 0.05%

/**
 * Helper to allow easy mocking
 */
export const getNtpTimeSeconds = _getNtpTimeSeconds;

/**
 * Returns the swapRate
 *
 * @param TODO
 * @returns The swapRate, determined by the AMM
 *
 * @remarks
 * TODO: getSwapRate using AMM
 */
export const getSwapRate = async (): Promise<string> => {
  return "1";
};

/**
 * Returns the amount * swapRate to deduct fees when going from sending -> recieving chain to incentivize routing.
 *
 * @param amount The amount of the transaction on the sending chain
 * @returns The amount, less fees as determined by the swapRate
 *
 * @remarks
 * Router fulfills on sending chain, so gets `amount`, and user fulfills on receiving chain so gets `amount * swapRate`
 */
export const getReceiverAmount = async (
  amount: string,
  inputDecimals: number,
  outputDecimals: number,
  inputChainId: number,
  outputAssetId: string,
  outputChainId: number,
): Promise<string> => {
  const { priceConverter } = getContext();

  if (amount.includes(".")) {
    throw new AmountInvalid(amount);
  }
  // 1. swap rate from AMM
  const swapRate = await getSwapRate();
  const amountAfterSwapRate = calculateExchangeWad(BigNumber.from(amount), inputDecimals, swapRate, outputDecimals);

  // 2. flat fee by Router
  const routerFeeRate = getRateFromPercentage(ROUTER_FEE);
  let receivingAmount = calculateExchangeWad(amountAfterSwapRate, outputDecimals, routerFeeRate, outputDecimals);

  // 3. gas fee reimbursement
  const gasUsed = BigNumber.from(GAS_ESTIMATES.prepare).add(GAS_ESTIMATES.fulfill); // receiver prepare + sender fulfill
  const gasConvertedToReceiver = await priceConverter.exchangeGasForAsset(
    gasUsed,
    inputChainId,
    outputAssetId,
    outputChainId,
  );

  receivingAmount = receivingAmount.sub(gasConvertedToReceiver);

  return receivingAmount.toString();
};
