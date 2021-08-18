//handel deposit event

document.getElementById('deposit-button').addEventListener('click',function(){
    //get the amount deposited
   const depositInput = document.getElementById('deposit-input');
   const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText)
    //update deposite total
   const depostiTotal = document.getElementById('deposit-total');
   const previousDepositText =  depostiTotal.innerText;

   const previousDepositAmount = parseFloat(previousDepositText);

   const newDepositTotal = previousDepositAmount   + newdepositAmount;

  

  
   depostiTotal.innerText = newDepositTotal;
   //clear the inpput
   depositInput.value = '';





   //update Account Balance

   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   const newBalanceTotal = previousBalanceTotal + newDepositTotal;
   balanceTotal.innerText = newBalanceTotal;

    

    

})


//Handel withdraw Event

document.getElementById('Withdraw-button').addEventListener('click',function(){
   const withdrawInput = document.getElementById('Withdraw-input');
   const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    

    //set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawText);



    const newWithDrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithDrawTotal;
    // clear withdraw input
    withdrawInput.value = '';
    //Update balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;



})
