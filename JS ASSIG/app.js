// CHAP#04 VARIABLE NAMES: LEGAL & ILLEGAL

// Q1
// variable1 = "value1";
// variable2 = "value2";
// variable3 = "value3";

// // Q2
// // Legal variable names:
// 1. // 'myVariable'
// 2. // '_variable'
// 3. // '$variable'
// 4. // 'variable123'
// 5. // 'myVariableName'

// // // IlLegal variable names:
// // Illegal variable names:
// 1.// '123variable' (Variable names cannot start with a number)
// 2.// 'my-variable' (Variable names cannot contain hyphens)
// 3.// 'my variable' (Variable names cannot contain spaces)
// 4.// 'var' (Reserved keywords like var cannot be used as variable names)
// 5.// 'myVariable!' (Variable names cannot contain special characters except for underscores (_) or dollar signs ($))


// Q3
// check index.html file

// ................................................



// CHAP#05 MATH EXPRESSIONS

// Q1
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");

// num1 = parseFloat(num1);
// num2 = parseFloat(num2);

// var sum = num1 + num2;

// document.write("<h2>Result:</h2>");
// document.write("<p>The sum of " + num1 + " and " + num2 + " is: " + sum + "</p>");


// // Q2
// // Prompt the user to enter two numbers
// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");

// // Convert the input strings to numbers
// num1 = parseFloat(num1);
// num2 = parseFloat(num2);

// // Perform operations
// var subtraction = num1 - num2;
// var multiplication = num1 * num2;
// var division = num1 / num2;
// var modulus = num1 % num2;

// // Display the results in the browser
// document.write("<h2>Results:</h2>");
// document.write("<p>Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "</p>");
// document.write("<p>Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "</p>");
// document.write("<p>Division: " + num1 + " / " + num2 + " = " + division + "</p>");
// document.write("<p>Modulus: " + num1 + " % " + num2 + " = " + modulus + "</p>");


// // Q3
//   // a. Declare a variable
//   var myVariable;

//   // b. Show the value of variable after declaration
//   document.write("Value after variable declaration is: " + myVariable + "<br>");

//   // c. Initialize the variable with some number
//   myVariable = 5;

//   // d. Show the initial value of the variable
//   document.write("Initial value: " + myVariable + "<br>");

//   // e. Increment the variable
//   myVariable++;

//   // f. Show the value of the variable after increment
//   document.write("Value after increment is: " + myVariable + "<br>");

//   // g. Add 7 to the variable
//   myVariable += 7;

//   // h. Show the value of the variable after addition
//   document.write("Value after addition is: " + myVariable + "<br>");

//   // i. Decrement the variable
//   myVariable--;

//   // j. Show the value of the variable after decrement
//   document.write("Value after decrement is: " + myVariable + "<br>");

//   // k. Show the remainder after dividing the variable’s value by 3
//   var remainder = myVariable % 3;

//   // l. Show the remainder
//   document.write("The remainder is: " + remainder + "<br>");



// // Q4
// // Store the ticket price in a variable
// var ticketPrice = 600;

// // Calculate the cost of buying 5 tickets
// var totalCost = ticketPrice * 5;

// // Output the result
// document.write("Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR");


// // Q5
//  // Prompt the user to enter a number
//  var number = prompt("Enter a number to display its multiplication table:");

//  // Convert the input string to a number
//  number = parseInt(number);

//  // Display the multiplication table in the browser
//  document.write("<h2>Table of " + number + ":</h2>");
//  for (var i = 1; i <= 10; i++) {
//    document.write(number + " x " + i + " = " + (number * i) + "<br>");
//  }


// // Q6
//  // a. Store a Celsius temperature into a variable
//  var celsiusTemperature = 25;

//  // b. Convert Celsius to Fahrenheit
//  var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

//  // Output the result
//  document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

//  // c. Store a Fahrenheit temperature into a variable
//  var fahrenheitTemperature2 = 70;

//  // d. Convert Fahrenheit to Celsius
//  var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;

//  // Output the result
//  document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");


// // Q7
// // Store the price of item 1 and item 2
// var priceItem1 = 650;
// var priceItem2 = 100;

// // Store the ordered quantity of item 1 and item 2
// var quantityItem1 = 3;
// var quantityItem2 = 7;

// // Store the shipping charges
// var shippingCharges = 100;

// // Calculate the total cost
// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// // Display the receipt in the browser
// document.write("<h2>Shopping Cart</h2>");
// document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
// document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
// document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
// document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
// document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
// document.write("<h3>Total Cost of your order is: " + totalCost + " PKR</h3>");


// // Q8
//  // Store total marks and marks obtained by the student
//  var totalMarks = 980;
//  var marksObtained = 804;

//  // Compute the percentage
//  var percentage = (marksObtained / totalMarks) * 100;

