# Bees!

## A quick, fun and easy quiz app for learning about bees and wildlife conservation.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=NekMMpiNVPg
" target="_blank"><img src="http://img.youtube.com/vi/NekMMpiNVPg/0.jpg" 
alt="Demo Video" width="560" height="315" border="10" /></a>

### Features
* Dynamic single-page web application.
* Provides valuable information about entomology, biology, ecology, and wildlife conservation, in the form of easy to digest fun facts.
* Randomly generates quizzes for users to attempt and saves their scores.
* ReactJS front end for intuitive UI.
* Redux & Thunk for centralized state control.
* Ruby on Rails back end with PostgreSQL database for managing user data.
* BCrypt and JWT using Elliptic-Curve Cryptography for auth

### [Back-End Repo Here](https://github.com/FrankGerold/bees-backend "Bees Back-End")

### Installation
In order for the app to have full functionality, the back-end server should be running already. (Details in the repo listed above.)

All that is required for the frontend is an installation of NodeJS (8.1+) and a package manager such as NPM (5.2+) or Yarn.

From the base bees-frontend directory in your shell of choice, run a simple `npm install`, followed by `yarn start` (there may be  port conflict with Rails if the backend is already running, in which case you can just say `Yes` at the alert screen to pick the next port option.)
The app should now be running in your browser at [localhost:3001](localhost:3001) or whichever port it tells you! Have fun!
