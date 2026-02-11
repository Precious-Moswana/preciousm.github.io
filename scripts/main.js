const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-logo.png") {
    myImage.setAttribute("src", "images/google-logo.png");
  } else {
    myImage.setAttribute("src", "images/firefox-logo.png");
  }
});
//let and const work the same way in JavaScript

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/*function setUserName() 
{
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;

   /* if (!localStorage.getItem("name")) 
    {
        setUserName();
    } 
    else 
    {
       const storedName = localStorage.getItem("name");
       myHeading.textContent = `Mozilla is cool, ${storedName}`;
    }

}
*/
function setUserName() {
  const myName = prompt("Please enter your name.");
    if (!myName) 
    {
        setUserName();
    }
     else
     {
        localStorage.setItem("name", myName);
        //myHeading.textContent = `Mozilla is cool, ${myName}`;
        myHeading.innerHTML = `Mozilla is cool, ${myName}`;
     }
}


myButton.addEventListener("click", () =>
 {

  setUserName();

});

