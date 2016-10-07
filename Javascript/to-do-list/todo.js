
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field


      // store what the user typed in
      var userInput = document.getElementById('todo-input');

      // select the to-do list items
      var toDoList = document.querySelector('.todo-list-items');

      // create a new list item
      var newLiItem = document.createElement('li');

      // set the new list item's value to whatever the user types in
      newLiItem.textContent = userInput.value;

      // add the new list item to the end of the to-do list
      toDoList.appendChild(newLiItem);

      // reset the input box so the user can add something else
      userInput.value = '';
  }

  function markAsDone() {

    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

    // define the first item on the to-do list
    var firstItem = document.querySelector('.todo-list-items li');

    // select the done list items
    var doneList = document.querySelector('.done-list-items');

    // check there is something to add
    if (firstItem !== null){

      // take off the first item from the to-do list
    firstItem.remove();

    // add it to the done list
    doneList.appendChild(firstItem);

    // give it the same class so it has the strikethrough
    firstItem.className = 'done';

    // if everything is done, tell the user
    } else {
      alert("You've done everything! Go take a nap or something.")
    }

    
  }
  
}
