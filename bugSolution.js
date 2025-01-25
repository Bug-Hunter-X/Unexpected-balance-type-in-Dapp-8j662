function getBalance() {
  const balance = await web3.eth.getBalance(address);
  const balanceNumber = parseFloat(balance);
  return balanceNumber;
}

//Now balance is correctly returned as a number