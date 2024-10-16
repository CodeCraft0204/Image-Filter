// Get elements
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var btn = document.getElementById("saveBtn");
var closeBtn = document.getElementById("closeBtn");
var nameInput = document.getElementById("nameInput");
var saveFilter = document.getElementById("exportBtn");
var closeBtn1 = document.getElementById("closeBtn1");
// Open the popup
// Example: You can open it by clicking a button
// document.getElementById("yourButtonId").onclick = function() {
//   modal.style.display = "block";
// }

// Click the save button
btn.onclick = function() {
  var name = nameInput.value.trim(); // Get the value of the input box and remove the spaces before and after
  if (name === "") {
    alert("The name cannot be empty!"); // If it's empty, then pop up a warning
  } else {
    // If it's not empty, execute the save operation

    modal.style.display = "none"; // Close the popup

  }
}

// Click the <closeBtn> (x), close the popup
closeBtn.onclick = function() {
  modal.style.display = "none";
}

closeBtn1.onclick = function() {
  modal1.style.display = "none";
}

saveFilter.onclick = function(){
    modal.style.display = "block";
}

// Click outside the popup area, close the popup
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
