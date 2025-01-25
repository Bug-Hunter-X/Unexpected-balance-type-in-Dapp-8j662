# Unexpected balance type in Dapp
This bug demonstrates an issue where a Dapp returns a balance as a string instead of a number. This can cause unexpected behavior in calculations and comparisons.

## Bug Description
The `getBalance` function fetches the balance of an address using `web3.eth.getBalance()`.  The returned balance is a string instead of a number, leading to potential errors in calculations and comparisons.

## Solution
The solution involves converting the string representation of the balance to a number using `parseInt` or `parseFloat` before using it in any calculations or comparisons. This ensures that the balance is treated as a number throughout the Dapp, preventing unexpected behavior.