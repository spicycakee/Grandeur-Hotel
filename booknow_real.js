document.addEventListener('DOMContentLoaded', function () {
    const checkinElem = document.getElementById('checkindate');
    const checkoutElem = document.getElementById('checkoutdate');

    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split('T')[0];
    checkinElem.min = currentDateString;

    checkinElem.addEventListener('change', function () {
        checkoutElem.min = this.value;
        validateDates();
    });

    checkoutElem.addEventListener('change', function () {
        checkinElem.max = this.value;
        validateDates();
    });

    const lastname = document.getElementById('lastname');
    const firstname = document.getElementById('firstname');
    const middlename = document.getElementById('middlename');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const totalAdults = document.getElementById('adult');
    const totalChildren = document.getElementById('child');
    const form = document.getElementById('form');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', function (e) {
        let messages = [];

        if (
            firstname.value === '' || middlename.value === '' || lastname.value === '' ||
            email.value === '' || phone.value === '' || totalAdults.value === '' ||
            totalChildren.value === '' || checkinElem.value === '' || checkoutElem.value === '' ||
            roomselection.value === ''
        ) {
            messages.push('All fields are required');
        }

        if (messages.length > 0) {
            e.preventDefault();
            errorElement.innerText = messages.join(', ');
        }
    });
