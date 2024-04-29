import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ImprintPage() {
  return (
    <>
      <Seo title="Pricing" useTitleTemplate={true} noIndex={false} />
      <Page>
        <LegalSection sectionId="pricing" heading="Pricing" />
      </Page>
    </>
  );
}
