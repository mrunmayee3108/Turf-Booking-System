document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const card = document.getElementById("card").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const message = document.getElementById("message");

  if (!name || !email || !card || !expiry || !cvv) {
    message.style.color = "red";
    message.textContent = "Please fill in all fields.";
    return;
  }

  // Simulated payment processing
  setTimeout(() => {
    message.style.color = "green";
    message.textContent = "Payment successful! Thank you for using StepToTurf.";
    document.getElementById("paymentForm").reset();
  }, 1000);
});
