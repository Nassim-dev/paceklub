import React from "react";
import { theme } from "./theme";
import { UserGreeting } from "./UserGreeting";

export const Layout = ({ children, user }) => (
  <div style={{ background: theme.colors.background, minHeight: "100vh" }}>
    <header style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "1rem 2rem", background: theme.colors.background
    }}>
      <div style={{ fontWeight: "bold" }}>🏋️ PrimalTraining</div>
      <nav>
        <a href="/" style={{ margin: "0 1rem" }}>HOME</a>
        <a href="/about" style={{ margin: "0 1rem" }}>ABOUT</a>
        <a href="/reserve" style={{
          background: theme.colors.accent, color: theme.colors.white,
          padding: "0.5rem 1rem", borderRadius: 8, textDecoration: "none"
        }}>RESERVE YOUR SPOT</a>
      </nav>
      <UserGreeting user={user} />
    </header>
    <main>{children}</main>
  </div>
); 