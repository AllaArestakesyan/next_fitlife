"use client";

import Link from "next/link";

export const Nav = () => {

  return (
    <nav>
      <div>
        <img src="/icon.png" alt="" />
      </div>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/'}>About Us</Link></li>
        <li><Link href={'/'}>Workout</Link></li>
        <li><Link href={'/'}>Diet</Link></li>
        <li><Link href={'/'}>Yoga</Link></li>
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
