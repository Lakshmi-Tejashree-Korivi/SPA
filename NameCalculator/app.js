var user = {
  name: "",
  type: "user"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
  calculateNumericOutput ();
}

function calculateNumericOutput () {
  user.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for (var i = 0; i < user.name.length; i++) {
    totalNameValue += user.name.charCodeAt(i);
  }

  //To insert result into the web page
  var output = "Total Numeric value of the name is " + totalNameValue;
  document.getElementById('output').innerText = output;
}
