let usersName;

function greetUser(){
   let usersName = prompt("Are you a Teacher, TA or Student?");
   if (usersName == "") {
      usersName = prompt("Who are you?");
   }
   console.log(usersName);
   document.write("Ciao " + usersName + "! Welcome!");
   return usersName;
}
greetUser();
let foodQuestion = prompt ("Do you like to eat??")
console.log(foodQuestion)

if (foodQuestion == "Yes") or ("yes") 
alert("Mangiamo! Lets eat!");
if (foodQuestion == "No") or ("no")
   alert("Poverino! You poor thing!");
 //let usersName = prompt ("Are you a Teacher, TA or Student?");
 
 //console.log("Ciao "  +  "! Welcome!");

 //document.write("Ciao " + usersName + "! Welcome!");
function customAlert() {
 if (usersName == "Student" || "student") {
    alert("Dai! Veramente? Come on! Really?");
 } else if (usersName == "Teacher" || "teacher") {
     alert("Eh, figurati….  Well, what a surprise….");
 } else if (usersName == "TA" || "ta") {
    alert("Posso dire quel che mi va. I can say whatever I want.");
 } else {
    alert("Divertiti! Have a good time!");
 }

 customAlert();} 
