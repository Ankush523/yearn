import logo from './logo.svg';
import { Yearn } from "@yfi/sdk";
import { JsonRpcProvider } from "@ethersproject/providers";

import './App.css';

function App() {
const chainId = 137;

const rpcUrl = "https://polygon-mainnet.g.alchemy.com/v2/UaBLfxPk-bv5k23r4YMJ_vEG-4PZn5ql";

const yearn = new Yearn(chainId, {
  provider: new JsonRpcProvider(rpcUrl)
});
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
