export interface Testimonial {
    id: string
    text: string;
    authorName: string;
    authorTitle: string;
    authorImage: string;
  }
  
  const testimonials: Testimonial[] = [
    {
      id: "1",
      text: "This portfolio is amazing! The design and content are top-notch.",
      authorName: "John Doe",
      authorTitle: "CEO, Acme Corp",
      authorImage: "john-doe.jpg",
    },
    {
      id: "2",
      text: "I'm impressed with the level of detail and professionalism in this portfolio.",
      authorName: "Jane Smith",
      authorTitle: "Product Manager, Widgets Inc",
      authorImage: "jane-smith.jpg",
    },
    {
      id: "3",
      text: "This portfolio is a true testament to the skills and creativity of the owner.",
      authorName: "Bob Johnson",
      authorTitle: "Designer, Design Co",
      authorImage: "bob-johnson.jpg",
    },
  ];

  export default testimonials