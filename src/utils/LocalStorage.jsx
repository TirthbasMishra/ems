
const employees = [
   {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
         {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Prepare Monthly Sales Report",
            "taskDescription": "Compile and analyze sales data for the monthly report presentation.",
            "taskDate": "2024-10-28",
            "category": "Sales"
         },
         {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Team Meeting Preparation",
            "taskDescription": "Gather necessary documents and data for the upcoming team meeting.",
            "taskDate": "2024-10-20",
            "category": "Meetings"
         },
         {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Customer Feedback Review",
            "taskDescription": "Go through customer feedback received this month and identify areas for improvement.",
            "taskDate": "2024-10-28",
            "category": "Customer Service"
         }
      ]
   },
   {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
         {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Organize Company Files",
            "taskDescription": "Reorganize the shared drive to improve team access to key documents.",
            "taskDate": "2024-10-28",
            "category": "Administration"
         },
         {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Update Project Milestones",
            "taskDescription": "Ensure all project timelines are current in the project management software.",
            "taskDate": "2024-10-21",
            "category": "Project Management"
         },
         {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Prepare Budget Estimates",
            "taskDescription": "Draft initial budget estimates for the upcoming project quarter.",
            "taskDate": "2024-10-28",
            "category": "Finance"
         }
      ]
   },
   {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
         {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Market Research on Competitors",
            "taskDescription": "Analyze competitor websites and social media to assess their new offerings.",
            "taskDate": "2024-10-28",
            "category": "Research"
         },
         {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Schedule Client Meeting",
            "taskDescription": "Arrange a meeting with the client to discuss project progress and next steps.",
            "taskDate": "2024-10-25",
            "category": "Client Relations"
         }
      ]
   },
   {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
         {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Draft Project Plan",
            "taskDescription": "Create a detailed project plan for the new software release.",
            "taskDate": "2024-10-28",
            "category": "Planning"
         },
         {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Complete Coding Module",
            "taskDescription": "Finish and test the new login feature for the application.",
            "taskDate": "2024-10-18",
            "category": "Development"
         }
      ]
   },
   {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
         {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Analyze Data Trends",
            "taskDescription": "Run an analysis of data trends for the last quarter to identify growth opportunities.",
            "taskDate": "2024-10-28",
            "category": "Data Analysis"
         },
         {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Prepare Client Presentation",
            "taskDescription": "Create and polish slides for the upcoming client presentation.",
            "taskDate": "2024-10-23",
            "category": "Presentation"
         }
      ]
   }
];

const admin = [
   {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
   }
];


export const setLocalStorage = () =>{
      localStorage.setItem('employees', JSON.stringify(employees))
      localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = () =>{

   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   console.log(employees,admin)
}