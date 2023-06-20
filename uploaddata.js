//Select the database to use.
use('ReactFrontendProject');

// Insert a few documents into the PortfolioData collection.
db.getCollection('projects').insertMany(
    [
       { id: 1,
        image: 'https://dribbble.com/shots/18571089-Web-site-design-landing-page-home-page-ui',
        title:'Digital clothing',
        github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
        demo:'https://dribbble.com/tags/webdesign'
    
      },
    
       {
        id: 2,
        image: 'https://dribbble.com/shots/20727517-Investar-Web-Site-Design-Landing-Page-Home-Page-UI',
        title:'future savings',
        github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
        demo:"https://dribbble.com/tags/webdesign"
    
      } ,
      {
        id: 3,
        image: 'https://dribbble.com/shots/18064539-Web-site-design-landing-page-home-page-ui',
        title:'Design system',
        github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
        demo:"https://dribbble.com/tags/webdesign"
    
      },
       {
        id: 4,
        image: 'https://dribbble.com/shots/18163937-Web-site-design-landing-page-home-page-ui',
        title:'look beyond limits',
        github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
        demo:"https://dribbble.com/tags/webdesign"
    
      } ,
      {
        id: 1,
        image: 'https://dribbble.com/shots/21052368-Justis-Web-Site-Design-Landing-Page-Home-Page-UI',
        title:'Digital art guide',
        github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
        demo: "https://dribbble.com/tags/webdesign"
    
      },
       
      {
        id: 1,
        image: 'https://dribbble.com/shots/18673145-Web-site-design-landing-page-home-page-ui',
        title:'perfomance pltform',
        github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
        demo:"https://dribbble.com/tags/webdesign"
    
      },
    

    ]
);

// Insert a few documents into the PortfolioData collection.
// db.getCollection('testimonials').insertMany(
//  [
//         {
//           avatar: 'https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/01/tips-for-professional-portraits.jpg',
//           name: "Ekema Ashley",
   // review:"I was so happy with the photos that kelly took of my wedding. she captured the day perfectly and I will cherish her forever.",
//         },
        
//         {
//           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rvvFzP2v-40awpf_uw6dq1UVh8R3jkGM2rrrqIbd6Ih3_d_fCEW8Fn0sl5OsJ1qaLuo&usqp=CAU',
//            name: "Brenda",
   // review:"kelly is a true artist. she has a great eye for composition and lighting, and she knows how to capture the beauty in every moment.",
//         },
//         {
//           avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpfFkpLYgdR4R0-ZomZ0ixnZVgLQUOnZnWQ&usqp=CAU',
//            name: "Malando Tina",
   // review:"I was very happy with the work that kelly did on my website. she was able to take my vision and turn it into a reality. The website is exactly what I wanted and it looks great. I would definitely recommend kellyShots to anyone who is looking for a web developer.",
//         },
//         {
//           avatar: 'https://images.squarespace-cdn.com/content/v1/530ce8d1e4b067ea68a9f821/1612484390216-5NVBC0NJJTFP1OPNRU6F/corporate%2Bbusiness%2Bheadshots%2Blos%2Bangeles_Danielle%2BSpires.jpg',
//           name: "Makoun Glory",
    //review:"kelly was very easy to work with. shee was always responsive to my feedback and she was always willing to make changes to the content until I was happy with the results.",
//         },
      
      
//       ]
// );