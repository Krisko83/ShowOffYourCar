# Show Off Your Car App

Show of your car is my React project for SoftUni ReactJS September 2026 Regular Exam.
The project is Social Network / Car Enthusiast Community where user can showcase their cars, share photos and details and interact with other users through likes and comments.
 
## Live Demo

https://showoffyourcar.kriss-eidg.workers.dev/

## GitHub repository

https://github.com/Krisko83/ShowOffYourCar

## links to Regular Exam Project Requirements and Technical Specification
https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fsoftuni%2Ebg%3A443%2Fdownloads%2Fsvn%2Fjs%2Dweb%2FSept%2D2026%2FReactJS%2F14%2DReactJS%2DProject%2DExam%2FReact%2DProject%2DRequirements%2Dand%2DTechnical%2DSpecification%2DRegular%2DExam%2Edocx%3FaccessKey%3D48007700350066003900340041007800590072002B004C007300550048004D003400430035007400590041006D004C0064003200460056004200390055005500360071006F0055006800450066007A005900670042004D0034004700640072006C00340052003500490079007800560031004300590031005900300033003000&wdAccPdf=0&wdEmbedFS=1
 
 
## Technologies
 
- React
- JavaScript
- React Router
- Vite
- CSS
- ESLint 
- Cloudflare
- Wrangler
- React Compiler
- React Tostify

## Features

- Public Catalog
- Details Page
- Full CRUD on car article
- Auth system using Supabase authentication
- Post comments
- Like Unlike Car article
- Contacts (Option for every user to ask a question before or after register in app)

## Structure

The app is Single-Page-Application, with component-based architecture with feature-based organization 

📁 src/
- 📁 api/
- 📁 components/ 
- 📁 contexts/
- 📁 hooks/
- 📁 utils/
- 📄 App.jsx
- 📄 main.css
- 📄 main.jsx

- The api folder contain js files with functions that makes every request to supabase backend for authentication, cars, comments, contacts, likes, storage and user info.
- The components folder contain all react components for UI and page logic.
- The hooks folder contain all custom hooks that I'm using in the app.
- The contexts folder contain UserContext with who the app shares authentication info like access_token ,refresh_token, user email, userImage etc. with all components in the app.
- The utils folder contain all utility function that I use in the app for request, validation and others.
- App.jsx contains the app router, which is responsible for application routing and providing the context to the relevant components.
- main.jsx — serves as the entry point of the React application. It renders the root App component into the DOM and initializes the application.

## Run the project
- Clone the repository or download the source code from - https://github.com/Krisko83/ShowOffYourCar
- Install the dependencies `npm install`
- Configure environment variables:
  Create a .env file in the root directory of the project and add the required Supabase configuration values:
   VITE_BASE_URL=your_supabase_project_url
   VITE_AUTH_URL=your_supabase_auth_url
   VITE_API_KEY=your_supabase_anon_key
   VITE_UPLOAD_IMAGE_URL=your_supabase_storage_url
- Run the app in development mode `npm run dev`
- Open the local URL displayed in your terminal to access the application.

# Functional Guide

## 1.Project Overview

●	Application Name: Show Off Your Car

●	Application Category / Topic: Social Network / Car Enthusiast Community 

●	Main Purpose (2–4 sentences): The app is for car enthusiast that loves all about cars. In the app every registered user can post details for his own car,interact with other user through comment, likes and unlike there vehicles .
 

## 2.User Access & Permissions

### Guest (Not Authenticated)
 
●	Available pages / routes:  Home, Gallery, Details, About, Contact Us, Login and Register 

●	Public data shown:  User can see all cars in home and gallery. In details page user only can see car info, how many likes and comments the car has if any. In contact us page user can ask a question before join the community.

### Authenticated User

Describe what a logged-in user can access:

●	Main sections / pages: Home, Gallery, Details, About, Contact Us, Add Car, Edit Car, My Profile, User Profile(The other users profiles with basic info like username, age, Country ,Gender and owned Cars articles) and logout

●	Details pages: User has a access to car info , likes, like/unlike button and can post a comment to the car article. If user is onwer of the car article he has access to edit car where he can change the car info and delete car where he can remove the car from the app.The owner of the article can like his own car only see averall likes.

●	Create / Edit / Delete actions: Those actions are availeble only for the owner of the car articles. 


## 3.Authentication & Session Handling

### Authentication Flow

●	The application uses Supabase authentication system with access_token for indentication with server and refresh_token for renewal of the server session.
 
●	What happens when the app loads: When the app loads UserProvider uses the custom hook useLocalStorage to check whether any credentials are stores in localStorage. It shares authentiacation state with the rest of the app , allowing the header to access the state using UserContext and render the app with appropiate navigation depending if user is logged in or not.

