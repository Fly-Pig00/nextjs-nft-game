import Dashboard from "../components/dashboard";
import Login from "../components/login";
import QuestSidebar from "../components/questsidebar";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { Button, Drawer, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileMenu from "./mobilemenu";

export default function Header() {
  const matches = useMediaQuery('(min-width:900px)');
  
  return (
    <header>
      <div className="header-container">
        <div className="flex menu-navbar">
          <div className="logo">
            <Link href="/home">
              <img src="/image/prime-nine_mark.svg" />
            </Link>
          </div>
          <div class="navbar">
            <Link href="/content">About</Link>
            <div class="dropdown">
              <button class="dropbtn">Game</button>
              <div class="dropdown-content">
                <Link href="/roadmap">Roadmap</Link>
                <Link href="/content2">Tokenomics</Link>
                <Link href="/team">Team</Link>
                <Link href="/omnichain">Omnichain</Link>
              </div>
            </div>
            <Link href="/mint">Mint</Link>
            <Link href="/calculator">Calculator</Link>
          </div>
          <div className="hamburger-button">
            <MobileMenu />
          </div>
        </div>
        <div className="flex app-navbar">
          <Dashboard />
          <QuestSidebar />
        </div>
      </div>
    </header>
  );
}
