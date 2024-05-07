#!/usr/bin/env node

// // Task :1
// installation completed

// // Task 2: Solution
// let message : string = "Eric"
// console.log(`Hello ${message} ,would you like some phyton today?)

// // Task 3: Solution
// let cases : string = "ali"
// console.log("toLowerCase" , cases.toLowerCase())

// console.log("toLocalUpperCase" , cases.toUpperCase())

// console.log("titlecase", cases.replace(/\b\w/g,c=>c.toUpperCase()))

// Task 4: Solution
// let quote : string = "A person who never made a mistake never tried anything new."
// let author :string = "Albert Einstein"
// console.log(`${author} once said ,"${quote}"`)

// // Task 5: Solution
// let famous_person: string = "Albert Einstein"
// let message : string= (`${author} once said ,"${quote}"`)
// console.log(message)

// Task 6 : Solution
// let personName : string = "\t\n ali \n\t"
// console.log("Original" , personName);
// console.log("stripped" , personName.trim());

// Task 7and 8: Solution
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(2 * 4);
// console.log(16 / 2);

// console.log(`Dear ${items}, you are invited to
// Task 9: Solution
// // printing my favourite number
// let favourite_number : number = 3;
// // revealing my favourite number formate
// console.log(`My favourite number is ${favourite_number}`);

// Task 10: Solution
// Name:Romaisa ,
//  Date: 7 march 2024

// Task 11: Solution
// let names : string[] = ["Sania" , "Ariba" , "Aiman" , "Nimra"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// Task 12: Solution
// let names : string[] = ["Sania" , "Ariba" , "Aiman" , "Nimra"];
// let message : string = "Do you coming today at my home"
// console.log(names[0] + " " + message);
// console.log(names[1] + " " + message);
// console.log(names[2] + " " + message);
// console.log(names[3] + " " + message);

// Task 13 : Solution
// let transportation : String[] = ["HondaMotorcycle" , "Civic" , "Alto" , "Superstar"];
// transportation.map((items) =>
// console.log(`I would like to own a ${items}`));

// Task 14 : Solution
// let guestlist : string[] = ["Fatima" , "Ayra" , "Ayat" , "Hira"]
// guestlist.map((items) =>
// console.log(`Dear ${items}, you are invited to the dinner`))

// Task 15: Solution
// let guestlist : string[] = ["Fatima" , "Ayra" , "Ayat" , "Hira"];
//  let CanNotAttened : string = "Fatima";
//  console.log(CanNotAttened + " " +`can not attened the dinner`);

//  let newGuest : string = "Haya"
//  guestlist [guestlist.indexOf(CanNotAttened)] = newGuest;
//  console.log(guestlist);

// guestlist.map((items) => 
//(console.log(`Dear ${items}, you are invited to the dinner`))

// Task 16 : Solution
// let guestlist : string[] = ["Fatima" , "Ayra" , "Ayat" ,"Hira"];
// let CanNotAttened : string = "Ayra"
// console.log(CanNotAttened)

// let newGuest : string = "Amna"
// guestlist[guestlist.indexOf(CanNotAttened)] = newGuest
// console.log(guestlist)

// guestlist.map((items)=>
// console.log(`Dear ${items}, I found a bigger table you are invited to the Dinner.`))

//part 2
// let newguestBeg :string = "Alishba"
// guestlist.unshift(newguestBeg)
// console.log(guestlist)

//part 3
// let middleguest : string = "Saima";
// let middleIndex = guestlist.length/3;
// guestlist.splice(middleIndex,0,middleguest);
// console.log(guestlist)

// par 4
// guestlist.push("Maham")
// console.log(guestlist)

// Task 17 Solution
// let guestlist : string[] = ["Fatima" , "Ayra" , "Ayat" ,"Hira" , "Alishba"];
// console.log(guestlist);

// removeGuest  for the guestlist
// while (guestlist.length > 2) {
// const removeGuest = guestlist.pop();
// console.log(`Sorry ${removeGuest}, you can not invite the Dinner`)
// }

// // printthe remain two guest
// guestlist.forEach((guestlist) =>
// console.log(`Dear ${guestlist}, you are still invited to the Dinner.`)
// );

// // Removing the last two of the list
// guestlist.pop();
// guestlist.pop();

// // Print the final guest listto confirm  for an empty
// console.log(`finalguestlist`, guestlist)