●	How authentication status is checked: The custom hook useLocalStorage checks in localStorage if credentials are stored to determine authentication state.

●	What happens on successful login or registration: After both successfull login and registration the user is redirected to the home page.

●	What happens on logout: On logout ,logoutHandler first makes request to supabase auth for logout and after successfull logout at the server remove auth credentials from localStorage and userImage if any is cleared from UserImageProvider state.The user is redirected to login page.

### Session Persistence

●	How is the user session stored?: UserProvider using custom hook useLocalStorage stores recieved credentials from the server after login or register requests in localStorage.

●	How is automatic login handled after a page refresh?: On page refresh React initializes again and UserProvider using custom useLocalStorage hook retrive previously stored authentication credentials. If credentials are found ,the authentication state is restored , allowing user to remain logged in. 

## 4.Routing Structure

### Route Guards Logic

●	How is routing split between guest-only and private routes?:

- Guest only routes are:

 /user/login                                - Login

 /user/register                             - Register

- Private routes are: 

 /cars/:car_id/edit                         - Edit Car

 /cars/add-car                              - Add Car

 /user/profile'                             - My Profile

 /user/owned-cars'                          - Owned Cars

 /user/commented-cars'                      - Commented Cars

 /user/user-profile/:commentOwnerId         - User Profile

 /user/logout'                              - logout

- Open routes for both quest and authenticated users are: 

 index or /home                              - Home

 /cars/gallery                              - Gallery

 /about                                     - About

 /contacts                                  - Contacts

 /cars/:car_id/details                      - Details

 /'*'                                       - Not Found

### Main Routes
 
●	Number and type of top-level pages: 

15 top level pages

Public pages (5): Home, Car Gallery, About, Contacts, and Car Details.

Authenticated-user pages (7): Edit Car, Add Car, User Profile, Owned Cars, Commented Cars, Public User Profile, and Logout.

Authentication pages (2): Login and Register.

Error handling (1): A Not Found page for undefined routes.

## Nested & Parameterized Routes
●	Is there nested routing (e.g. a layout route with child routes)?:

There is two nested routing:

For guests users can't access this nested routes:

/cars/add-car 

/cars/:car_id/edit 

/user/user-profile/:commentOwnerId

/user/profile

/user/owned-cars 

/user/commented-cars

/user/logout' 

For authenticated users can't this nested routes:

/user/login

/user/register 

●	Which routes use **URL** parameters (e.g. /catalog/:id)?: 

/cars/:car_id/details' 

/cars/:car_id/edit'

/user/user-profile/:commentOwnerId' 

## 5.List → Details Flow

### Catalog / List Page

●	What data is displayed?:

In catalog page are displayed all cars in the application paginated on pages from 9 articles sorted by date of creation 

●	How does the user interact with the list (filter / sort / search)?:

User can search car in gallery page. It should select search parameter and then type search word. The search word could be with uppercases or lowercases, the result will be the same.

### Details Page

●	How is navigation triggered (Link / useNavigate)?:

Navigation to details page is trigger with Link by clicking on article. There is no details button.

●	What data is received via route parameters?:

The details page recieve car_id form parameters to identify which car data should retrive from the server, then makes request to the server for that car using car_id and also another request to retrive likes for the car. The car_id is passed to LikeCar , AddComment and Comments components who makes there own request to for liking the car, add comment and render comments if any.
 

## 6.Data Source & Backend

### Backend Type

●	Real backend (Firebase, or custom Node.js/Express + MongoDB): The application uses Supabase for backend.

## 7.Data Operations (CRUD)

All four operations — Create, Read, Update, and Delete — are required for the collection described in the Technical Requirements (see **CRUD** Operations, 10 pts). Describe how each one is implemented:

### Create (**POST**)

- How does the user create new data?: 

User creates data in add car page.The user must be logged in to access it. After the fields in add car page are filled ,the custom validator validates the data and if every fields is correctly filled, the component makes request to the server for creation of new car article. If there a fields with incorrect data component show the fields with errors and do not make request to the server until field is filled correctly.After successful request user is redirected to the home page.


### Read (**GET**)

- Where is data fetched and displayed?:

Data is fetched and displayed this places: Home page, Gallery page, Details page, My profile page(In section owned cars and commented cars) and Edit page to load existing car data into the form.

### Update (**PUT**/**PATCH**)

