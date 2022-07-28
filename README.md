# Authentication system with Python Flask and React.js

This project is part of the 4Geeks Academy Full Stack program, where user authentication should be implemented using the Python Flask framework to create back-end REST APIs and React.js and sessionStorage APIs for front-end web applications.

The authentication system consists of the following parts:

1. Registration: The user should be able to choose their email, any password and submit the form, a new user should be created in the database, and then the user should be redirected to the login form.
2. Login – The user enters their email and password and is redirected to the private panel after successful authentication.
3. Validation: Any page considered "private" should always validate that the current user is valid, otherwise the page should redirect the user to log back in.
4. Logout – At any time, the user should be able to hit “logout” on the navigation bar and they will be redirected to the login path.

![Alt Text](/src/img/Animation1.gif)

### Back-End Manual Installation:

It is recomended to install the backend first, make sure you have Python 3.8, Pipenv and a database engine (Posgress recomended)

1. Install the python packages: `$ pipenv install`
2. Create a .env file based on the .env.example: `$ cp .env.example .env`
3. Install your database engine and create your database, depending on your database you have to create a DATABASE_URL variable with one of the possible values, make sure yo replace the valudes with your database information:

| Engine    | DATABASE_URL                                        |
| --------- | --------------------------------------------------- |
| SQLite    | sqlite:////test.db                                  |
| MySQL     | mysql://username:password@localhost:port/example    |
| Postgress | postgres://username:password@localhost:5432/example |

4. Migrate the migrations: `$ pipenv run migrate` (skip if you have not made changes to the models on the `./src/api/models.py`)
5. Run the migrations: `$ pipenv run upgrade`
6. Run the application: `$ pipenv run start`

### Front-End Manual Installation:

-   Make sure you are using node version 14+ and that you have already successfully installed and runned the backend.

1. Install the packages: `$ npm install`
2. Start coding! start the webpack dev server `$ npm run start`

