import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Meaghan Catton SLP" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Meaghan Catton" />
        <ProjectsSection sectionId="services" heading="Overview of Services Offered" />
        <ContactSection sectionId="contact" heading="Contact Information" />
      </Page>
    </>
  );
}
