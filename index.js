console.log("hello");

const addToFunc = () => {
  // gets value from main text area
  let input = document.getElementById("inputStatus").value;
  // creates element for the value of input

  let title = document.getElementById("title");
  let date = document.getElementById("date");

  let status = document.createElement("p");
  let d = new Date();
  title.innerHTML = "User :";
  date.innerHTML = `${d.getHours()}:${d.getMinutes()} `;
  //creates a node for the original input
  let textnode = document.createTextNode(input);
  status.appendChild(textnode);
  status.prepend(date);
  status.prepend(title);

  document.getElementById("addTask").appendChild(status);
  status.classList.add("statusBox");
};

const eraseText = () => {
  //erases placeholder text
  document.getElementById("inputStatus").value = "";
};
