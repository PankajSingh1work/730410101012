"use client"

import FetchUsers from './userfetchapi'
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedUsers = await FetchUsers();
      setUsers(fetchedUsers);
    }
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
