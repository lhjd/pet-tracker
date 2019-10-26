document
  .querySelector("#addKibblesRecordBtn")
  .addEventListener("click", () => {
    console.log("*** addKibblesRecordBtn ***");
    const brand = document.querySelector("#record-brand").value;
    const description = document.querySelector("#record-description").value;
    const weight = document.querySelector("#record-weight").value;
    const price = document.querySelector("#record-price").value;
    const date_purchased = document.querySelector("#record-date-purchased").value;
    const date_opened = document.querySelector("#record-date-opened").value;
    const date_expiry = document.querySelector("#record-date-expiry").value;
    const data = { 
      brand,
      description,
      weight,
      price,
      date_purchased,
      date_opened,
      date_expiry
     };
    const request = new XMLHttpRequest();
    request.open("POST", "/kibbles");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
  });

  document
  .querySelector("#addFeedingRecordBtn")
  .addEventListener("click", () => {
    console.log("*** addFeedingRecordBtn ***");
    const pet_id = document.querySelector("#record-pet-id").value;
    const daily_frequency = document.querySelector("#record-daily-frequency").value;
    const portion_weight = document.querySelector("#record-portion-weight").value;
    const kibbles_id = document.querySelector("#record-kibbles-id").value;
    const plan_name = document.querySelector("#record-plan-name").value;
    const data = { 
      pet_id,
      daily_frequency,
      portion_weight,
      kibbles_id,
      plan_name
     };
    const request = new XMLHttpRequest();
    request.open("POST", "/feeding");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
  });