// // Task 18: Solution
// let placesTovisit : string[] = ["Canada" , "Turkey" , "Dubai" ,"Australia"];

// //Print the array in its Original order
// console.log("Original order" , placesTovisit);

// // print the array in Alphabetical order
// console.log("Alphabetical order" ,[... placesTovisit].sort());

// // Show that the array is still in its Original order
// console.log("original order after sorting" ,placesTovisit )

// // Print the array in reverse Alphabetical order without changing the order of the original list.
// console.log("Reverse in Alphabetical order" , [...placesTovisit].sort().reverse());

// //Show that your array is still in its Original order by printing it again
// console.log("Original order in again" , placesTovisit);

// //Reverse the order of your list. Print the array to show that its order has changed.
// console.log("Reverse the order" , [...placesTovisit].sort().reverse());

// // Reverse the order of your list again. Print the list to show it’s back to its original
// console.log("Reverse the order in it's original order again" , placesTovisit);

// //Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// console.log("Sort your array in alphabetical order" , [...placesTovisit].sort());

// //Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// console.log("Sort to change your array in reverse alphbetical order" , [...placesTovisit].sort((a,b) => b.localeCompare (a)));

// Task : 19 
// let invitation: string[] = ["Ali", "Fatima"];
//  let count_invitation : number = invitation.length
//  console.log(`${count_invitation} ,people invited to the Dinner`);

// Task : 20
// let countries : string[] = ["Australia" , "Japan" , "Africa" , "Pakistan" , "Paris"];

// console.log("list of Countries");
// console.log(countries);

// //Task : 21
// let person : {name :  string , fname : string , age : number} = {name :"Romaisa" , fname : "female" , age : 19};
// console.log(person);

// //Task : 22
// let daysName :string[] =["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
// console.log(daysName[(7)]); // intensional error
// console.log(daysName[(6)]);

// //Task : 23
// let car = `subaru` 
// console.log("Is car == subaru? I predict True"); //1
// console.log(car == `subraru`);

// console.log("car == subaru? predict False"); //2
// console.log(car == `subaru`);

// console.log("car != subaru? predict False"); //3
// console.log(car != `subaru`);

// console.log("car == honacity? predict False"); //4
// console.log(car == `hondacity`);

// console.log("car != hondacity? predict True"); //5 
// console.log(car != `hondacity`);

// console.log("car != hondacity? predict True"); //6 
// console.log(car != `hondacity`);

// console.log("4 => 5 predict False"); //7
// console.log( 4 > 5 );

// console.log("car != maha? predict True"); //8
// console.log(car != `maha`);

// console.log("56 < 67 predict False"); //9
// console.log(56 < 67);

// console.log("car == SUBARU predict True"); //10
// console.log(car == `SUBARU`);

// //Task : 24
// let name_1 : string = "uzair"
// let name_2 : string = "m.uzair"
// let name_3 : string = "m.uzair khurram"

// if (name_1 == name_2) {
//     console.log("names are equal");
// }else {
//     console.log("names are not equal");
// }

// if(name_1 != name_2) {
//     console.log("names are equal");
// }

// if (name_1 != name_3){
//     console.log("names are equal")
// }

// let age_1 : number = 18
// let age_2 : number = 30

// if(age_1 == 18){
//     console.log("Eligible for vote");
// }

// if (age_2 == 30){
//     console.log("Eligible for vote is older category");
// }

// if (age_1 <= age_2){     //less than
//     console.log("Younger");
// }

// if (age_2 >= age_1){    // greater than
//     console.log("Older");
// }

// if (age_1 == 18 && age_2 == 30) {
//  console.log("person is eligible for vote");
// }

// if (age_1 == 18 || age_2 == 30) {
//     console.log("person is not eligible for vote");
// }

// let country: string[] = ["Pakistan" , "Japan" , "Australia" , "England"];
// if (country.includes ("Pakistan"))(
//     console.log("Pakistan is in country list")
// )

// if (!country.includes ("China"))(
//     console.log("China is not include is an array")
// )

// // //Task : 25
// // let alien_colour : string = "green";
// // if(alien_colour == "green"){
// // console.log(" the player just earned 5 points")
// // }

// // alien_colour = "red";
// // if (alien_colour == "green"){
// // console.log("no output")
// // }

// // //Task :26
// // let alien_colour : string = "green" 
// // if(alien_colour == "green"){
// //     console.log("the player just earned 5 points for shooting the alien.");
// // }else{
// //     console.log("the player just earned 10 points.");
// // }

