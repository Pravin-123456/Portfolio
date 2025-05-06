import Profile2 from "./Profile2.webp";
import JS from "./js.svg";
import Bootstrap from "./bootstrap.svg";
import React from "./react.svg";
import Express from "./expressjs.svg";
import Node from "./node.svg";
import Mongodb from "./mongodb.svg";
import Tailwind from "./tailwindcss.svg";
import Background from "./background.webp";
import Git from "./git-icon.svg";
import Resume from "./PravinKumar-ATS-Resume.pdf";
import Grosy_img from "./Project_img/Grosy.webp";
import Grosy_video from "./Project_video/Grosy.mp4";
import Coffee_img from "./Project_img/Coffeeday.webp";
import Coffee_video from "./Project_video/CoffeeDay.mp4";
import Car_img from "./Project_img/car.webp";
import Car_video from "./Project_video/Cars.mp4";
import Fruit_img from "./Project_img/fruitShop.webp";
import Fruit_video from "./Project_video/fruitShop.mp4";
import Tuf_img from "./Project_img/TufGaming.webp";
import Tuf_video from "./Project_video/TufGaming.mp4";

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

export const service = [
    {
        name:'Frontend',
        des:'We design responsive, modern interfaces with HTML, CSS, JavaScript, and React to deliver smooth user experiences.'
    },
    {
        name:'Backend',
        des:'Specializing in backend development, I build reliable APIs and high-performance infrastructures tailored to client needs.'
    },
    {
        name:'Mern',
        des:'Specializing in MERN stack development, I build dynamic web apps with robust APIs and high-performance, scalable infrastructure.'
    }
];