//  // Display the result in the browser
//  document.write("<h2>Marks Sheet</h2>");
//  document.write("<p>Total Marks: " + totalMarks + "</p>");
//  document.write("<p>Marks Obtained: " + marksObtained + "</p>");
//  document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


// // Q9
//  // Exchange rates
//  var usdToPkrRate = 104.80;
//  var sarToPkrRate = 28;

//  // Amount in US dollars and Saudi Riyals
//  var usdAmount = 10;
//  var sarAmount = 25;

//  // Convert to Pakistani Rupees in a single expression
//  var totalPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);

//  // Display the result in the browser
//  document.write("<h2>Currency in PKR</h2>");
//  document.write("<p>Total Currency in Pakistani Rupees: " + totalPkr + " PKR</p>");


// // Q10
// // Initialize the variable with some number
// var initialNumber = 10;

// // Perform arithmetic operations in a single expression
// var result = ((initialNumber + 5) * 10) / 2;

// // Display the result
// document.write("Result after arithmetic operations:", result);


// // // Q11
// // Store the current year in a variable
// var currentYear = new Date().getFullYear();

// // Store their birth year in a variable
// var birthYear = 2000; // For example, assuming the birth year is 1990

// // Calculate their possible ages based on the stored values
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// // Output the results to the screen
// document.write("They are either " + age1 + " or " + age2 + " years old.");


// // Q12
// // Step 1: Store the radius into a variable
// var radius = 20;

// // Step 2: Calculate the circumference
// var circumference = 2 * Math.PI * radius;

// // Step 3: Calculate the area
// var area = Math.PI * Math.pow(radius, 2);

// // Step 4: Output the results
// console.log("The Geometrizer: Radius of a circle is " + radius + ",");
// console.log("The circumference is " + circumference + ",");
// console.log("The area is " + area + ".");



// // Q13
// // Step 1: Store your favorite snack into a variable
// var favoriteSnack = "Chocolate Chip";

// // Step 2: Store your current age into a variable
// var currentAge = 15;

// // Step 3: Store a maximum age into a variable
// var maxAge = 65;

// // Step 4: Store an estimated amount per day (as a number)
// var snacksPerDay = 3;

// // Step 5: Calculate how many snacks you would eat total for the rest of your life
// var yearsRemaining = maxAge - currentAge;
// var daysRemaining = yearsRemaining * 365; // Assuming a year has 365 days
// var totalSnacksNeeded = daysRemaining * snacksPerDay;

// // Step 6: Output the result to the screen
// console.log("Favourite Snack: " + favoriteSnack);
// console.log("Current age: " + currentAge);
// console.log("Estimated Maximum age: " + maxAge);
// console.log("Amount of Snacks per day: " + snacksPerDay);
// console.log("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");

// ................................................................................



// CHAP#06 MATH EXPRESSIONS

// // Q1
// // Step 1: Define a variable 'a' and initialize it with the value 10
// var a = 10;

// // Step 2: Output the initial value of 'a'
// document.write("The value of a is: " + a + "<br>");

// // Step 3: Increment 'a' and output the updated value
// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// // Step 4: Output the current value of 'a', then increment it
// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// // Step 5: Decrement 'a' and output the updated value
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// // Step 6: Output the current value of 'a', then decrement it
// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");



// // // Q2
// // var a = 2, b = 1;
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

// console.log("After --a; a:", a);
// console.log("After --a - --b; a:", a, "b:", b);
// console.log("After --a - --b + ++b; a:", a, "b:", b);
// console.log("After --a - --b + ++b + b--; a:", a, "b:", b);
// console.log("Result:", result);



// // Q3
// var name = prompt("Please enter your name:");

// alert("Hello, " + name + "! Welcome to our website!");



// // Q4
// // Take input from the user
// var userInput = prompt("Enter a number to display its multiplication table:");

// // Convert the user input to a number
// var number = parseInt(userInput);

// // Check if the user input is a valid number
// if (isNaN(number)) {
//     // If the user input is not a valid number, set the number to 5 by default
//     number = 5;
// }

// // Display the multiplication table in the browser
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " × " + i + " = " + (number * i) + "<br>");
// }



// // Q5
// // Step a: Take three subjects' names from the user and store them in different variables
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// // Step b: Store total marks for each subject in another variable
// var totalMarksPerSubject = 100;

// // Step c: Take obtained marks for the first subject from the user and store it in a different variable
// var obtainedMarksSubject1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));

// // Step d: Take obtained marks for the remaining 2 subjects from the user and store them in variables
// var obtainedMarksSubject2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarksSubject3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// // Step e: Calculate total marks and percentage
// var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
// var totalMarks = totalMarksPerSubject * 3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// // Display the result in the browser using a table
// document.write("<h2>Result</h2>");
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
// document.write("<tr><td colspan='2'>Total</td><td>" + totalObtainedMarks + "</td></tr>");
// document.write("<tr><td colspan='2'>Percentage</td><td>" + percentage.toFixed(2) + "%</td></tr>");
// document.write("</table>");


















