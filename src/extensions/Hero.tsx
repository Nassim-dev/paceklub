import React from "react";
import { theme } from "./theme";

export const Hero = ({ title, highlight, subtitle, image }) => (
  <section style={{
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "2rem", background: theme.colors.white
  }}>
    <div>
      <h1 style={{ font: theme.font.hero }}>
        {title} <span style={{ color: theme.colors.accent }}>{highlight}</span>
      </h1>
      {subtitle && <p style={{ fontSize: "1.5rem" }}>{subtitle}</p>}
    </div>
    {image && <img src={image} alt="" style={{ width: "40vw", borderRadius: 16 }} />}
  </section>
); 