document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = {
    "fields": {
      "First Name": formData.get('firstName'),
      "Last Name": formData.get('lastName'),
      "Phone": formData.get('phone'),
      "Email": formData.get('email'),
      "Booking Date": formData.get('bookingDate'),
      "Time": formData.get('time'),
      "Service": formData.get('service')
    }
  };

  fetch('https://api.airtable.com/v0/appjT1nUMSdYnrGk7/Appointments', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer patah5XK2jc3O2GIw.5084e77e00c37f1985fa29f959f0805379408127120a7b0c2ae45f0ef12b59ba',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
    alert('Appointment booked successfully!');
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
