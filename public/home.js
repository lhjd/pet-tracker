function responseHandler() {
    document.querySelector("#random-dog-photo").setAttribute("src", JSON.parse(this.responseText).message);
  }
  
function fetchRandomDogPhoto() {
  const request = new XMLHttpRequest();
  request.addEventListener("load", responseHandler);
  var url = "/random/dog";
  request.open("GET", url);
  request.send();
}

document
  .querySelector("#fetch-random-dog-photo")
  .addEventListener("click", fetchRandomDogPhoto);


  document.querySelector("#addPetBtn").addEventListener("click", () => {
    const name = document.querySelector("#record-name").value;
    const breed = document.querySelector("#record-breed").value;
    const dob = document.querySelector("#record-dob").value;
    const data = {
        name,
        breed,
        dob
    };
    const request = new XMLHttpRequest();
    request.open("POST", "/pet");
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(data));
})

