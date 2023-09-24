import React, { useState, useEffect } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

 async function fetchUsers() {
   try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        data.sort((a, b) => a.id - b.id);
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };
useEffect(()=>{
  fetchUsers()
}, [])
  return (
     <div>
      <h2>User Table</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
    
}

export default UserTable;
