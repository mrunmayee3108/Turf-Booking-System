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
// event.preventDefault() prevents the form from submitting and refreshing the page.

// form.checkValidity() checks if all required fields are filled correctly.

// form.reportValidity() shows built-in browser validation messages for missing or invalid inputs.

