var passwordVisibilityToggle = function() {
    var elements = document.querySelectorAll('.password-toggle');

    var _loop = function _loop(i) {
        var passInput = elements[i].querySelector('.form-control'),
            passToggle = elements[i].querySelector('.password-toggle-btn');
        passToggle.addEventListener('click', function(e) {
            if (e.target.type !== 'checkbox') return;

            if (e.target.checked) {
                passInput.type = 'text';
            } else {
                passInput.type = 'password';
            }
        }, false);
    };

    for (var i = 0; i < elements.length; i++) {
        _loop(i);
    }
}();
// var passwordField = document.querySelector('.password-toggle-btn');
// var show = document.querySelector('.show-password');
// var hide = document.querySelector('.hide-password');

// show.onclick = function() {
//     passwordField.setAttribute("type", "text");
//     show.style.display = "none";
//     hide.style.display = "block";
// }

// hide.onclick = function() {
//     passwordField.setAttribute("type", "password");
//     hide.style.display = "none";
//     show.style.display = "block";
// };

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();
const checkPassword = () => {

    let valid = false;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};