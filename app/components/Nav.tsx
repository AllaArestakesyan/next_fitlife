"use client";

import Link from "next/link";
import { useRef } from "react";

export const Nav = () => {
  return (
    <nav>
      <div>
        <img src="/icon.png" alt="" />
      </div>
      <ul>
        <li><Link href={'#home'}>Home</Link></li>
        <li><Link href={'#about'} >About Us</Link></li>
        <li><Link href={'#workout'}>Workout</Link></li>
        <li><Link href={'#diet'}>Diet</Link></li>
        <li><Link href={'#yoga'}>Yoga</Link></li>
      </ul>
      <div>
        <ul>
          <li><Link href={'/'}>Log In</Link></li>
          <li><button>Sign Up</button></li>
        </ul>
      </div>
      <div className="submenu">
        <div><span></span><span></span></div>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
