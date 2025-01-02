document.getElementById('Depost-btn').addEventListener('click', function(data) {
    data.preventDefault();
    const inputAmout = getTheInputValue('Deposit-amout');
    const DepositPin = getTheInputValue('Deposit-pin');
    const accountBalance = getInnerText('account-balance');

    if(isNaN(inputAmout)){
        alert('Please enter a valid number');
        document.getElementById('Deposit-amout').value = '';
        document.getElementById('Deposit-pin').value = '';
        return;
        
    };
    
    if( DepositPin == '1234'){
        
        const totalBalance = accountBalance + inputAmout;
        document.getElementById('account-balance').innerText = totalBalance;
        document.getElementById('Deposit-amout').value = '';
        document.getElementById('Deposit-pin').value = '';
    }
    else{
        alert('Type 1234 as your pin');
    };

    const p = document.createElement('p');
    p.classList.add('text-green-400');
    p.innerText = `You have deposited $${inputAmout}`;

    document.getElementById('Transaction-data').appendChild(p);
});

document.getElementById('Withdrawal-btn-form').addEventListener('click', function(data) {
    data.preventDefault();
    const inputAmout = getTheInputValue('Withdrawal-amount');
    const WithdrawalPin = getTheInputValue('Withdrawal-pin');
    const accountBalance = getInnerText('account-balance');

    if(isNaN(inputAmout)){
        alert('Please enter a valid number');
        document.getElementById('Withdrawal-amount').value = '';
        document.getElementById('Withdrawal-pin').value = '';
        return;
    };
    
    if( WithdrawalPin == '1234'){
        if(accountBalance < inputAmout){
            alert('Insufficient balance');
            document.getElementById('Withdrawal-amount').value = '';
            document.getElementById('Withdrawal-pin').value = '';
            return;
        };
        const totalBalance = accountBalance - inputAmout;
        document.getElementById('account-balance').innerText = totalBalance;
        document.getElementById('Withdrawal-amount').value = '';
        document.getElementById('Withdrawal-pin').value = '';
    }
    else{
        alert('Type 1234 as your pin');
    };

    const p = document.createElement('p');
    p.classList.add('text-red-400');
    p.innerText = `You have withdrawn $${inputAmout}`;

    document.getElementById('Transaction-data').appendChild(p);
});