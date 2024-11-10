"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../style/header.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        {/* Checkbox for toggle */}
        <input type="checkbox" id="check" checked={isOpen} onChange={toggleMenu} style={{ display: 'none' }} />
        
        {/* Logo */}
        <div className="logg">
          <Image src={"/logo.png"} height={50} width={100} alt="logo" />
        </div>

        {/* Hamburger Button */}
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
          
        <ul style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <li><Link href="#hero">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


