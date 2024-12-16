// const father = document.getElementById("game-container");
// const title = document.createElement("p");
// title.innerText = "hahsadgds";

// father.appendChild(title);

// const titleDiv = document.createElement("div");
// titleDiv.innerText = "BLABLABLA";

// father.replaceChild(titleDiv, title);

// const button = document.createElement("button");
// const buttonText = document.createElement("p");
// buttonText.innerText = "click me";
// father.appendChild(button);
// button.appendChild(buttonText);
// button.style.backgroundColor = "black";
// buttonText.style.color = "red";
// button.onclick = function () {
//   let switchColor = buttonText;
//   buttonText.style.color = "blue";
//   return switchColor;
// };
// const textBle = document.createElement("p")
// textBle.innerText = "blebleble"
// father.appendChild(textBle)
// textBle.onmouseenter = function (){
//     let switchColor = textBle
//     textBle.style.color = "red"
//     return switchColor
// }
const container = document.getElementById("game-container");
const login = document.createElement("h1");
login.innerText = "Login";
container.appendChild(login);
const userName = document.createElement("input");
userName.innerText = "user name";
container.appendChild(userName);
const password = document.createElement("input");
password.type = "password"
container.appendChild(password);
const showPassContainer = document.createElement ("div")
const showPassButton = document.createElement ("input")
const showPassText = document.createElement ("p")
showPassText.innerText = "Show password"
container.appendChild (showPassContainer)
showPassContainer.appendChild(showPassButton)
showPassContainer.appendChild(showPassText)
const signIn = document.createElement ("button")
container.appendChild(signIn);
const buttonText = document.createElement ("p")
buttonText.innerText = "Sign in"
signIn.appendChild(buttonText)
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.width = "25%"
container.style.alignItems = "center"
container.style.gap = "20px"
container.style.backgroundColor = "white"
container.style.padding = "50px 20px"
document.body.style.display = "flex"
document.body.style.justifyContent = "center"
document.body.style.backgroundColor = "green"
document.body.style.alignItems = "center"
document.body.style.margin = "0"
signIn.style.padding = "5px 20px"
buttonText.style.margin = "0"
login.style.margin = "0"
showPassContainer.style.display = "flex"
showPassContainer.style.fontSize = "10px"
showPassButton.style.backgroundColor = "red"
showPassButton.type = "checkBox"
signIn.addEventListener("click", checker);
function checker (){
    console.log(userName.value)
    if (userName.value.includes("@"))
        console.log("true")
    else alert("Wrond email")
    if (password.value > 8) {
        console.log("true")
    } else alert ("Wrond password")
        
}
showPassButton.addEventListener("input", showPass)

function showPass (){
    if (showPassButton.checked){
        password.type = "text"
    } else password.type = "password"
  
}




