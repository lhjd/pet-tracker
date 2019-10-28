document
  .querySelector("#addAllergyRecordBtn")
  .addEventListener("click", event => {
    // event.preventDefault();
    const pet_id = document.querySelector("#record-pet-id").value;
    const symptom = document.querySelector("#record-symptom").value;
    const food = document.querySelector("#record-food").value;

    var data = { pet_id, symptom, food };

    var request = new XMLHttpRequest(); // new HttpRequest instance

    request.addEventListener("load", () => {
      console.log("*** added allergy! ***")
    });

    request.open("POST", "/allergy");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.send(JSON.stringify(data));
    $("#addAllergyModal").modal("hide");
  });
