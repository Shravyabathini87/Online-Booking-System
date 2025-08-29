document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('confirmation').textContent = "✅ Your booking has been confirmed!";
  document.getElementById('confirmation').classList.remove('hidden');
  this.reset();
});