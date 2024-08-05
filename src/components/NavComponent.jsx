// src/Navbar.jsx
import React, { useContext } from 'react';
import { MyContext } from '../MyContext.jsx';

const NavComponent = () => {
  const { total, setTotal } = useContext(MyContext);

  return (
    <nav className="w-full bg-zinc-500 p-4">
      <div className="container mx-auto">
        <h1 className="text-white text-xl">Total amount is {total}</h1>
      </div>
    </nav>
  );
};

export default NavComponent;
