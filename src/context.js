import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 },
  ]);
  

  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser, currentUserEmail, setCurrentUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};
