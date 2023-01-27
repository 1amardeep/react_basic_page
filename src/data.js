import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "Home",
  },
  {
    id: 2,
    href: "#about",
    text: "About",
  },
  {
    id: 3,
    href: "#services",
    text: "Services",
  },
  {
    id: 4,
    href: "#tours",
    text: "Tours",
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    href: "https://www.twitter.com",
    icons: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icons: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    icons: "fab fa-squarespace",
  },
];

export const tours = [
  {
    date: "august 26th, 2020",
    image: tour1,
    tour_title: "Tibet Adventure",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    dayLeft: 6,
    moneyOnwards: 2100,
  },
  {
    date: "october 1st, 2021",
    image: tour2,
    tour_title: "Kerala Adventure",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "India",
    dayLeft: 6,
    moneyOnwards: 6100,
  },
  {
    date: "November 31st, 2021",
    image: tour3,
    tour_title: "Singapore Adventure",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Singapore",
    dayLeft: 8,
    moneyOnwards: 8100,
  },
  {
    date: "November 31st, 2021",
    image: tour4,
    tour_title: "South Africa Adventure",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "South Africa",
    dayLeft: 18,
    moneyOnwards: 9100,
  },
  {
    date: "November 31st, 2021",
    image: tour5,
    tour_title: "Kenya Adventure",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    dayLeft: 30,
    moneyOnwards: 3100,
  },
  {
    date: "November 31st, 2021",
    image: tour6,
    tour_title: "India Adventure",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "India",
    dayLeft: 5,
    moneyOnwards: 9100,
  },
];
