document
  .querySelector("#addAllergyRecordBtn")
  .addEventListener("click", event => {
    // event.preventDefault();
    const recordSymptom = document.querySelector("#record-symptom").value;
    const recordFood = document.querySelector("#record-food").value;
    var data = { symptom: recordSymptom, food: recordFood };

    var request = new XMLHttpRequest(); // new HttpRequest instance

    request.addEventListener("load", function(event) {
    //   const record = JSON.parse(this.responseText);
      console.log("*** event ***", event);

    //   let timerInterval;
    //   Swal.fire({
    //     title: "Added allergy record!",
    //     html: "",
    //     timer: 500,
    //     onBeforeOpen: () => {
    //       Swal.showLoading();
    //     },
    //     onClose: () => {
    //       clearInterval(timerInterval);
    //     }
    //   }).then(result => {
    //     if (
    //       /* Read more about handling dismissals below */
    //       result.dismiss === Swal.DismissReason.timer
    //     ) {
    //       // console.log("I was closed by the timer");
    //     }
    //   });
    });

    request.open("POST", "/allergy");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    request.send(JSON.stringify(data));
    $("#addAllergyModal").modal("hide");
  });
