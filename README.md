# <p align="center"> Smart Tech E-commerce Website </p>
<br> 
 <p align="center">
  <img src="gif1.gif"/>
</p>

Smart tech is a simple e-commerce marketplace website on which users can advertise their own products to sell. The home page presents introduces the user to the concept of the site. The user is then encouraged to make an account by clicking on the log in page. The user is able to create an account with a secure password so that they can access the full functionality of the website. The user should then be presented with a list of products listed on the site to browse through. A user is able to add a product with a title, description, price and photo. When the user clicks the submit button, their product will be displayed amongst the listings on the site. 


## User Story

```md

AS an avid tech user
I WANT to be able to browse and list technology products
SO THAT I can purchase and sell them

WHEN I click on the log in page
THEN I am prompted to create an account or sign in

WHEN I am signed in
THEN I am presented with a dashboard of products 

WHEN I click on add a product
THEN I am able to enter the details of the item I want to sell 

WHEN I click on the submit button
THEN my product will be listed on the page

```

## Installation
   
 ```
 npm i

 ```
 *node must be installed.

## Usage

Log into mysql and enter your credential details into the example .env file (remove the word EXAMPLE from the file name)

Run the following commands in the terminal:

 ```
 npm i

 npm start

 ```

## Technology Used

- Node.js
- Javascript
- mysql
- dotenv
- Handlebars
- Multer
- Bcrypt

## Challenges 

- Parsing images - we are currently looking into parsing images using multer. 
- Heroku - Issues with deployment

## Future Developments

If we have more time, we would like to turn this into a fully functioning e-commerce website. The features we are working on are: to add the listings to cart, check out, better image parsing, chat functions. 

## Sources

Technology e-commerce marketplace
https://makeschool.org/mediabook/oa/tutorials/make-tweets/start-an-express-project-z9Y=/

## Heroku Deployed Site

https://smart-tech3.herokuapp.com/

