document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('waForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const city = document.getElementById('city').value.trim();
    const course = document.getElementById('course').value;
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !mobile || !city) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Validate mobile number (10 digits)
    if (!/^\d{10}$/.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    // Create enquiry object
    const enquiry = {
      name: name,
      mobile: mobile,
      city: city,
      course: course,
      message: message,
      timestamp: new Date().toISOString()
    };
    
    // Log to console (in production, send to backend)
    console.log('Enquiry submitted:', enquiry);
    
    // Show success message
    alert('Thank you for your enquiry! We will contact you soon.');
    
    // Reset form
    form.reset();
  });
});
