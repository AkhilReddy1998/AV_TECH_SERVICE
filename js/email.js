const form = document.querySelector('form');

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "av.techservices.info@gmail.com",
        Password : "BA323BB867E572792AE0EB1191C41742C47F",
        To : 'av.techservices.info@gmail.com',
        From : "av.techservices.info@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
     
    sendEmail();
})