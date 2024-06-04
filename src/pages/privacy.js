import React from "react";
import { LegalSection, Page } from "gatsby-theme-portfolio-minimal";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function PrivacyPage() {
  return (
    <>
      <GatsbySeo
        url='https://www.meaghanslp.ca/privacy/'
        title='Privacy'
        description='Meaghan, a Registered SLP in Northumberland, prioritizes client privacy while offering comprehensive speech therapy services to children in Cobourg, Port Hope'
        openGraph={{
          type: 'website',
          url: 'https://www.meaghanslp.ca/privacy',
          site_name: 'Meaghan Catton SLP',
          locale: 'en_CA',
          title: 'Privacy | Meaghan SLP | Cobourg | Port Hope | Northumberland',
          description: 'Meaghan, a Registered SLP in Northumberland, prioritizes client privacy while offering comprehensive speech therapy services to children in Cobourg, Port Hope',
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
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
      </Page>
    </>
  );
}
