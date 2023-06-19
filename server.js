const express = require("express");
const app = express();

// Array of users
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Bob Johnson" },
];

// API endpoint to get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Default route for unmatched paths
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
