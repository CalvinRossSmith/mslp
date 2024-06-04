import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";
import { GatsbySeo } from 'gatsby-plugin-next-seo';

export default function ImprintPage() {
  return (
    <>
      <GatsbySeo
        url='https://www.meaghanslp.ca/pricing/'
        title='Pricing'
        description='Meaghan, a Registered SLP in Northumberland, provides speech therapy to children in Cobourg, Port Hope. Competitive pricing available. Contact for details'
        openGraph={{
          type: 'website',
          url: 'https://www.meaghanslp.ca/privacy',
          site_name: 'Meaghan Catton SLP',
          locale: 'en_CA',
          title: 'Pricing | Meaghan SLP | Cobourg | Port Hope | Northumberland',
          description: 'Meaghan, a Registered SLP in Northumberland, provides speech therapy to children in Cobourg, Port Hope. Competitive pricing available. Contact for details',
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
        <LegalSection sectionId="pricing" heading="Pricing" />
      </Page>
    </>
  );
}
