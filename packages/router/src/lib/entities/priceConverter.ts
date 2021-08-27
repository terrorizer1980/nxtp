import { BigNumber } from "ethers";

export type PriceConverter = {
  exchangeGasForAsset: (
    gasAmount: BigNumber,
    gasChainId: number,
    toAssetId: string,
    toChainId: number,
  ) => Promise<BigNumber>;
};
