import React from "react";
import { LegalSection, Page } from "gatsby-theme-portfolio-minimal";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function PrivacyPage() {
  return (
    <>
      <GatsbySeo
        url='https://www.meaghanslp.ca/privacy/'
        title='Privacy Policy'
        description='Meaghan Catton is dedicated to protecting the privacy of her clients. Please read her privacy policy for more information.'
        openGraph={{
          url: 'https://www.meaghanslp.ca/privacy/',
          title: 'Privacy Policy',
          images: [],
          site_name: 'Meaghan Catton SLP',
        }}
      />
      <Page>
        <LegalSection sectionId="privacy" heading="Privacy Policy" />
      </Page>
    </>
  );
}