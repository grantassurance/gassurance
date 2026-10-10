// Main navigation. Edit here once; every page updates.
// An item with "children" becomes a drop-down in the top menu. Its own link still works.
// "footerLabel" is the shorter name used in the footer.
export default [
  {
    key: "eudr", label: "EUDR & Due Diligence", footerLabel: "EUDR", url: "/eudr/",
    children: [
      { label: "EUDR and regulatory due diligence", note: "EUDR, UKTR, Lacey Act and Australian ILPR", url: "/eudr/" },
      { label: "Timber Import Scope Checker", note: "Free tool", url: "/eudr/scope-checker/" },
      { label: "Supply Chain Risk Assessment", note: "Country, species and supplier risk", url: "/services/risk-assessment/" },
      { label: "Sustainable Finance and ESG Due Diligence", note: "Forestry and land-use investment", url: "/services/sustainable-finance/" },
    ],
  },
  { key: "geolocation", label: "Geolocation", url: "/geolocation/" },
  { key: "certification", label: "Certification", url: "/certification/" },
  { key: "services", label: "Services", url: "/services/" },
  { key: "tools", label: "Tools", url: "/tools/" },
  { key: "insights", label: "Insights", url: "/insights/" },
];
