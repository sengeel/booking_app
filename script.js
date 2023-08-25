const appointments = [];

function bookAppointment() {
    const bookingDateTime =document.getElementById("bookingDateTime");
    
    const bookingdateTimevalue = bookingDateTime.value;
   
    if (bookingdateTimevalue === '') {
        alert(`Please book an appointment`);
        return;
    }

    const now = new Date();
    const selectedDateTime = new Date(bookingdateTimevalue);

    if (selectedDateTime < now) {
       alert("You cannot book an appointment in the past");
       return;
    }

    const confirmbooking = document.getElementById('confirmationMessage')

    confirmbooking.innerHTML = `Appointment booked for ${bookingdateTimevalue}.`;

    appointments.push(selectedDateTime);
    displayAppointments();
}

function cancelAppointment(index) {
    appointments.splice(index, 1)
    displayAppointments();
}

function displayAppointments() {
    const appointmentsList = document.getElementById('appointmentsList')

    appointmentsList.innerHTML = '';
    
    appointments.forEach((app, index)=>{
        const li = document.createElement("li")
        li.innerHTML = `appointment on ${app.toLocaleString()}`

        const cancelButton = document.createElement('button');

        cancelButton.innerHTML = 'Cancel'

        cancelButton.onclick = () => cancelAppointment(index)

        li.appendChild(cancelButton);
        appointmentsList.appendChild(li);
    });
}


