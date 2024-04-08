import NexaflowInit from "nexaflow-web-sdk";
import { envObj } from "../utils/env";

const apiKey = envObj.nexaflow_api_key;
console.log(apiKey);
const nexaflowApi = new NexaflowInit(apiKey);
export default nexaflowApi;
