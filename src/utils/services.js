import { INCOME_TAX, GST, CIVIL, CRIMINAL, OTHERS } from "../config/constant";

export const services = [
    {
        title: "Income Tax",
        summary: "Expert assistance for all your Income Tax needs.",
        description: "Receive expert assistance for all your Income Tax-related needs. Our team provides E-Filing, handles cases, offers professional accounting services, and prepares financial statements.",
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
        description: "Explore comprehensive GST solutions tailored to your business needs. Our services include GST registration and filing, compliance services, advisory, and invoice generation.",
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
        description: "Consult with our legal experts for matters related to Civil Law. We specialize in handling property disputes, contractual issues, landlord-tenant disputes, and civil litigation support.",
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
        description: "Receive expert defense and representation in Criminal Law cases. Our services include legal consultation, defense in criminal cases, bail proceedings, and criminal appeals.",
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
        title: "Others Legal Services",
        summary: "Assistance in various legal matters.",
        description: "Get comprehensive assistance in various legal matters with our diverse services. We offer legal research and opinion, alternative dispute resolution, notary services, and document review.",
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
