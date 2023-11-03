import React from "react";
import NavTabs from "./Navigation";

export default function Header() {
  return (
    <header className="bg-light border-bottom">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavTabs />
      </div>
    </header>
  );
}