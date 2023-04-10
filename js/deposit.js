document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount');
    const depositA = depositAmount.value;
    const depositB = parseFloat(depositA);
    
    const depositM = document.getElementById('deposit-m');
    const depositm = depositM.innerText;
    const depositn = parseFloat(depositm);

    const currentAmount = depositn + depositB;

    depositM.innerText = currentAmount;
    
    const balancE = document.getElementById('balance');
    const previousBalance = balancE.innerText;
    const previousBalanceB = parseFloat(previousBalance);

    balancE.innerText = previousBalanceB + currentAmount;
    
    depositAmount.value = '';

});