import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function ImprintPage() {
  return (
    <>
      <GatsbySeo
        url='https://www.meaghanslp.ca/pricing/'
        title='Pricing'
        description='Meaghan Catton offers competitive pricing for her services. Please contact her for more information and inquiries.'
        openGraph={{
          url: 'https://www.meaghanslp.ca/pricing/',
          title: 'Pricing',
          images: [],
          site_name: 'Meaghan Catton SLP',
        }}
      />   
      <Page>
        <LegalSection sectionId="pricing" heading="Pricing" />
      </Page>
    </>
  );
}
