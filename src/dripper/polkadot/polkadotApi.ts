import "@polkadot/api-augment";
import { ApiPromise, initialize } from "avail-js-sdk";

let apiInstance: ApiPromise | null = null;

export const getApiInstance = async () => {
  if (apiInstance) {
    console.log("Using existing API instance");
    if (apiInstance.isConnected) {
      console.log("API instance is connected");
      return apiInstance;
    } else {
      console.log("API instance is not connected");
      apiInstance = await initialize("wss://rpc-goldberg.sandbox.avail.tools");
      return apiInstance;
    }
  } else {
    console.log("Initializing new API instance");
    apiInstance = await initialize("wss://rpc-goldberg.sandbox.avail.tools");
    return apiInstance;
  }
};
export const AvailApi = async () => await initialize("wss://rpc-goldberg.sandbox.avail.tools");
export const disApi = async (api: ApiPromise) => {
  if (api.isConnected) {
    console.log("Disconnecting new API instance");
    await api.disconnect();
  }
};

export default AvailApi;
