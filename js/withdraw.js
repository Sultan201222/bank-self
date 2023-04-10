document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-input');
    const withdrawA = withdrawAmount.value;
    const withdrawB = parseFloat(withdrawA);
    
    const withdrawM = document.getElementById('withdraw-m');
    const withdrawm = withdrawM.innerText;
    const withdrawn = parseFloat(withdrawm);

    const currentAmountB = withdrawn + withdrawB;

    withdrawM.innerText = currentAmountB;
    
    const balanceW = document.getElementById('balance');
    const previousBalanceW = balanceW.innerText;
    const previousBalanceB = parseFloat(previousBalanceW);

    balanceW.innerText = previousBalanceB - currentAmountB; 
    
    withdrawAmount.value = '';

});