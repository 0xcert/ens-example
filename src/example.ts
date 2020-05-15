import {
  MetamaskProvider,
  NetworkKind
} from "@0xcert/ethereum-metamask-provider";
import { Ens } from "@0xcert/ens";

// We create a new instance of metamask provider.
const provider = new MetamaskProvider();

async function enableMetamask() {
  // We first check if metamask is already enabled.
  if (!(await provider.isEnabled())) {
    // If metamask is not enabled, we enable it.
    return provider.enable();
  }
}
export async function getDomain() {
  await enableMetamask();
  const ens = new Ens(provider, NetworkKind.ROPSTEN);
  return ens.getDomain("0xF9196F9f176fd2eF9243E8960817d5FbE63D79aa");
}

export async function getAddress() {
  await enableMetamask();
  const ens = new Ens(provider, NetworkKind.ROPSTEN);
  return ens.getAddress("0xcert.eth");
}
