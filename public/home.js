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

