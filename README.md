# Angular Assignment 

Write an angular application with the following requirements

1. Create DTO like this which will be used to make requests
- creditCardNumber (mandatory, string)
- cardholder (mandatory, string)
- expirationDate (mandatory, Date, cannot be in the past)
- securityCode (optional, string, 3 digits)
- amount (mandatory, number, must be greater than 0)

2. Write a Payment service with a function that creates a POST request.

3. Create a new page and a new component (to be used in this page) with inputs for the DTO created at point 1, and add validations on these inputs based on the mandatory or optional parameters described. Create a button with a click event and call the payment service method.

4. In the app.component.html, create a button (name it anyway you like) or an <a> and use the angular router to navigate to the new page created at the previous point.
  
## Recommendations:

- Use the style guide to separate the models/dto and the services

- Use RxJS when making requests

- To test this, you can create any backend of your choice and make sure the endpoint is reached.

- Avoid as much as you can the any type. Use it only if needed. It is strongly recommended to use types in TypeScript

- When subscribing to anything, make sure to unsubscribe when the component is destroyed
  
## Technology Used

Angular 10.2.0

In memory web api

Bootstrap and ngx-bootstrap 

## Development server test

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.




