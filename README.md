# passwordgeneratorjavascript
made a password generator that produces a random password between 8 and 126 and displayed it in a text box.

first i pulled all the information i would need for the password generator using prompts and confirms

I added an event listener to the generate element and then made a function that creates new variables based on the imputs from above then when you click the generate button it run the other function that actually generates the password.

in my generate function i first run an if statement to make sure the length of the password is between 8 and 126 characters. 

then i use another if statement to check to see if you have said yes to atleast 1 of the options between lowercase, uppercase, numbers and symbols before it attempts to run the rest of the program.

then I used a foreach to get rid of the elements that in the array that were false if you choose not to have those in your function.

then I use add on to generatedpassword with the arrays i have left in order to make the password until the for loop reaches the length of characters you chose.

then i return the final password which give the generate button a value to store in the text area.
