// // ### Exercise 1

// // - Create the following array ```["John", "Paul", "George", "Pete"]```
// // - Console.log ONLY Pete’s name from the list
// // - Change Pete’s name to ‘Ringo’
// // - Console.log the list
// // - Add the name ‘Yoko’ to the list
// // - Console.log the list
// // *********************/
// // 1.
// //CREATING ARRAY
// let beatles = ["John", "Paul", "George", "Pete"];
// //LOGGING ONLY PETE'S NAME
// console.log(beatles[3]);
// //CHANGE PETE TO RINGO
// beatles[3]= "Ringo";
// //PRINT THE NEW ARRAY
// console.log(beatles)
// //ADD YOKO TO END OF THE LIST
// beatles.push("Yoko");
// //PRINT THE NEW ARRAY
// console.log(beatles);

//****************************************************/

// ### Exercise 2
// - Write a program that asks the user to enter 4 ages. Save each of the ages into an array.
// - Console.log the list of ages
// - Delete the third age.
// - Change the second element (NOT index 2, the second element) to a different age.
// - Console.log the list of ages
//**********************/
// // 2.
// //CREATE PROMPTS TO STORE EACH AGE GIVEN IN A VARIABLE
// let userAge1 = prompt("Please enter an age");
// let userAge2 = prompt("Please enter another age");
// let userAge3 = prompt("Please enter another age");
// let userAge4 = prompt("Please enter another age");
// //CREATE ARRAY THAT STORES EACH VALUE GIVEN 
// let arrayOfAges = [userAge1,userAge2,userAge3,userAge4];
// //PRINT ARRAY IN CONSOLE
// console.log(arrayOfAges);
// //DELETE THE 3RD AGE
// arrayOfAges.splice(2,1)
// //CHANGE THE SECOND ELEMENT TO A DIFFERENT AGE
// arrayOfAges[1]= 5;
// //LOG THE FINAL LIST OF AGES
// console.log(arrayOfAges)

//*****************************************************/

// ### Exercise 3
// Write a program that asks the user to enter any four names into an array. If they enter the name Kenn, ignore it and don't enter it in the array. Console.log the resulting array.
//********************/
// 2.
// ASK THE USER TO ENTER 4 NAMES
let userName1 = prompt("Please enter a name");
let userName2 = prompt("Please enter another name");
let userName3 = prompt("Please enter another name");
let userName4 = prompt("Please enter another name");
let allUserNames = [userName1,userName2,userName3,userName4];
//ADD A CONDITIONAL
// !! : you want your second condition to run EVEN IF you first condition is true so use seperate IFs instead of ELSE IF
if(userName1=="Kenn"){
    allUserNames.splice("Kenn",1)
    console.log(allUserNames-"Kenn")
} else if(userName2=="Kenn"){
    allUserNames.splice("Kenn",1)
    console.log(allUserNames-"Kenn")
} else if(userName3=="Kenn3){ 
    allUserNames.splice("Kenn",1) // you're missing an end quotation mark on line 69
    console.log(allUserNames)
} else if(userName4=="Kenn"){
    allUserNames.splice("Kenn",1)
    console.log(allUserNames);
} else{
    console.log(allUserNames)
}