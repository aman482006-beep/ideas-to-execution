export interface FundRegistration {
  id: string;
  nameOfAIF: string;
  category: string;
  sebiRegistrationNumber: string;
  investmentManager: string;
  scoresLoginId: string; // Preserving exact label: "Scores Login ID"
  status: string;
}

export const fundRegistrations: FundRegistration[] = [
  {
    id: "fund-1",
    nameOfAIF: "Eight Innovate Investment Trust I",
    category: "Category II AIF",
    sebiRegistrationNumber: "IN/AIF2/18-19/0584",
    investmentManager: "Eight I Advisory LLP",
    scoresLoginId: "aif00452",
    status: "Active / Registered"
  },
  {
    id: "fund-2",
    nameOfAIF: "Eight Innovate Investment Trust II",
    category: "Category II AIF",
    sebiRegistrationNumber: "IN/AIF2/26-27/2176",
    investmentManager: "Eight I Advisory LLP",
    scoresLoginId: "aif00809",
    status: "Active / Registered"
  }
];

export const complianceInfo = {
  regulatoryBody: "Securities and Exchange Board of India (SEBI)",
  investorGrievancePortal: "https://scores.sebi.gov.in",
  contactEmail: "hello@8ivc.com",
  disclaimer: "All investments are subject to market risks, including the potential loss of principal. Nothing contained on this website constitutes an offer to sell or a solicitation of an offer to buy any security, investment product, or advisory service."
};
