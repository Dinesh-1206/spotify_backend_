# Spotify Backend API

A Spotify-inspired backend application built with Node.js, Express.js, MongoDB, and JWT Authentication. This project implements secure role-based authentication, music management, album creation, and protected API routes following modern backend development practices.

## Features

* User Registration & Login
* JWT Authentication
* Role-Based Authorization (Admin, Artist, User)
* Password Hashing with bcrypt
* Music Upload APIs
* Album Management
* MongoDB Database Integration
* RESTful API Architecture
* Protected Routes & Middleware
* Environment Variable Management
* Error Handling and Validation

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt
* Multer
* dotenv

## Project Structure

```bash
src/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── services/
└── app.js
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Start the server

```bash
npm start
```

## User Roles

### Admin

* Manage users
* Manage albums and songs
* Access protected admin routes

### Artist

* Upload music
* Create albums
* Manage personal content

### User

* Access music content
* View albums and songs

## API Endpoints

### Authentication

* POST /api/auth/register
* POST /api/auth/login
* POST /api/auth/logout

### Music

* POST /api/music/upload
* GET /api/music

### Albums

* POST /api/music/album
* GET /api/music/albums

## Security Features

* JWT Token Authentication
* Password Hashing with bcrypt
* Role-Based Access Control
* Protected Routes Middleware

## Future Enhancements

* Playlist Management
* Favorites System
* Music Streaming
* Search Functionality
* Subscription Plans

## License

This project is created for learning and portfolio purposes.