- How does the author edit an existing record?:

  The author of the car can update the record in Details page clicking Edit button which redirect the user to Edit car page.There after get request to the server the data is automaticly filled into edit car form.The same as create validation proccess is triggering for the edit form and if any errors occurs the component is displaing the error under the wrongly filled field. If there is no error after clicking Edit car button ,component makes 'PATCH' request to the server.If there is no error form the server user is redirected to details of the edited car other wise it shows error message.

- How is the UI updated after the change?:

  User is redirected to the details page of the updated car.

### Delete

- How does the author delete an existing record?

The author of the car can delete by getting into details of the car.There by clicking delete button on the page appear confirmation dialog with Are you sure you want to delete this car? question and OK ,Cancel options.If Cancel is clicked the dialog disappear and user stays in details page.If OK is clicked details component make delete request to the server.

- How is the UI updated after the change?

User is redirected to Home page

## 8.Forms & Validation

### Forms Used

- List of forms in the application:

Register Page uses form for user registration

Login page user form for user login

Details page uses AddComment component where the form is for posting a comment.

Add Car page uses CarAddEditItem components where the form is for adding new car record.

Edit Car page uses CarAddEditItem components where the form is for editing existing car record. Both share the same form in CarAddEditItem

Contact Us page uses AskQuestion component where the form is for asking a question.

My Profile page uses ChangeProfileInfoItem component where the form is for changing user info exept email and changing user password.

Gallery page uses SearchItem component where the form is for make a search


### Validation Rules

Describe at least three validated fields:

●	Field name and rules: Register form - fields name: password , rule: Password must be at least 8 characters long!

●	Field name and rules: Add car form - field name: model, rule: 'Model is required!'

●	Field name with multiple validation rules: Add car form - name: imageUrl, rules:  Please enter a valid imageUrl!, ImageUrl is required!

## 9.React-Specific Techniques

Hooks & Component Lifecycle

●	Which hooks are used, and where? (useState, useEffect, custom hooks…):

- Custom hooks:

useLocalStorage used in UserProvider for managing authentication state

useControlledForm used in multiple components like carAdd, carEdit, AskQuestion, login, Register, components

useDecumentTitle used in every page for displaying correct page title 

useOwnedCars used in CarOwned component to to get first 3 owned cars. Also used in CarOwnedList component to get all owned cars if there are more then 3.

useImageUrl used in AddComments and Header components to get user image if it's uploaded.

useComments used in CarCommented and CarCommentedList components to get comments, uniqueCarIds and commentedCars

- useState hook:

used in all custom hooks exept useDocumentTitle

used in CarDetails, Comments, Contacts, AskedQuestions, Home, Gallery, Profile, ChangeProfileInfoItem, ChangePasswordMenu, UserProfile, SearchItem components and UserImageProvider

- useEffect hook:

used in useComments, useDecumentTitle, useImageUrl and useOwnedCars custom hooks

used in home, Gallery, carEdit, Comments, AskedQuestions, LikeCar, Profile, UserProfile, Pagination components and custom react component ScrollToTop 


●	Give one example of mount / update / unmount behavior in your app.:

- Edit car is the best example. 

When user click on edit button inside details page, the edit car component is mounting with dinamic data from the sever.

When user interact with the form and changing fields content is updating the state of the component - component update.

When data is send to the server if no errors user is redirected to details page of the editing car and Edit car component is unmounted.

### Context **API**

●	What state/data is shared through Context, and which components consume it?:

- UserContext share user authentication data and userImage. Component that are using it are CarDetails, AddComment, CommentItem, Footer, Header, Login, Logout, Profile, Register, isAuth and isGuest.
 
### Component Styling

●	How are components styled? (**CSS** files, **CSS** Modules, styling library): Component are styled with combination of css files and css modules

## 10.Typical User Flow

Describe a normal user journey through the app:
●	1. Unregistered user loads the appliction. Browse the gallery page where he can see all cars with details. Likes what app is about and register an account.
●	2. Registered user now can post his own car.
●	3. Other users start to interact with him by commenting and likes his car.
●	4. Become part of the community: User now also interact with other users and have fun. 

## 11.Error & Edge Case Handling

Describe how the app handles:

●	Authentication errors:

  Authentication errors are handled when login, registration, or logout requests fail. Users receive feedback about unsuccessful operations, and authentication state is updated only after successful requests.

●	Network or data errors:

  Errors occurring during requests to the Supabase backend are handled by the request functions. Appropriate error messages are displayed to inform users when an operation fails.

●	Empty or missing data states:
 
  Empty or missing data states: The application handles situations where data is unavailable, such as an empty car gallery, a user with no published cars, or a user who has not commented on any cars. Missing or unavailable data is handled without displaying invalid content, and users can navigate the application normally.