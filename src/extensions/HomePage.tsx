import React from "react";
import { Layout } from "./Layout";
import { Hero } from "./Hero";
import { FeatureGrid } from "./FeatureGrid";
import { Section } from "./Section";

const features = [
  { title: "GUIDED BY EXPERTS" },
  { title: "DYNAMIC OPEN GYM" }
];

export const HomePage = ({ user }) => (
  <Layout user={user}>
    <Hero
      title="TRAIN HARD."
      highlight="LIVE BETTER"
      subtitle="For the committed"
      image="/uploads/1000_F_163798969_qrl_YJT_24q_CW_5_Wusbvbid7_W6_A_Mc_P_Bsx_FZ_5eb79a7019.jpg"
    />
    <FeatureGrid features={features} />
    <Section title="FOR THE COMMITTED">
      <p>
        Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits.
      </p>
    </Section>
  </Layout>
); 