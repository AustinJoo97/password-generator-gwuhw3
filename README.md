# Simple RNG Password Generator

## Link

https://austinjoo97.github.io/password-generator-gwuhw3/

## About the Generator

The purpose of this project is to create a simple project using html, a miniscule amount of CSS, and primarily Javscript to create a password generator. This will allow a user to choose a criterium (with limits) that will allow for a password to be generated including the following:

- Length ranging from 1 - 128
- Can include any combination of upper case and lower case letters, numbers, and symbols.

An input field was utilized to allow for the user to determine their desired password length; an alert determining validity would be given to the user upon entering either a non-number value or a value below 0 or exceeding 128, accounting for edge cases. 

Following the prompt, several confirm statements will be given to the user to choose which character sets (upper case, lower case, numbers, symbols) the user would like included in their generated password. If none of these options are selected, as a password cannot be created with none of these, an invalid alert will, again, be given to the user, afterwhich the user will have to reclick generate password and restart the process.

Upon completing all the prompts and successfully choosing the options for their password criteria, a password will be generated and rendered to the DOM.

Additionally, another feature was added which will, upon clicking the "Generate Password" button, make a "Copy to Clipboard" button visible. This will allow the entire textfield housing the generated password to be copied to the user's clipboard for pusposes such as saving for later use or entering the text elsewhere.

## Screenshots

The first screenshot is the application's initial load. There is no chosen criteria and there is no password generated. Thus, there is also no visible copy to clipboard button.
![GitHub Logo](./assets/before_generation.png)

This second screenshot showcases the application after generating a password of length 128 and including all possible character types. As there is a password that exists, there is also now a copy to clipboard button that is usable by a user.
![GitHub Logo](./assets/after_generation.png)
