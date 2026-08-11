# Task Management Module (Graduation Project)

This is the backend module for the Task Management System graduation project, built using Node.js, Express, MongoDB, and Multer for image uploads.
Smart Task Management is a web application that helps users organize and manage their daily tasks.


##  Entity Details
- **Entity Name:** Task because tasks are the main feature of the project.

- **Fields:**
  - `title` (String, Required)
  - `description` (String, Required)
  - `status` (String, Enum: ['To Do', 'In Progress', 'Done'])
  - `priority` (String, Enum: ['Low', 'Medium', 'High'])
  - `dueDate` (Date, Required)
  - `image` (String, File path)

##  API Routes Summary
- `POST /api/tasks` : Create a new task (supports image upload)
- `GET /api/tasks` : Get all tasks
- `GET /api/tasks/:id` : Get task by ID
- `PATCH /api/tasks/:id` : Update a task by ID
- `DELETE /api/tasks/:id` : Delete a task by ID

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer

##  How to Run Locally
1. Clone the repository:
   ```bash
   git clone <YOUR_GITHUB_REPO_LINK>

Install dependencies:

npm install

Create a .env file and add:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/smart_task_management

Run the project:

npm start

   

