document.addEventListener('DOMContentLoaded', function () {
            var lastnameElem = document.getElementById('lastname');
            var firstnameElem = document.getElementById('firstname');
            var middlenameElem = document.getElementById('middlename');
            var emailElem = document.getElementById('email');
            var phoneElem = document.getElementById('phone');
            var totalAdultsElem = document.getElementById('adult');
            var totalChildrenElem = document.getElementById('children');
            var checkinElem = document.getElementById('checkin-date');
            var checkoutElem = document.getElementById('checkout-date');
            var roomselectionElem = document.getElementById('roomselection');

            form.addEventListener('submit', function (e) {
                let messages = [];

                // Check for empty or invalid inputs
                if (!isValidInput(lastnameElem.value)) {
                    messages.push('Invalid Last Name');
                    lastnameElem.classList.add('error');
                } else {
                    lastnameElem.classList.remove('error');
                }

                if (!isValidInput(firstnameElem.value)) {
                    messages.push('Invalid First Name');
                    firstnameElem.classList.add('error');
                } else {
                    firstnameElem.classList.remove('error');
                }

                if (!isValidInput(middlenameElem.value)) {
                    messages.push('Invalid Middle Name');
                    middlenameElem.classList.add('error');
                } else {
                    middlenameElem.classList.remove('error');
                }

                if (!isValidEmail(emailElem.value)) {
                    messages.push('Invalid email format. Allowed domains are: gmail.com, yahoo.com, ymail.com, hotmail.com, and aol.com');
                    emailElem.classList.add('error');
                } else {
                    emailElem.classList.remove('error');
                }

                if (!isValidInput(phoneElem.value)) {
                    messages.push('Invalid Phone Number');
                    phoneElem.classList.add('error');
                } else {
                    phoneElem.classList.remove('error');
                }

                if (!isValidInput(totalAdultsElem.value)) {
                    messages.push('Invalid Number of Adults');
                    totalAdultsElem.classList.add('error');
                } else {
                    totalAdultsElem.classList.remove('error');
                }

                if (!isValidInput(totalChildrenElem.value)) {
                    messages.push('Invalid Number of Children');
                    totalChildrenElem.classList.add('error');
                } else {
                    totalChildrenElem.classList.remove('error');
                }

                if (!isValidInput(checkinElem.value)) {
                    messages.push('Invalid Check-in Date');
                    checkinElem.classList.add('error');
                } else {
                    checkinElem.classList.remove('error');
                }

                if (!isValidInput(checkoutElem.value)) {
                    messages.push('Invalid Check-out Date');
                    checkoutElem.classList.add('error');
                } else {
                    checkoutElem.classList.remove('error');
                }

                if (!isValidInput(roomselectionElem.value)) {
                    messages.push('Invalid Room Selection');
                    roomselectionElem.classList.add('error');
                } else {
                    roomselectionElem.classList.remove('error');
                }

                if (messages.length > 0) {
                    e.preventDefault();
                    Swal.fire({
                        icon: 'error',
                        title: 'Validation Error',
                        text: messages.join('\n'),
                    });
                }
            });

            // Function to check if the input is valid (not empty)
            function isValidInput(input) {
                return input.trim() !== '';
            }

            // Function to check if the email format is valid
            function isValidEmail(email) {
                var emailRegex = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com|ymail\.com|hotmail\.com|aol\.com)$/;
                return emailRegex.test(email);
            }
        });

        