// // alien_colour = "red"
// // if(alien_colour == "green"){
// //     console.log("the player just earned 10 points ")
// // }else{
// //     console.log("no output")
// // }

// // //Task :27
// // let alien_colour : string = "green" 
// // if(alien_colour == "green"){
// //     console.log("the player just earned 5 points");
// // }else if(alien_colour == "yellow"){
// //     console.log("the player just earned 10 points");
// // }else {
// //     console.log("the player just earned 15 points");
// // }

// // alien_colour = "yellow"
// // if(alien_colour == "green"){
// //     console.log("the player just earned 5 points ");
// // }else if(alien_colour == "yellow"){
// //       console.log("the player just earned 10 points");
// // }else{
// //     console.log("the player just earned 15 points");
// // }

// // alien_colour = "red"
// // if(alien_colour == "green"){
// //     console.log("the player just earned 5 points ");
// // }else if (alien_colour == "yellow"){
// //     console.log("the player just earned 10 points");
// // }else{
// //     console.log("the player just earned 15 points");
// // }

// //Task :28
// let age  : number = 1
// if(age < 2){
//     console.log("that the person is a baby.")
// }else if (age < 4){
//     console.log("that the person is a toodler")
// }else if (age < 13){
//     console.log("that the person is a kid")
// }else if (age < 20){
//     console.log("that the person is a tenager")
// }else if(age < 65){
//     console.log("that the person is a adult")
// }else{
//     console.log("that the person is a older")
// }

// age = 19
// if(age < 2){
//     console.log("that the person is a baby.")
// }else if (age < 4){
//     console.log("that the person is a toodler")
// }else if (age < 13){
//     console.log("that the person is a kid")
// }else if (age < 20){
//     console.log("that the person is a tenager")
// }else if(age < 65){
//     console.log("that the person is a adult")
// }else{
//     console.log("that the person is a older")
// }

// age= 100
// if(age < 2){
//     console.log("that the person is a baby.")
// }else if (age < 4){
//     console.log("that the person is a toodler")
// }else if (age < 13){
//     console.log("that the person is a kid")
// }else if (age < 20){
//     console.log("that the person is a tenager")
// }else if(age < 65){
//     console.log("that the person is a adult")
// }else{
//     console.log("that the person is a older")
// }

// //Task :29

// let favourite_fruits : string[] = ["Apple" , "Berry" , "Guava" , "Peach" , "Kivi"]

// if (favourite_fruits.includes("Guava")){
//     console.log("Guava");
// }

// if (favourite_fruits.includes("Apple")){
//     console.log("you really like bananas");
// }

// if (favourite_fruits.includes("Kivi")){
//     console.log("Kivi");
// }

// if (favourite_fruits.includes("Berry")){
//     console.log("you really like bananas");
// }

// //Task:30
// let users : string [] = ["admin" , "ali" , "eric" , "haseeb"]
// for(let user of users) {
// if(user === "admin"){
//     console.log(`hello admin would you like to see status report`)
// } 
// else {
//     console.log(`hello ,${user} thankyou for login`)
// }

// //Task: 31
// let users : string [] = ["admin" , "ali" , "eric" , "haseeb"]
// if(users.length === 0) {
//   console.log("we need to find some users")
//         } else {
//   for(let user of users) 
//     if(user === "admin"){
//         console.log(`hello admin would you like to see status report`)
//         } else {
//            console.log(`hello ,${user} thank you for login in again`)
//          }
//         }

//  users = []
//  if(users.length === 0) {
//   console.log("we need to find some users!")
// }

// //Task :32
// let current_users : string [] = ["Ali" , "admin" , "Fatima" , "Amna" , "dua"]
// let new_users : string [] = ["admin" , "dua" , "Alia" , "Laiba" , "Nimra"]

// let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

//  for(let new_user of new_users) {
//   if (current_users_lower.includes (new_user.toLowerCase())) {
//     console.log(`Sorry ${new_user} that name is taken`)
//  } else {
//   console.log(`yes ${new_user}, is still in avaible list`)
//      }
// }

// //Task :33
// let numbers : number [] = [1,2,3,4,5,6,7,8,9]

// for(let number of numbers) {

//   if(number === 1) {
//     console.log(`${number}st`) // 1st

//   } else if(number === 2){
//       console.log(`${number}nd`) // 2nd

//     } else if(number === 3){
//       console.log(`${number}rd`) // 3rd

