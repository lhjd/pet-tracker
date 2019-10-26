document
  .querySelector("#addAllergyRecordBtn")
  .addEventListener("click", () => {
    const brand = document.querySelector("#record-brand").value;
    const data = { brand };
    const request = new XMLHttpRequest();
    request.open("POST", "/kibbles");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
  });
