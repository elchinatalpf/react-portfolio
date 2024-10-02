import React from "react";
import NavTabs from "../Navigation";
import './header.css';

export default function Header() {
  return (
    <header className="header-block">
      <div className="header-container">
        <h1 className="header-title">Javier Morales Portfolio</h1>
        <NavTabs />
      </div>
    </header>
  );
}