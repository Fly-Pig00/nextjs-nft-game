import Dashboard from "../components/dashboard";
import Login from "../components/login";
import QuestSidebar from "../components/questsidebar";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

export default function Header() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setMobileView(true)
        : setMobileView(false);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const displayMobile = () => {
    return (
      <>
        <div className="left">
          <div className="logo">
            <Link href="/home">
              <img src="/image/prime-nine_mark.svg" width="70px" />
            </Link>
          </div>
        </div>
        <div className="right">
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <QuestSidebar />
        </div>
      </>
    );
  };

  const displayDesktop = () => {
    return (
      <>
        <div className="left">
          <div className="logo">
            <Link href="/home">
              <img src="/image/prime-nine_mark.svg" width="70px" />
            </Link>
          </div>
          <div class="navbar">
            <Link href="/content">About</Link>
            <div class="dropdown">
              <button class="dropbtn">Game</button>
              <div class="dropdown-content">
                <Link href="/roadmap">Roadmap</Link>
                <Link href="/content2">Tokenomics</Link>
                <Link href="#">Team</Link>
                <Link href="#">Omnichain</Link>
              </div>
            </div>
            <Link href="/mint">Mint</Link>
            <Link href="/calculator">Calculator</Link>

          </div>
        </div>
        <div className="right">
          <Dashboard />
          <QuestSidebar />
        </div>
      </>
    )
  }
  return (
    <header>
      {displayDesktop()}
    </header>
  );
}
