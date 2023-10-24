Technologies used:
- HTML & CSS
- JavaScript
- Node.js
- MySQL

There are two projects:
1. Database Creator - A Node.js application which creates the db in the local MySQL Server.
   Instructions:
	- In your local MySQL Server create user with username=authprojectuser and password=Auth@ProjectUser23.
	- Add privileges to all db in localhost to the user.
	- Open the 'dbCreator' folder with CMD and start the app (node dbCreator.js)

Now you have database authformdb with one table -> Users.

2. Auth Form - Single Page Application using only HTML & CSS & JS. It uses DOM manipulations to change views.
   !NOTE: It's better you start the application with Liveserver extension of VS Code, because it uses module JavaScript.

   - Main files
	* [index.html] - the base html
	* [style.css] - the base css
	* [app.js] - the base js

   - Services
	* [domHelper.js] - contains functions for creating DOM elements like inputs and paragraphs and appending them to a parent element.

	* [domManager.js] - contains functions for changing views (Login, Register, Details) by manipulating the DOM tree. All views are appended to the 'main' element and the navigation links - to the 'navigation' element.

	* [eventHandlers.js] - contains functions which handle events in the document. For example onLoginSubmit executes when the login form is submited.

	* [localStorageManager.js] - contains functions for saving the user information in the local storage. When the user is logged in successfully, its data is stored in the local storage as 'Auth'.

	* [userService.js] - contains functions for user authentication and getting profile information when logged in successfully.

	* [validator.js] - contains functions for validation of user input from the login and register forms. It's used regular expression for validation.

   - Mock Data - contains mock-data for login (mock user).
   
   - UserContext - contains the current user of the application and it shows if the user is authenticated. On login and logout the UserContext.user is being changed.

   - API
	* [queryConstants.js] - contains the constants for the sql queries.

	* [dbConfig] - contains the configuration information for accessing the database.

	* [api.js] - contains the methods which access and manipulate the database.
	
Tasks completed:
   - Data Validation
   - Connect with Relational DB (MySQL)
   - Login/Logout/Register/UserInfo