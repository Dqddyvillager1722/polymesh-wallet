import { NetworkName } from './types';

const networkURLs: Record<NetworkName, string> = {
  alcyone: 'wss://alcyone-rpc.polymesh.live',
  pmf: 'wss://pmf.polymath.network'
};

const networkLabels: Record<NetworkName, string> = {
  alcyone: 'Alcyone Testnet',
  pmf: 'PMF'
};

const defaultNetwork: NetworkName = NetworkName.pmf;

const messagePrefix = 'poly:';

export {
  networkURLs,
  networkLabels,
  defaultNetwork,
  messagePrefix
};
