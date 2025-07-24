let btn=document.querySelector("#button");
let form=document.querySelector("#paymentForm");
btn.onclick=(e)=>{
    e.preventDefault();
    if(form.checkValidity()){
        alert("Payment Successful!!");
        setTimeout(() => {
        window.location.href = "thankyou.html";
        }, 1000);
        form.reset();
    }
    else form.reportValidity();

}
