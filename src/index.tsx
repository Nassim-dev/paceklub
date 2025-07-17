import React from "react";
import { Layout } from "./Layout";
import { Hero } from "./Hero";
import { FeatureGrid } from "./FeatureGrid";
import { CommunitySection } from "./CommunitySection";
import { DiscoverSection } from "./DiscoverSection";
import { CallToActionSection } from "./CallToActionSection";
import { Footer } from "./Footer";

export const HomePage = ({ user }) => (
  <Layout user={user}>
    <Hero title="Title" highlight="Highlight" subtitle="Subtitle" image="/path/to/image.jpg" />
    <FeatureGrid ... />
    <CommunitySection ... />
    <DiscoverSection ... />
    <CallToActionSection ... />
    <Footer />
  </Layout>
);
