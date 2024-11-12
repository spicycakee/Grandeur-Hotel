document.addEventListener('DOMContentLoaded', function () {
            var checkinElem = document.getElementById('checkin-date');
            var checkoutElem = document.getElementById('checkout-date');

            // Set the minimum check-in date to the current date
            var currentDate = new Date();
            var currentDateString = currentDate.toISOString().split('T')[0];
            checkinElem.min = currentDateString;

            checkinElem.addEventListener('change', function () {
                // Prevent setting check-in date to yesterday
                var selectedDate = new Date(this.value);
                var today = new Date();
                if (selectedDate < today) {
                    this.value = currentDateString;
                    alert('Check-in date cannot be set to yesterday.');
                }

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
                // Ensure check-out date is after check-in date
                validateDates();
            });
        });

        function validateDates() {
            var checkinElem = document.getElementById('checkin-date');
            var checkoutElem = document.getElementById('checkout-date');

            var checkinDate = new Date(checkinElem.value);
            var checkoutDate = new Date(checkoutElem.value);

            if (checkinDate >= checkoutDate) {
                // Using SweetAlert2 for a user-friendly alert
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Date Range',
                    text: 'Check-out date must be after the check-in date',
                });
                // You may want to add more user-friendly error handling here
                // and prevent the form submission or take corrective action.
            }
        }

        

        