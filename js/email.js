const form = document.querySelector('form');
const fullName = document.querySelector('name');
const email = document.querySelector('email');
const phone = document.querySelector('phone');
const subject = document.querySelector('subject');
const mess = document.querySelector('message');

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email:${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "av.techservices.info@gmail.com",
        Password : "BA323BB867E572792AE0EB1191C41742C47F",
        To : 'av.techservices.info@gmail.com',
        From : "av.techservices.info@gmail.com",
        Subject : "subject.value",
        Body : "bodyMessage"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
     
    sendEmail();
})