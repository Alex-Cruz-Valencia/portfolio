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

export const testimonials: Testimonial[] = [];
