function calculateTotal() {
  const sessions = document.getElementById("sessions").value;
  const pricePerSession = 50000;
  const total = sessions * pricePerSession;
  document.getElementById(
    "total"
  ).textContent = `INR ${total.toLocaleString()}`;
}
