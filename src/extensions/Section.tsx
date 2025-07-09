import React from "react";

export const Section = ({ title, children, style = {} }) => (
  <section style={{ padding: "2rem", ...style }}>
    {title && <h2 style={{ fontWeight: "bold", fontSize: "2vw" }}>{title}</h2>}
    {children}
  </section>
); 