/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibAssetTest, LibAssetTestInterface } from "../LibAssetTest";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x035d336d",
        type: "bytes32",
      },
    ],
    name: "c_0x035d336d",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
    ],
    name: "getOwnBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
    ],
    name: "isEther",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferEther",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100437fddaddd86db8899a0af007e205036f6a45166cb86fad5e35470ad35cccba4801e60001b61004860201b60201c565b61004b565b50565b610c518061005a6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806305b1137b1461006757806339cf718214610083578063439e2e451461009f5780634b93c875146100bb5780639db5dbe4146100eb578063a7d2fdf614610107575b600080fd5b610081600480360381019061007c9190610948565b610137565b005b61009d60048036038101906100989190610a4b565b6101c9565b005b6100b960048036038101906100b49190610984565b6101cc565b005b6100d560048036038101906100d0919061091f565b610260565b6040516100e29190610b0e565b60405180910390f35b610105600480360381019061010091906109d3565b6102f6565b005b610121600480360381019061011c919061091f565b61038a565b60405161012e9190610b29565b60405180910390f35b6101637f4bd2171a695c828fcec5ce7939fe8b55630fcb822731f7621083f2062489c9e760001b6101c9565b61018f7fc9724757cdd63aae31deba473a578a7bc9acbf411877839e92d5e4265e550cf860001b6101c9565b6101bb7f8efa5865ef093eec1c24d00e5ab01bff75737a06157a39f050fcb8ce63ba483160001b6101c9565b6101c58282610420565b5050565b50565b6101f87ffae70f47c0619c84f9eed83bf81dcc24d5d870fb04468375b85ac91314edbdb960001b6101c9565b6102247f29484d697fda84ab69c72aaae26f4c8e380afc0f4d30a4f260250e18e18e711060001b6101c9565b6102507f6f3c399a1b67197831f21499be7b38df51e908c1daca808e157d42b952d1153e60001b6101c9565b61025b8383836104ef565b505050565b600061028e7ffa7c5348128e684647c9072577442403636794d3b405941dbb1fb9c848ac539860001b6101c9565b6102ba7f35db830786420ab4478a0c74e1cb3809c50e6aebd9f7b5a1bb3cda2d2c11638b60001b6101c9565b6102e67f7999228f828ded8d05857268f1224732571099b71014e3d385d9c23de3c56a0960001b6101c9565b6102ef826105a0565b9050919050565b6103227f7f3ef5f51f668734a892feedd20ff8572d231a34ab11ba73b1a9010fe0a2f9b860001b6101c9565b61034e7fa5976847bfd501836eadcea5b824113852ec34bc4577064e16e48985fbe7c1d060001b6101c9565b61037a7f0cc7ebe4a5c73b95dfba679acfd012f20630d861bbffe346aeb3f7d20ff6da6860001b6101c9565b61038583838361065d565b505050565b60006103b87f3c2469aff8af0b0c93b7016a2cf7f4f965cf499f9e67f73e6a2edb7a539b3f7760001b6101c9565b6103e47fe7a2cdd5546ad936fa01963ea60c79c1c1da3ffe94321b9cb4f99ebb594701e660001b6101c9565b6104107fb357fbe5ae5854e3aee2721b1c3fc58077eb9a1d08175b8f3fd7ac4b807e12c860001b6101c9565b61041982610774565b9050919050565b61044c7fd7351ce214b1feb59e7ef5eb05925a06330c27e57f3e1350dbc336bcc5bba12960001b61089e565b6104787faeff790d8746aeae5c96cf16007aa1d3c0a3310cfdf0dbf222029f3750f58fbf60001b61089e565b6104a47f7cbbc28866cd9cc6e9fdd8ad3ac8348b4042ed2cd22991fad1352d8bfacbed2e60001b61089e565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156104ea573d6000803e3d6000fd5b505050565b61051b7f9c1192522ed404332a2d7d1a80b7ad817f70c1f6a8af221f3c040d59ef4e127160001b61089e565b6105477f0168ac6c7d2d25350f4bf14b865d18dacaa977c9d8ede32042cedd047edaf25360001b61089e565b6105737f895b9ebb1fd8a25e9cd0066a4dcafa3aebc62333246c2461e1a059f88cb54cf860001b61089e565b61057c836105a0565b6105905761058b83838361065d565b61059b565b61059a8282610420565b5b505050565b60006105ce7fe74d3bf5d343e3316beb207a38168ee59d74663e3a3fb0929f61dd5e8f24d6e360001b61089e565b6105fa7fc6447d64bf0c80f184f71c923e77c9cc86f84c25ed2d208b05a862eda4eeea9560001b61089e565b6106267f4ee1d7f77d6ba549754071140c254f86be7e035f2c4624c2dcd681660496d9ae60001b61089e565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b6106897fa204dd2175f9bd0af6ff6c41f54dbaad7a8fe0452b52f38c08bad1dad42d23ad60001b61089e565b6106b57ff798f16718148904f23b4a2c7f042f8be367883d38374c87e0d8fd44a20d825c60001b61089e565b6106e17f1c4667e907fa81165cca71b1910cd3bb16fbb9acc22178d6c37b57ebcc305aa160001b61089e565b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b815260040161071c929190610ae5565b602060405180830381600087803b15801561073657600080fd5b505af115801561074a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076e9190610a22565b50505050565b60006107a27fc58e81f724a156e4fd3753192f754822d1472162fcc07737b16ded3943ae886360001b61089e565b6107ce7fb9f9d7b8fa71d13bc93820bc857e679d0e4ca147c1b7f64b2066dd8c0fc87daf60001b61089e565b6107fa7f4a23f53b885284ea56e13d740c006bd7a6023b10c12e5068bcc36908ddbb7fa760001b61089e565b610803826105a0565b610895578173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108409190610aca565b60206040518083038186803b15801561085857600080fd5b505afa15801561086c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108909190610a74565b610897565b475b9050919050565b50565b6000813590506108b081610ba8565b92915050565b6000813590506108c581610bbf565b92915050565b6000815190506108da81610bd6565b92915050565b6000813590506108ef81610bed565b92915050565b60008135905061090481610c04565b92915050565b60008151905061091981610c04565b92915050565b60006020828403121561093157600080fd5b600061093f848285016108a1565b91505092915050565b6000806040838503121561095b57600080fd5b6000610969858286016108b6565b925050602061097a858286016108f5565b9150509250929050565b60008060006060848603121561099957600080fd5b60006109a7868287016108a1565b93505060206109b8868287016108b6565b92505060406109c9868287016108f5565b9150509250925092565b6000806000606084860312156109e857600080fd5b60006109f6868287016108a1565b9350506020610a07868287016108a1565b9250506040610a18868287016108f5565b9150509250925092565b600060208284031215610a3457600080fd5b6000610a42848285016108cb565b91505092915050565b600060208284031215610a5d57600080fd5b6000610a6b848285016108e0565b91505092915050565b600060208284031215610a8657600080fd5b6000610a948482850161090a565b91505092915050565b610aa681610b44565b82525050565b610ab581610b68565b82525050565b610ac481610b9e565b82525050565b6000602082019050610adf6000830184610a9d565b92915050565b6000604082019050610afa6000830185610a9d565b610b076020830184610abb565b9392505050565b6000602082019050610b236000830184610aac565b92915050565b6000602082019050610b3e6000830184610abb565b92915050565b6000610b4f82610b7e565b9050919050565b6000610b6182610b7e565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610bb181610b44565b8114610bbc57600080fd5b50565b610bc881610b56565b8114610bd357600080fd5b50565b610bdf81610b68565b8114610bea57600080fd5b50565b610bf681610b74565b8114610c0157600080fd5b50565b610c0d81610b9e565b8114610c1857600080fd5b5056fea26469706673582212201b5d4dbab3444b5d4fecf96147c42b9141b76f550925a3d15185642f3a36859164736f6c63430008040033";

export class LibAssetTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibAssetTest> {
    return super.deploy(overrides || {}) as Promise<LibAssetTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibAssetTest {
    return super.attach(address) as LibAssetTest;
  }
  connect(signer: Signer): LibAssetTest__factory {
    return super.connect(signer) as LibAssetTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibAssetTestInterface {
    return new utils.Interface(_abi) as LibAssetTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibAssetTest {
    return new Contract(address, _abi, signerOrProvider) as LibAssetTest;
  }
}
