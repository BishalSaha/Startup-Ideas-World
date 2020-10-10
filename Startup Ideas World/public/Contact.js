// import * as firebase from 'firebase';

// Reference messages collection
var contactRef = firebase.database().ref('Contact');

// Listen for a submit
document.getElementById('Contact').addEventListener('submit', submitContactForm);

// Submit form
function submitContactForm(e) {
  e.preventDefault();

  // Get values
  var firstname = getInputVal('FirstName');
  var lastname = getInputVal('LastName');
  var company = getInputVal('Company');
  var email = getInputVal('Email');
  var phone = getInputVal('PhoneNumber');
  var message = getInputVal('Message');

  // Save Contact
  saveMessage(firstname, lastname, company, email, phone, message);

  // Clear form
  document.getElementById('Contact').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, company, email, phone, message) {
  contactRef
    .push({
      firstname: firstname,
      lastname: lastname,
      company: company,
      email: email,
      phone: phone,
      message: message,
    })
    .then((ref) => {
      console.log('New Contact Ref:', ref.key);
      alert('Thank you for your message. We shall get back to you soon.')
    });
}
