import { ethers } from "ethers";
//tton.jsx:13 Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'Web3Provider')

// Wait for user to connect to wallet
async function connectToWallet() {
  await window.ethereum.enable();
}

// Connect to wallet and create provider and signer
async function setupProviderAndSigner() {
  await connectToWallet();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
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
