import { INCOME_TAX, GST, CIVIL, CRIMINAL, OTHERS } from "../config/constant";

export const services = [
    {
        title: "Income Tax",
        summary: "Expert assistance for all your Income Tax needs.",
        points: [
            "E-Filing of Income Tax Returns",
            "Handling Income Tax Cases",
            "Professional Accounting Services",
            "Preparation of Financial Statements"
        ],
        CTA: "Get Started",
        image: INCOME_TAX
    },
    // Add more services as needed
    {
        title: "GST",
        summary: "Comprehensive GST solutions tailored to your business.",
        points: [
            "GST Registration and Filing",
            "GST Compliance Services",
            "GST Advisory",
            "Invoice Generation"
        ],
        CTA: "Explore GST Services",
        image: GST
    },
    {
        title: "Civil Law",
        summary: "Legal expertise in Civil Law matters.",
        points: [
            "Property Disputes",
            "Contractual Issues",
            "Landlord-Tenant Disputes",
            "Civil Litigation Support"
        ],
        CTA: "Consult with Our Civil Lawyers",
        image: CIVIL
    },
    {
        title: "Criminal Law",
        summary: "Defense and representation in Criminal Law cases.",
        points: [
            "Legal Consultation",
            "Defense in Criminal Cases",
            "Bail Proceedings",
            "Criminal Appeals"
        ],
        CTA: "Contact Criminal Defense Attorneys",
        image: CRIMINAL
    },
    {
        title: "Other Legal Services",
        summary: "Assistance in various legal matters.",
        points: [
            "Legal Research and Opinion",
            "Alternative Dispute Resolution",
            "Notary Services",
            "Document Review"
        ],
        CTA: "Explore Other Legal Services",
        image: OTHERS
    }
];
