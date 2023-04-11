import React from "react";
import "./inputfield";
import { ethers } from "ethers";

// Wait for user to connect to wallet
async function connectToWallet() {
  await window.ethereum.enable();
}

// Connect to wallet and create provider and signer
async function setupProviderAndSigner() {
  await connectToWallet();
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const signer = provider.getSigner();
  return { provider, signer };
}

const contractAddress = "0x1d37cf939dccfc5309e059cd951beba1e24d71c8";
const abi = [
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

// Call the fund function on the smart contract
async function fund() {
  const { provider, signer } = await setupProviderAndSigner();
  const myBank = new ethers.Contract(contractAddress, abi, provider);
  const ethAmount = document.getElementById("ethAmount").value;
  const inputEthAmount = myBank.fund({
    value: ethers.utils.parseEther(ethAmount),
  });
  await inputEthAmount.wait();
}
function Donatebutton() {
  return (
    <div>
      <button
        onClick={fund}
        className="text-white bg-stone-900  rounded-full p-2 justify-center "
      >
        Send Eth
      </button>
    </div>
  );
}
export default Donatebutton;
