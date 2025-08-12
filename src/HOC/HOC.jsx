import React, { useState, useEffect } from "react";
import UserListWithLoading from "./UserListWithLoading";

function HOC() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Amit" },
        { id: 2, name: "Riya" },
        { id: 3, name: "John" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
        <h1>HOC</h1>
      <h1>User List</h1>
      <UserListWithLoading isLoading={loading} users={users} />
    </div>
  );
}

export default HOC;
