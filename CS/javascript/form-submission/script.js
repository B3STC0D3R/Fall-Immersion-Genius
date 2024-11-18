
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        username = document.getElementById('name');
        email = document.getElementById('email');
        message = document.getElementById('message');
        if (username && email && message) {
            alert(`Form submitted successfully!\nName: ${username.value}\nEmail: ${email.value}\nMessage: ${message.value}`);

        } else {
            alert(`FILL ALL THE FIELDS`);
        }
    });
});
