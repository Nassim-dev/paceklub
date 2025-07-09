import React from "react";

export const UserGreeting = ({ user }) =>
  user ? <span>Hello {user.name}!</span> : null; 