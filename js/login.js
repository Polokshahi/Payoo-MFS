document.getElementById('button-login').addEventListener('click', function(e){
e.preventDefault();
const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;
console.log(phoneNumber, pinNumber);

if(phoneNumber === '5' && pinNumber === '123'){
    console.log("Logined Successfully");
    window.location.href = "/payoo.html";
}else{
    alert('Wrong phone or pin');
}



})