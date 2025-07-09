import React from "react";

export const FeatureGrid = ({ features }) => (
  <section style={{ display: "flex", marginTop: "2rem" }}>
    {features.map((feature, idx) => (
      <FeatureCard key={idx} {...feature} />
    ))}
  </section>
);

export const FeatureCard = ({ title, description }) => (
  <div style={{ flex: 1, padding: "2rem", fontWeight: "bold", fontSize: "2vw" }}>
    {title}
    {description && <p style={{ fontWeight: "normal", fontSize: "1vw" }}>{description}</p>}
  </div>
); 