export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companySlug?: string;
  companyUrl: string;
  quote: string;
  photo?: string;
  origamiSpecific?: boolean;
}

export const homeTestimonials: Testimonial[] = [
  {
    id: "rajan-slice",
    name: "Rajan",
    role: "Founder",
    company: "Slice",
    companySlug: "slice",
    companyUrl: "https://sliceit.com",
    quote: "8i Ventures has been part of our journey since the early days of slice.",
    photo: "https://framerusercontent.com/images/8n5gxeRpVKBtZjXTCl9c8SQjn8.jpg"
  },
  {
    id: "madhu-m2p",
    name: "Madhu",
    role: "Founder",
    company: "M2P",
    companySlug: "m2p",
    companyUrl: "https://m2pfintech.com",
    quote: "Together with 8i, we are propelling India’s emergence as the fintech factory of the world.",
    photo: "https://framerusercontent.com/images/dLLFxOGbCB3oaIZTVl1WYgzOo.jpg"
  },
  {
    id: "rohit-easebuzz",
    name: "Rohit",
    role: "Founder",
    company: "Easebuzz",
    companySlug: "easebuzz",
    companyUrl: "https://easebuzz.in",
    quote: "Partnering with Vikram and the team at 8i Ventures has been truly transformative for Easebuzz.",
    photo: "https://framerusercontent.com/images/eDGklPLdtp3CUxZ2rnFBYlDI.png"
  },
  {
    id: "matt-bluetokai",
    name: "Matt",
    role: "Founder",
    company: "Blue Tokai",
    companySlug: "bluetokai",
    companyUrl: "https://bluetokaicoffee.com",
    quote: "8i had the foresight to back us early and repeatedly in journey and saw what others missed.",
    photo: "https://framerusercontent.com/images/m7YZtAaUNvylrjdxDnZ0DvBMmv0.png"
  },
  {
    id: "vaibhav-transbnk",
    name: "Vaibhav",
    role: "Founder",
    company: "TransBnk",
    companySlug: "transbnk",
    companyUrl: "https://transbnk.co.in",
    quote: "At TransBnk, 8i has backed us from day zero - long before there was scale or certainty. They've been true partners through our journey from 0-1 and well beyond.",
    photo: "https://framerusercontent.com/images/uucA3lw8fBi2dpAN8VRYuKUBJuM.jpg"
  },
  {
    id: "varun-bbetter",
    name: "Varun",
    role: "Founder",
    company: "BBetter",
    companySlug: "bbetter",
    companyUrl: "https://bbetter.co",
    quote: "8i has backed us not just with capital, but with clarity, patience and genuine understanding.",
    photo: "https://framerusercontent.com/images/I1o7IoqpMdceOH7yV7xKORWXI.jpg"
  },
  {
    id: "dhruv-bobabhai",
    name: "Dhruv",
    role: "Founder",
    company: "BobaBhai",
    companySlug: "bobabhai",
    companyUrl: "https://bobabhai.com",
    quote: "Vikram and Vishy have been true partners in our journey, each adding immense value in their own way.",
    photo: "https://framerusercontent.com/images/cwqpWs7FTsgLKUhZxhB77f8NDQ.jpeg"
  }
];

export const origamiTestimonials: Testimonial[] = [
  {
    id: "shubh-reelsaga",
    name: "Shubh",
    role: "Founder",
    company: "ReelSaga",
    companySlug: "reelsaga",
    companyUrl: "https://reelsaga.in",
    quote: "8i moves like founders — ReelSaga’s raise done in 7 days. And for sharp counsel anytime, Vikram’s my first call.",
    photo: "https://framerusercontent.com/images/nRDKWMchXlrfG0v2loPPCX9DGQE.jpg",
    origamiSpecific: true
  },
  {
    id: "utkrishta-kumar-oolka",
    name: "Utkrishta Kumar",
    role: "Founder",
    company: "Oolka",
    companySlug: "oolka",
    companyUrl: "https://oolka.in",
    quote: "We are scaling India’s first multi-agent AI platform to become the active companion for every credit and personal finance decision. It is a pleasure to partner with a founder friendly VC firm like 8i ventures in this journey.",
    photo: "https://framerusercontent.com/images/TgLDhNn494qIox48rPWGhNfhKIg.jpg",
    origamiSpecific: true
  },
  {
    id: "ankit-acharya-cautio",
    name: "Ankit Acharya",
    role: "Founder",
    company: "Cautio",
    companySlug: "cautio",
    companyUrl: "https://cautio.in",
    quote: "Vishy, Vikram and 8i backed us when it was just belief - today that belief drives Bharat’s safety. The real test of an investor is belief before proof. Vishy, Vikram and 8i gave us that belief; and in return, we’re building something India will remember",
    photo: "https://framerusercontent.com/images/uvfHOI0Mb6tiol51lHasnCWBXzE.jpeg",
    origamiSpecific: true
  },
  {
    id: "prateek-jindal-powerup",
    name: "Prateek Jindal",
    role: "Founder",
    company: "PowerUp",
    companySlug: "powerup",
    companyUrl: "https://powerup.money",
    quote: "Vikram is one of the most helpful and honest investors I’ve met, with razor-sharp intuition like no other.",
    photo: "https://framerusercontent.com/images/BnVd4nU6CK0Af9aUbq3w5MBTow.png",
    origamiSpecific: true
  }
];
