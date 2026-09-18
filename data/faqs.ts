export interface FAQItem {
  id: string;
  question: string;
  answer?: string; // Empty string or undefined where official text is awaiting publishing, handled cleanly in UI
  category: 'general' | 'origami';
}

export const generalFAQs: FAQItem[] = [
  {
    id: "faq-geographies",
    question: "What geographies do you invest in?",
    answer: "We primarily invest in companies based in India, with selective investments in Southeast Asia and cross-border startups connecting India with global markets.",
    category: "general"
  },
  {
    id: "faq-cheque-size",
    question: "What is your typical cheque size (initial and follow-on)?",
    answer: "", // Left empty intentionally in accordance with source data guidelines
    category: "general"
  },
  {
    id: "faq-contact",
    question: "How can founders submit a pitch deck or get in touch?",
    answer: "Founders can reach out directly with their pitch deck and executive summary at hello@8ivc.com. Every proposal sent to our primary inbox is reviewed by our investment team.",
    category: "general"
  },
  {
    id: "faq-stage",
    question: "At what stage of business do you invest in?",
    answer: "", // Left empty intentionally in accordance with source data guidelines
    category: "general"
  }
];

export const origamiFAQs: FAQItem[] = [
  {
    id: "origami-faq-accelerator",
    question: "Is Origami an accelerator program?",
    answer: "No, it’s not. While we appreciate the tremendous value that accelerators offer in terms of mentorship and networking opportunities, Origami is designed for a specific purpose—give you access to the capital you need, right when you need it. That way, you can focus your time and energy on building your vision.",
    category: "origami"
  },
  {
    id: "origami-faq-stage",
    question: "What stage should I be in order to apply?",
    answer: "", // Left empty intentionally in accordance with source data guidelines
    category: "origami"
  },
  {
    id: "origami-faq-solo",
    question: "I am a solo founder. Can I still apply?",
    answer: "", // Left empty intentionally in accordance with source data guidelines
    category: "origami"
  },
  {
    id: "origami-faq-sectors",
    question: "Are you interested in specific sectors?",
    answer: "", // Left empty intentionally in accordance with source data guidelines
    category: "origami"
  },
  {
    id: "origami-faq-terms",
    question: "What are the terms you offer?",
    answer: "", // Left empty intentionally in accordance with source data guidelines
    category: "origami"
  }
];
