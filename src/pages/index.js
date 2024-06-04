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
        title='Home'
        description='Meaghan, a Registered SLP in Northumberland, offers comprehensive speech therapy services, including assessments, to children in Cobourg, Port Hope'
        openGraph={{
          type: 'website',
          url: 'https://www.meaghanslp.ca/privacy',
          site_name: 'Meaghan Catton SLP',
          locale: 'en_CA',
          title: 'Home | Meaghan SLP | Cobourg | Port Hope | Northumberland',
          description: 'Meaghan, a Registered SLP in Northumberland, offers comprehensive speech therapy services, including assessments, to children in Cobourg, Port Hope',
          images: [
            {
              url: 'https://www.meaghanslp.ca/icons/icon-512x512.png',
              width: 512,
              height: 512,
              alt: 'Meaghan Catton SLP',
            },
          ]
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
