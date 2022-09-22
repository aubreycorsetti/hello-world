
 let usersName;
 
 function greetUser() {
   usersName = prompt ("Are you a Teacher, TA or Student?");
   if (usersName == ""){
      usersName = prompt("Who are you?")
   }
 
 console.log("Ciao"  + usersName + ! "Welcome!");
 document.write("Ciao!" + usersName + ! "welcome!");
 return usersName;

 greetUser();

 if (usersName == "Student || student") {
    alert("Dai! Veramente? Come on! Really?");
 } else if (usersName == "Teacher || teacher") {
    alert("Eh, figurati….  Well, what a surprise….");
 } else if (usersName == "TA || ta") {
    alert("Posso dire quel che mi va. I can say whatever I want.");
 } else {
    alert("Divertiti! Have a good time!");
 }
 
