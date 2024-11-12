document.addEventListener('DOMContentLoaded', function () {
    var checkinElem = document.getElementById('checkindate');
    var checkoutElem = document.getElementById('checkoutdate');

    // Set the minimum check-in date to the current date
    var currentDate = new Date();
    var currentDateString = currentDate.toISOString().split('T')[0];
    checkinElem.min = currentDateString;

    checkinElem.addEventListener('change', function () {
        checkoutElem.min = this.value;
        // Disable checkout date input if no check-in date is selected
        if (!this.value) {
            checkoutElem.value = '';
            checkoutElem.disabled = true;
        } else {
            checkoutElem.disabled = false;
        }
        validateDates();
    });

    checkoutElem.addEventListener('change', function () {
        checkinElem.max = this.value;
        validateDates();
    });
    // Add event listeners to the textboxes
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

    function validateDates() {
        var checkinElem = document.getElementById('checkindate');
        var checkoutElem = document.getElementById('checkoutdate');
        
        var checkinDate = new Date(checkinElem.value);
        var checkoutDate = new Date(checkoutElem.value);
        
        if (checkinDate >= checkoutDate) {
            alert('Check-out date must be after the check-in date');
            // You may want to add more user-friendly error handling here
            // and prevent the form submission or take corrective action.
        }
    }