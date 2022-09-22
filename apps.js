let usersName;

function greetUser(){
    usersName = prompt("Are you a Teacher, TA or Student?");
   if (usersName == "") {
      usersName = prompt("Who are you?");
   }
   console.log(usersName);
   document.write("Ciao " + usersName + "! Welcome!");
   return usersName;
}
//let usersName = prompt ("Are you a Teacher, TA or Student?");

//console.log("Ciao "  +  "! Welcome!");

//document.write("Ciao " + usersName + "! Welcome!");
function customAlert() {
   if (usersName.toLowerCase () == "student") {
      alert("Dai! Veramente? Come on! Really?");
   } else if (usersName.toLowerCase () == "teacher") {
      alert("Eh, figurati….  Well, what a surprise….");
   } else if (usersName.toLowerCase () == "ta") {
      alert("Posso dire quel che mi va. I can say whatever I want.");
   } else {
      alert("Divertiti! Have a good time!");
   }
   
} 
greetUser();
customAlert();

let foodQuestion = prompt ("Do you like to eat??")
console.log(foodQuestion)

if (foodQuestion.toLowerCase () == "yes") {
   alert("Mangiamo! Lets eat!");
}
else if (foodQuestion.toLowerCase () == "no") {
   alert("Poverino! You poor thing!");
   
}
let rating = prompt("How may stars would you rate my page? 1-5");
for (let i = 0; (i<rating && i<5); i++){
   console.log(i);
   document.write("<img style= 'width: 50px;' src= 'https://toppng.com/uploads/preview/transparent-background-star-115497268824j1ftohfyn.png' alt= 'star picture'/>");
   
}