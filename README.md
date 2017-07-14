# Document Management System
PostIt is a simple application that allows friends and colleagues create groups for notifications. This way one person can post notifications to everyone by sending a message once. The application allows people create accounts, create groups and add registered users to the groups, and then send messages out to these groups whenever they want.



Visit my app [here](https://mypostit.herokuapp.com)

# API Documentation
The API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API status and errors.

## Features

**Users**:
A created user will have a role, either an admin or a regular.
- A User can:
    - Create an account
    - Login into the application
    - Create broadcast groups:
    - Add other users to groups
    - Post messages to created groups
    - Retrieve messages that have been posted to groups he/she belongs to
    - Reset Password
    - Logout of the application
    - Within the group should see the notifications appear on their boards and should also get email notifications for these posts.

**Messages**:
Messages should have priority level
  - Normal: in-app notifications for users.
  - Urgent: in-app and email notifications.
  - Critical: in-app, email and SMS notifications.

## Endpoints

Users

Request type | Endpoint | Action
------------ | -------- | ------
POST | [/api/user/signup](#create-user) | Create a new user
POST | [/api/user/signin](#login) | To log a user in
POST | [/api/group](#create) | Create Broadcast groups
GET | [ /api/group/<group id>/user](#get-all-users) | Create broadcast groups:
GET | [/api/group/<group id>/message](#get-user) | Post messages to created groups:

GET | [/api/group/<group id>/messages](#edit-user) | Retrieve messages that have been posted to groups he/she belongs to:



## Development
Document Management System API is built with the following technologies;
- JavaScript (ES6)
- [NodeJs](https://nodejs.org)
- [Express](http://expressjs.com/)
- [Postgresql](https://www.postgresql.org/)
- [Sequelize ORM](http://docs.sequelizejs.com/en/v3/)

## Installation
  - Install [NodeJs](https://nodejs.org/en/) and [Postgres](https://www.postgresql.org/) on your machine
  - Clone the repository `$ git clone https://github.com/adydams/postit.git`
  - Change into the directory `$ cd /postit`
  - Install all required dependencies with `$ npm install`
  - Create a `.env` file in your root directory as described in `.env.sample` file
  - Start the app with `npm start`
  - Run Test `npm test`

## Contributing
- Fork this repository to your GitHub account
- Clone the forked repository
- Create your feature branch
- Commit your changes
- Push to the remote branch
- Open a Pull Request

## Limitations
The limitations of the API are:
- Users cannot delete themselves using the API
-

## LICENSE
 © [Dami Adigun](https://github.com/adydams)