import cnn from "../assets/cnn.png";
import dig from "../assets/dig.png";
import tradingview from "../assets/tradingview.png";
import grocery_store from "../assets/grocery_store.png";

import { FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

export const projectsInfo = [
  {
    id: 1,
    title: "CNN-Based Image Classification and Feature Extraction",
    image: cnn,
    technologies:
      " Python, PyTorch, NumPy, Scikit-learn, Matplotlib, Google Collab",
    description:
      "This project focuses on using Convolutional Neural Networks (CNNs) for medical image classification. A ResNet-34 model was trained on a dataset of colorectal cancer images (MUS, NORM, STR), and along with a pre-trained ShuffleNet V2 encoder, they were applied to prostate cancer and animal face datasets. The performance of these encoders was analyzed and compared using t-SNE visualizations.",
    link: "https://github.com/bulabd/COMP432-GroupG",
  },
  {
    id: 2,
    title: "Online Grocery Store",
    image: grocery_store,
    technologies: "HTML5, CSS, JavaScript, PHP, SQL",
    description:
      "This is an online grocery store system featuring user authentication, product catalogs, and cart management. The project included dynamic back-end functionality for product management, enabling add, edit, and delete operations using PHP and SQL. Additionally, responsive designs were created with HTML5 and CSS to enhance the user experience, while database architecture and cart functionality were optimized to deliver a seamless shopping experience.",
    link: "https://github.com/d-realblank/Web-demo",
  },
  {
    id: 3,
    title: "DIG (Depth Illusion Generator) ",
    image: dig,
    technologies: "Java, SQLite, Animation Frameworks",
    description:
      "This is an online grocery store system featuring user authentication, product catalogs, and cart management. The project included dynamic back-end functionality for product management, enabling add, edit, and delete operations using PHP and SQL. Additionally, responsive designs were created with HTML5 and CSS to enhance the user experience, while database architecture and cart functionality were optimized to deliver a seamless shopping experience.",
    link: "https://bitbucket.org/speedy-gonzales/speedy-gonzales/src/master/",
  },
  {
    id: 4,
    title: "TradingView Indicators and Strategies",
    image: tradingview,
    technologies: "Pine Script, TradingView.",
    description:
      "This is an online grocery store system featuring user authentication, product catalogs, and cart management. The project included dynamic back-end functionality for product management, enabling add, edit, and delete operations using PHP and SQL. Additionally, responsive designs were created with HTML5 and CSS to enhance the user experience, while database architecture and cart functionality were optimized to deliver a seamless shopping experience.",
    link: "https://www.tradingview.com/u/nsp1425/#published-scripts",
  },
];
export const languagesInfo = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500  text-4xl sm:text-6xl mb-2" />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-4xl sm:text-6xl mb-2" />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: (
      <SiJavascript className="text-yellow-500 text-4xl sm:text-6xl mb-2" />
    ),
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact className="text-cyan-500 text-4xl sm:text-6xl mb-2" />,
  },
  {
    id: 5,
    name: "Tailwind",
    icon: <SiTailwindcss className="text-blue-400 text-4xl sm:text-6xl mb-2" />,
  },
  {
    id: 6,
    name: "Java",
    icon: <DiJava className="text-red-500 text-4xl sm:text-6xl mb-2" />,
  },
  {
    id: 7,
    name: "Python",
    icon: <FaPython className="text-yellow-500 text-4xl sm:text-6xl mb-2" />,
  },
  {
    id: 8,
    name: "SQL",
    icon: <SiMysql className="text-blue-600 text-4xl sm:text-6xl mb-2" />,
  },
  {
    id: 9,
    name: "C++",
    icon: <SiCplusplus className="text-blue-500 text-4xl sm:text-6xl mb-2" />,
  },
];
