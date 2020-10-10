// import * as firebase from 'firebase/app';

// Reference messages collection
var emailupdatesRef = firebase.database().ref('EmailUpdates');

// Listen for a submit
document.getElementById('Subscribe').addEventListener('submit', submitSubscribeForm);

// Submit form
function submitSubscribeForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('Name');
  var email = getInputVal('EmailUpdates');

  console.log({ name, email });
  // Save Email Updates
  saveSubscription(name, email);

  // Clear form
  document.getElementById('Subscribe').reset();
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save subscription email to firebase
function saveSubscription(name, email) {
  emailupdatesRef
    .push({
      name: name,
      email: email,
    })
    .then((ref) => {
      console.log({ key: ref.key });
      alert('Thank you for subscribing. Please do not forget to mark our emails as Not Spam!');
    });
}

window.addEventListener('load', () => {
  console.log('Intro Subscription Window loaded:');
  // Listen to the emailUpdatesRef snapshot
  // firebase
  //   .database()
  //   .ref('/EmailUpdates')
  //   .once('value')
  //   .then((snap) => {
  //     const data = snap.val();
  //     console.log({ data });
  //     document.getElementById('subscription-list').innerText = JSON.stringify(data);
  //   });
});
