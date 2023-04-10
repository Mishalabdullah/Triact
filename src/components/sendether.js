window.ethereum.enable();
const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
const contractAddress = 0x1d37cf939dccfc5309e059cd951beba1e24d71c8;
const abi = [
  {
    inputs: [],
    name: "fund",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
var myBank;
var signer;
provider.listAccounts().then(function (accounts) {
  signer = provider.getSigner(accounts[0]);
  myBank = new ethers.Contract(contractAdrress, contractAbi, signer);
});
async function fund() {
  const ethAmount = document.getElementById("ethAmount").value;
  const inputEthAmount = myBank.fund({
    value: ethers.utils.parseEther(ethAmount),
  });
  await inputEthAmount;
}
