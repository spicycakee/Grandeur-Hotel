function validateTotalGuests() {
    var roomSelection = document.getElementById('roomselection').value;
    var adults = parseInt(document.getElementById('adult').value);
    var children = parseInt(document.getElementById('children').value);
    var totalGuests = adults + children;

    if (roomSelection === 'guestroom_1kb' && totalGuests >= 3) {
        alert('Guest Room, 1 King Bed allows a maximum of 3 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'guestroom_2db' && totalGuests >= 2) {
        alert('Guest Room, 2 Double Beds allows a maximum of 2 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'lguestroom_1kb' && totalGuests >= 4) {
        alert('Large Guest Room, 1 King Bed allows a maximum of 4 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'lguestroom_2db' && totalGuests >= 2) {
        alert('Large Guest Room, 2 Double Beds allows a maximum of 2 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'exec_1kb' && totalGuests >= 3) {
        alert('Executive Suite, 1 King Bed allows a maximum of 3 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'exec_2db' && totalGuests >= 2) {
        alert('Executive Suite, 2 Double Beds allows a maximum of 2 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'exec_1kb_balc' && totalGuests >= 4) {
        alert('Executive Suite with Balcony, 1 King Bed allows a maximum of 4 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'exec_2db_balc' && totalGuests >= 4) {
        alert('Executive Suite with Balcony, 2 Double Beds allows a maximum of 4 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'bus_lounge_1kb' && totalGuests >= 4) {
        alert('Business Lounge Suite, 1 King Bed allows a maximum of 4 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'bus_lounge_2db' && totalGuests >= 2) {
        alert('Business Lounge Suite, 2 Double Beds allows a maximum of 2 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'bus_lounge_1kb_pool' && totalGuests >= 4) {
        alert('Business Lounge Suite with Pool View, 1 King Bed allows a maximum of 4 guests (adults + children).');
        return false; // Prevent form submission
    } else if (roomSelection === 'bus_lounge_2db_pool' && totalGuests >= 2) {
        alert('Business Lounge Suite with Pool View, 2 Double Beds allows a maximum of 2 guests (adults + children).');
        return false; // Prevent form submission
    }

    return true; // Allow form submission if no validation failed
}