//     } else {
//       console.log(`${number}th`) // 4th,5th,6th,7th,8th,9th
//     }
//   }

// // Task : 34
// let favourite_pizza : string [] = ["peproni" , "chicken" , "fajita"]

// for( let pizza of favourite_pizza) {
//   console.log(pizza)
// }

// console.log("\n")

// for(let pizza of favourite_pizza) {
// console.log(`I really like ${pizza} pizza`)
// }
// console.log("\n I really love pizza")

// Task : 35
// let animals : string [] = ["tiger" , "cat" , "dog"]

// for(let animal of animals) {
//   console.log(animal)
// }

// console.log("\n")

// for(let animal of animals) {
//   console.log(` A ${animal} has a tail`)
// }

// console.log("\n")

// console.log("all of these are great pets , but i love cat more")

// //Task : 36
// function makeShirt(size : string , text : string) : void {
// console.log (`you have a order ${size} shirt that say ${text}`)
// }
// makeShirt(`Large` ,` "I love typescript" `)
// makeShirt(`medium` ,` "I need a big shirt" `)

// //Task :37
// function makeShirt2(size : string = `Large` , text : string = `I love typescript`) : void {
// console.log(`you have a order ${size}, shirt that say ${text}`)
// }
// makeShirt2();
// makeShirt2(`medium`,)

// // different message
// makeShirt(`small`,`I need a big shirt wear`)

// //Task : 38
// function describe_city1(city : string , country : string = `Pakistan`) : void {
//   console.log(`${city} is in ${country}`)
// }
// describe_city1(`Karachi`)
// describe_city1(`France` , `Europe`)
// describe_city1(`Lahore` , `Punjab`)

// //Task : 39
// function describe_city(city : string , country : string): string { 
//   return `${city} , ${country}`}
//    let c1 = describe_city (`Lahore` , `Pakistan`) 
//    let c2 = describe_city (`Paris` , `france`)
//    let c3 = describe_city (`Tokyo` , `Japan`)

//    console.log(c1)
//    console.log(c2)
//    console.log(c3)

// //  Task : 40
// function makeAlbum (artist : string, title : string): {artist : String, title : String} {
// const dictionaries = {
//  artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//  title: title.charAt(0).toUpperCase() + title.slice(1)
//  };
//  return dictionaries;   
//  }

// let album = makeAlbum(`ali`, `light`)
// console.log(album)

// album = makeAlbum(`uzair`, `redwave`)
// console.log(album)

// album = makeAlbum(`rafy`, `seabreeze`)
// console.log(album)

// //  Task : 41
// function show_magicians(magicians: string[]) : void {
//     for(const magician of magicians){
//       console.log(magician.charAt(0).toUpperCase() + magician.slice(1)) ;
//     }
//   }
// const magician : string[] = ["ali" , "rafay" , "uzair"]
// //show_magicians(magician)
  
// // Task : 42
//   function make_great(magicians : string[]) : void {
//   for(let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + ` the great`
//   }
//   }
//   const magicians2 : string[] = ["ahmad" , "umar" , "wasay"]
//   make_great(magicians2)
// show_magicians(magicians2)

// // Task :43
// function make_great2(magicians: string[]): string[] {
// const greatmagicians: string[] = [];
// for(let i = 0; i < magicians.length; i++){
// greatmagicians.push(magicians[i] + ` the great`);
//   }
//    return greatmagicians;
// }
// const magician3: string[] = ["ahmad" , "umar" , "wasay"];
// const greatmagicians2: string[] = make_great2(magician3);
// show_magicians(magician3)
// show_magicians(greatmagicians2)

// // Task : 44
// function sandwich(...items : string[]): void {
// console.log("sandwich order :");
// for(let i = 0; i < items.length;i++){
//     console.log(`${items[i]}`)
//  }
// }
// console.log("enjoy your sandwich romaisa");

// sandwich(`cheese` , `BarBQ`);
// sandwich(`tomato` , `garlic`);
// sandwich(`chicken mayo` , `malai boti`);

// //Task:45

// type car= {
//   manufacture : string,
//   model : string,
//   [key: string] : any;
// }

// function create_car(manufacture : string , model : string , optional :Record<string, any>): car {
//   return{
//     manufacture,
//     model,
//     ...optional,
//   }
// }

// const my_car: car = create_car("Toyota" , "Hondacity",{colour : "silver", year :"2024"});
// console.log(my_car)