![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# React with AJAX

Using React, display all the flags of the world using the [RESTCountries API](https://restcountries.eu)

![solution-screenshot](https://media.git.generalassemb.ly/user/15120/files/8e03ac00-14cc-11e9-8b4b-1b4b3c7841a6)

Once they are displayed, add a dropdown to display only the flags of the following regions:

* Africa
* Americas
* Asia
* Europe
* Oceania

## Bonus

* Add a text input for the User to type in, which filters out the countries that do not match the search string. 
* Style it up

## Tips

* Use your soloution from the vanilla JS version of this homework as a reference, do not attempt to copy and paste it in and convert the code to React, this is much harder than starting from scratch.
* Don't forget to install `axios`
* Use an `onChange` event to listen to the dropdown.
* Remeber not to add any HTML to the `index.html` file. All code should be inside React Components.
* Make sure you check out the [RESTCountries documentation](https://restcountries.eu) _before_ you begin the challenge
* Log the data that you get back from your AJAX request in the console so that you know what you are woking with before you start to display the data in the DOM
