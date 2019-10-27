document.querySelector("#addClinicBtn").addEventListener("click", () => {
    const name = document.querySelector("#record-name").value;
    const address = document.querySelector("#record-address").value;
    const phone = document.querySelector("#record-phone").value;

    const data = {
        name,
        address,
        phone
    };
    const request = new XMLHttpRequest();
    request.open("POST", "/clinic");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
})

document.querySelector("#addAppointmentBtn").addEventListener("click", () => {
    const pet_id = document.querySelector("#record-pet-id").value;
    const clinic_id = document.querySelector("#record-clinic-id").value;
    const date = document.querySelector("#record-date").value;
    const time = document.querySelector("#record-time").value;
    const formattedTime = moment(date + " " + time).format();
    const data = {
        pet_id,
        clinic_id,
        date,
        formattedTime
    };
    const request = new XMLHttpRequest();
    request.open("POST", "/appointment");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
})