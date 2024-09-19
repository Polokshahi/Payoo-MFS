document.getElementById('add-money').addEventListener('click', (e) =>{ 
    e.preventDefault();
    const pinNumber = document.getElementById('pin-number').value;

    if(pinNumber === '123'){
        const currentBalance = parseInt(document.getElementById('curent-balance').innerText);
        const depositAmount = parseInt(document.getElementById('deposit-amount').value);
        document.getElementById('curent-balance').innerText = currentBalance + depositAmount;
        document.getElementById('deposit-amount').value = '';
        document.getElementById('pin-number').value = '';
    }else{
        alert('Faild to add money');
        document.getElementById('deposit-amount').value = '';
        document.getElementById('pin-number').value = '';
    }
})


// cash out action

document.getElementById('cash-out-money').addEventListener('click', (e) => {
    e.preventDefault();
    const cashoutPin = document.getElementById('cash-out-pin-number').value;

    if(cashoutPin === '12345'){
        const cashOutAmount = parseFloat(document.getElementById('cash-out-amount').value);
        const currentBalance = parseFloat(document.getElementById('curent-balance').innerText);
        const grandTotal = currentBalance - cashOutAmount;
        document.getElementById('curent-balance').innerText = grandTotal;

        document.getElementById('cash-out-amount').value = '';
        document.getElementById('cash-out-pin-number').value = '';

    }else{
        alert('cash out failed');
        document.getElementById('cash-out-amount').value = '';
        document.getElementById('cash-out-pin-number').value = '';
    }
})