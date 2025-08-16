# Task Manager API

A simple RESTful API for managing tasks using **Node.js**, **Express**, and **MongoDB Atlas**.

[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/) 
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-blue)](https://www.mongodb.com/cloud/atlas)

---

## Features

- Create, read, update, and delete tasks (CRUD)
- Search tasks by title
- Filter tasks by date
- Task status management (`pending`, `done`)

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/username/repository.git
cd repository
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your MongoDB connection:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

4. Start the server:

```bash
npm start
```

Server will run at `http://localhost:3000`.

---

## Project Structure

```
├── models
│   └── Task.js          # Task schema
├── routes
│   └── tasks.js         # Task routes
├── server.js            # App entry point
└── package.json
```

---

## API Endpoints

### Get All Tasks

```
GET /tasks
```

**Optional Query Parameters:**

* `search` - search tasks by title
* `date` - filter tasks by date (`YYYY-MM-DD`)

### Get Task by ID

```
GET /tasks/:id
```

### Create Task

```
POST /tasks
```

**Request Body:**

```json
{
  "title": "Task Title",
  "time": "10:00",
  "date": "2025-08-16",
  "status": "pending"
}
```

### Update Task

```
PUT /tasks/:id
```

**Request Body:**

```json
{
  "title": "Updated Task Title",
  "time": "12:00",
  "date": "2025-08-17",
  "status": "done"
}
```

### Delete Task

```
DELETE /tasks/:id
```

---

## Response Example

```json
{
  "_id": "task_id",
  "title": "Task Title",
  "time": "10:00",
  "date": "2025-08-16T00:00:00.000Z",
  "status": "pending"
}
```

