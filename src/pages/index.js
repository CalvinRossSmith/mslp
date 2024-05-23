import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  Page,
  ProjectsSection,
} from "gatsby-theme-portfolio-minimal";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function IndexPage() {
  return (
    <>
      <GatsbySeo
        url='https://www.meaghanslp.ca/'
        title='Home Page'
        description='Meaghan Catton is a speech-language pathologist (SLP) offering therapy in the Northumberland, and Clarington.'
        openGraph={{
          url: 'https://www.meaghanslp.ca/',
          title: 'Home Page',
          images: [],
          site_name: 'Meaghan Catton SLP',
        }}
      />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Meaghan Catton" />
        <ProjectsSection sectionId="services" heading="Overview of Services Offered" />
        <ContactSection sectionId="contact" heading="Contact Information" />
      </Page>
    </>
  );
}
