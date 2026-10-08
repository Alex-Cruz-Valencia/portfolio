// Short quotes from people who've worked with Alex. The home page section
// stays hidden until at least one entry exists, so nothing unfinished ships.
//
// Template:
// {
//   quote: 'One or two sentences, in their words.',
//   name: 'First Last',
//   title: 'Role, Organization',
//   relation: 'Managed Alex at EchoStar',
// },

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  relation?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Over ten short weeks, Alex architected an enterprise-grade AI platform to measure product performance. His process was a masterclass in precision — hand-validating hundreds of data points to ensure long-term stability, all while grounding every decision in a sharp, value-driven business case.',
    name: 'Tia Kubicka',
    title: 'Product Leader, Boost Mobile',
    relation: 'On Alex\'s EchoStar internship, Summer 2026',
  },
];
