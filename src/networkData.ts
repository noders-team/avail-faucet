// TODO: merge this with networkData.ts from client/

export interface ChainData {
  name: string;
  id: number;
}

export interface NetworkData {
  networkName: string;
  currency: string;
  chains: ChainData[];
  explorer: string | null;
  rpcEndpoint: string;
  decimals: number;
  dripAmount: string;
  balanceCap: number;
}

const turing: NetworkData = {
  balanceCap: 100,
  chains: [{ name: "Avail Turing Testnet", id: -1 }],
  currency: "AVL",
  decimals: 18,
  dripAmount: "1",
  explorer: "https://avail-turing.subscan.io/",
  networkName: "Avail-Testnet",
  rpcEndpoint: "wss://turing-rpc.avail.so/ws",
};

export const networks: Record<string, NetworkData> = { turing };

export function getNetworkData(networkName: string): NetworkData {
  if (!Object.keys(networks).includes(networkName)) {
    throw new Error(
      `Unknown NETWORK in env: ${networkName}; valid networks are: [${Object.keys(networks).join(", ")}]`,
    );
  }
  // networkName value is validated one line before, safe to use as index
  // eslint-disable-next-line security/detect-object-injection
  return networks[networkName] as NetworkData;
}
