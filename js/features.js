// show cash Out form

document.getElementById('btn-show-cash-out').addEventListener('click', () =>{

    // show cash out btn
    document.getElementById('cash-out-form').classList.remove('hidden');
     document.getElementById('add-money-form').classList.add('hidden');

    
})


document.getElementById('btn-show-add-money').addEventListener('click', () =>{

    // show cash out btn
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');


    
})

