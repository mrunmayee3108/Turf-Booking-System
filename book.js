let btn=document.querySelector("button");
let form=document.querySelector("#myform");
btn.onclick=(e)=>{
    e.preventDefault();
    if(form.checkValidity()){
        alert("Make Payment!!");
        setTimeout(() => {
            window.location.href = "payment.html";
        }, 1000);
        form.reset();
    }
    else form.reportValidity();

}


