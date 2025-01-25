function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

//Error: balance is returned as a string instead of a number

//In this code, the getBalance function fetches the balance of an address using web3.eth.getBalance(). However, the returned balance is a string instead of a number. This can lead to unexpected behavior in calculations and comparisons.