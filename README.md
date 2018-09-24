#Appbnb
[Appbnb](https://app-bnb.herokuapp.com/#/)

#1 Basic Overview
Appbnb is a single page application inspired by Airbnb. The website allows travelers to
browse all the location around the world and pick their favorite spots to book.


#1 Key Features
* Search spot by its name, the map filter the bound correspondingly

#2 User Authentication
* Verify if users logged in or not and users have limited accessibility without log in.
* User can create a new account and use that for future log in.

#2 Spots
* Spots are listed both in picture lists and in google map. User can click one of them to view the    details
* Spots can be filtered by its name.


Bookings
* User with logged in is able to book the spots if they are available
* User can customize the date and guests for the spot they want to book.


Reviews
* User with logged in is able to write and delete his/her review

#1 Technologies
#3 Frontend
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Google Map API](https://developers.google.com/maps/documentation/javascript/tutorial)
  the map display, the spots show in the map
* [React Rating](https://www.npmjs.com/package/react-rating)
  the review rating at the bottom of the spot show page

#3 Backend
* [Ruby on Rails](https://rubyonrails.org/)
* [Jbuilder](https://github.com/rails/jbuilder)

#3 Database
* [PostgreSQL](https://www.postgresql.org/)
