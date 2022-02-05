console.log("hello");

const addToFunc = () => {
  // gets value from main text area
  let input = document.getElementById("inputStatus").value;
  // creates element for the value of input
  let title = document.createElement("h6");
  let status = document.createElement("p");
  let reply = document.createElement("ul");

  let replyList = document.createElement("li");

  //creates a node for the original input
  let textnode = document.createTextNode(input);
  status.appendChild(textnode);
  status.prepend(title);
  status.appendChild(reply);

  reply.appendChild(replyList);
  document.getElementById("addTask").appendChild(status);
  status.classList.add("statusBox");
  replyList.classList.add("reply");

  //creates a container for the remove button
  let statusBox = document.createElement("div");
  //creates a button to delete status
  let removeTask = document.createElement("input");
  // adds type of which it is a button
  removeTask.setAttribute("type", "button");
  removeTask.classList.add("removeButton");
  // sets the buttons value
  // sets the button next to the status text
  //sets the button to remove status
  removeTask.addEventListener(
    "click",
    function () {
      status.parentNode.removeChild(status);
    },
    false
  );

  //For reply
};

const eraseText = () => {
  //erases placeholder text in textarea
  document.getElementById("inputStatus").value = "";
};
