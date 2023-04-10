document.getElementById('btn-submit').addEventListener('click', function(){
    const emailType = document.getElementById('btn-email');
    const emailCarry = emailType.value;

    const passwordType = document.getElementById('btn-password');
    const passwordCarry = passwordType.value;
    if(emailCarry === 'sultanuddin@sln.com' && passwordCarry === 'secret'){
        window.location.href = 'index-bank.html';
    }
    else{
        alert('Your are bot hahhahahah');
    };
});