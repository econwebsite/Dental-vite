
// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import "./newproduct.css";

// // Sample carousel images
// const images = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];

// function Newproduct() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <Box className="container">
//       {/* Left Column - Carousel */}
//       <Box className="left-column">
//         <Slider {...settings}>
//           {images.map((step) => (
//             <div key={step.label}>
//               <img src={step.imgPath} alt={step.label} className="carousel-image" />
//             </div>
//           ))}
//         </Slider>
//       </Box>

//       {/* Center Column - Text Content */}
//       <Box className="center-column">
//         <Typography variant="body2">Home &gt; Product &gt; Intraoral Camera</Typography>
//         <Typography variant="h3">Intraoral Camera</Typography>
//         <Typography className="highlights">Highlights</Typography>
//         <Typography className="highlight-item">• Full HD onsemi AR0233AT sensors</Typography>
//         <Typography className="highlight-item">• High Dynamic Range (HDR)</Typography>
//         <Typography className="highlight-item">• On-board High Performance</Typography>
//         <Box className="actions">
//           <Box className="price-doc">
//             <Typography>Sample Price USD</Typography>
//             <Typography>Document</Typography>
//           </Box>
//           <Box className="buttons">
//             <Button variant="contained" color="primary">Buy Now</Button>
//             <Button variant="contained" color="secondary">Download</Button>
//           </Box>
//         </Box>
//       </Box>

//       {/* Right Column - Related Videos */}
//       <Box className="right-column">
//         <Typography variant="h6">Related Videos</Typography>
//         <Box sx={{ width: '100%', height: '50%' }}>
//           <iframe
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="video-frame"
//           ></iframe>
//         </Box>
//         <Typography variant="h6" sx={{ marginTop: '16px' }}>Related Article</Typography>
//         <Box className="related-article">
//           <img src="https://via.placeholder.com/150" alt="Related Article" />
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default Newproduct;