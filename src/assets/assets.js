// CDN Base
const CDN = "https://cdn.jsdelivr.net/gh/Pravin-123456/Portfolio@assets/src/assets";

// Individual asset URLs
const Profile2 = `${CDN}/Profile2.webp`;
const JS = `${CDN}/js.svg`;
const Bootstrap = `${CDN}/bootstrap.svg`;
const React = `${CDN}/react.svg`;
const Express = `${CDN}/expressjs.svg`;
const Node = `${CDN}/node.svg`;
const Mongodb = `${CDN}/mongodb.svg`;
const Tailwind = `${CDN}/tailwindcss.svg`;
const Background = `${CDN}/background.webp`;
const Git = `${CDN}/git-icon.svg`;
const Resume = `${CDN}/PravinKumar-ATS-Resume.pdf`;

// Project Images
const Grosy_img = `${CDN}/Project_img/Grosy.webp`;
const Coffee_img = `${CDN}/Project_img/Coffeeday.webp`;
const Car_img = `${CDN}/Project_img/car.webp`;
const Tuf_img = `${CDN}/Project_img/TufGaming.webp`;
const Fruit_img = `${CDN}/Project_img/fruitShop.webp`;

// Project Videos
const Grosy_video = `${CDN}/Project_video/Grosy.mp4`;
const Coffee_video = `${CDN}/Project_video/CoffeeDay.mp4`;
const Car_video = `${CDN}/Project_video/Cars.mp4`;
const Tuf_video = `${CDN}/Project_video/TufGaming.mp4`;
const Fruit_video = `${CDN}/Project_video/fruitShop.mp4`;

// Export assets object
export const assets = {
  Profile2,
  JS,
  Bootstrap,
  React,
  Express,
  Node,
  Mongodb,
  Tailwind,
  Background,
  Git,
  Resume,
};

// Export project information
export const ProjectInfo = [
  {
    img: Grosy_img,
    video: Grosy_video,
    title: "Grosy",
    type: "E-Commerce",
    des: "User-friendly e-commerce app with add to cart, wishlist, 24/7 support, and a modern responsive UI.",
    url: "https://grosy.netlify.app/",
  },
  {
    img: Coffee_img,
    video: Coffee_video,
    title: "Coffee Day",
    type: "Digital Menu",
    des: "Coffee Day is a responsive digital menu site with categorized items, modern design, and feedback form.",
    url: "https://coffee-shop-6.netlify.app/",
  },
  {
    img: Car_img,
    video: Car_video,
    title: "Rc World",
    type: "Landing Page",
    des: "RC World is a sleek animated webpage showcasing Porsche models with smooth transitions and immersive design.",
    url: "https://car-landing-911.netlify.app/",
  },
  {
    img: Tuf_img,
    video: Tuf_video,
    title: "Tuf Gaming",
    type: "E-commerce",
    des: "Modern gaming website showcasing TUF products with dynamic visuals, responsive design, and smooth interactive transitions.",
    url: "https://tuf-gaming.vercel.app/",
  },
  {
    img: Fruit_img,
    video: Fruit_video,
    title: "Fruit Shop",
    type: "E-commerce",
    des: "Interactive fruit shop web app offering sleek UI, animated components, and modern responsive shopping experience.",
    url: "https://fruitshop-one.vercel.app/",
  },
];

// Export service information
export const service = [
  {
    name: "Frontend",
    des: "We design responsive, modern interfaces with HTML, CSS, JavaScript, and React to deliver smooth user experiences.",
  },
  {
    name: "Backend",
    des: "Specializing in backend development, I build reliable APIs and high-performance infrastructures tailored to client needs.",
  },
  {
    name: "Mern",
    des: "Specializing in MERN stack development, I build dynamic web apps with robust APIs and high-performance, scalable infrastructure.",
  },
];
