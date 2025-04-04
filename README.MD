This is a base node js project template, which anyone can use as it is has been prepared, by keeping some of the most important code principles and project management recommendation. Feel free to change anything.

`src`-> Inside the src folder all the actual source code regarding the project will be residing.

    Lets take a look inside the  `src` folder, which is divided into several subfolders and files.

 - `config` > This folder contains all the configuration files for the project. This includes database connection, environment variables, and other settings that are specific to the project.
    
    - `config/index.js` > This is the main configuration file for the project. It exports an object that contains all the configuration settings. This file is used to import the configuration settings in other parts of the project. 
    - `config/logger-config.js` > This file contains the configuration settings for the logger. It exports an object that contains the logger settings. This file is used to import the logger settings in other parts of the project.
    - `config/server-config.js` > This file contains the configuration settings for the server. It exports an object that contains the server settings. This file is used to import the server settings in other parts of the project.

- `controllers` > This folder contains all the controller files for the project. Each controller file exports a class that handles a specific business logic. This folder is used to organize the business logic of the project.
    - `controllers/index.js` > This is the main controller file for the project. It exports an object that contains all the controller classes . This file is used to import the controller classes in other parts of the project. 
    - `controllers/userController.js` > This file exports a class that handles user related business logic. This file is used to import the user controller class in other parts of the project. 
    .............. Similar controllers you can add as per your project requirement.

- `middlewares` > This folder contains all the middleware files for the project. Each middleware file exports a function that handles a specific task. This folder is used to organize the middleware of the project. What is middleware ? Middleware is a function that has access to the request object (req), the response object (res ), and the next middleware function in the application’s request-response cycle. 
    - `middlewares/index.js` > This is the main middleware file for the project. It exports
    an object that contains all the middleware functions. This file is used to import the middleware functions in other parts of the project.

- `routes` > This folder contains all the route files for the project. Each route file exports a function that handles a specific route. This folder is used to organize the routes of the project. What is route ? Route is a way to map a URL to a specific function in your application.

    - `routes/index.js` > This is the main route file for the project. It exports an object that contains all the route functions. This file is used to import the route functions in other parts of the project.

- `services` > This folder contains all the service files for the project. Each service file exports a class that handles a specific business logic. This folder is used to organize the business logic of the project. What is service ? Service is a class that encapsulates a specific business logic. It is used to abstract the business logic from the controller. 

- `utils` > This folder contains all the utility files for the project. Each utility file exports a function that handles a specific task. This folder is used to organize the utility functions of the project. What is utility ? Utility is a function that performs a specific task. It is used to abstract the task from the controller.

- `repositories` > This folder contains all the repository files for the project. Each repository file exports a class that handles a specific database operation. This folder is used to organize the database operations of the project.