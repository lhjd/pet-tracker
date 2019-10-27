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