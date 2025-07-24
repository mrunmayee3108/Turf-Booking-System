let btn=document.querySelector("button");
let form=document.querySelector("#myform");
btn.onclick=(e)=>{
    e.preventDefault();
    if(form.checkValidity()){
        alert("Booking Successful!!");
        form.reset();
    }
    else form.reportValidity();

}
