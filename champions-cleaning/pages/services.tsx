import styles from "../styles/Services.module.css";
import Navbar from "../components/Navbar";
import { Icon } from "@iconify/react";

export default function Services() {
  type serviceFormat = {
    name: string;
    icon: string;
    description: string;
  };
  const services: serviceFormat[] = [
    {
      name: "Free Estimates",
      icon: "streamline:interface-edit-write-2-change-document-edit-modify-paper-pencil-write-writing",
      description:
        "Hassle-Free and No Obligation. Give us a call for a FREE estimate. We also do free tile demo with your tile cleaning estimate!",
    },
    {
      name: "Area Rug Cleaning",
      icon: "ph:rug-light",
      description:
        "Area rugs usually get a lot a traffic and wear and tear. Keep them looking like new with a professional clean from Champions Carpet Cleaning And more.",
    },
    {
      name: "Carpet Cleaning",
      icon: "mdi:vacuum-outline",
      description:
        "Our purpose is to help keep your carpet in as new condition as possible. We utilize high powered steam cleaning equipment which will remove your stubborn spots, sanitize your carpet and restore",
    },
    {
      name: "Carpet Repairs",
      icon: "mdi:tools",
      description:
        "Sometimes all your carpet needs is a little repair. We can do that. Give us a call to what we can do for your you.",
    },
    {
      name: "Carpet Stretching",
      icon: "clarity:tools-line",
      description:
        "Over time your carpet can stretch and get ripples. This can be a safety hazard and looks terrible. Give us a call to stretch that carpet back into shape.",
    },
    {
      name: "Pet Odor & Stain Removal",
      icon: "material-symbols:pets",
      description:
        "Pets have accidents. Home cleaning can only do so much. To really get that odor and stain out we can provide a professional solution for you.F",
    },
    {
      name: "Tile & Grout Cleaning",
      icon: "icon-park-outline:floor-tile",
      description:
        "Tile floors might appear simple to clean, but mops, as well as any other store bought cleaning devices simply do not work. Mildew, mold, and dirt get trapped in within the grout pores and tiles.",
    },
    {
      name: "Window Cleaning",
      icon: "material-symbols:window-outline",
      description:
        "Why waste your time cleaning windows and end up with spots and streaks. Keep your windows clean and clear with a professional cleaning from Champions Carpet Cleaning And More.",
    },
    {
      name: "Emergency Water Extraction",
      icon: "material-symbols:emergency-home-outline",
      description:
        "We have your back. Accidents happen. We are here to help minimize damage when you have a water emergency. Give a call anytime you have a water emergency",
    },
    {
      name: "Upholstery Cleaning",
      icon: "ph:couch-light",
      description:
        "Do you have stains or odors on your upholstery? Why replace when you can have Champions Carpet Cleaning And More clean it for you.",
    },
    {
      name: "Mini-Blinds Cleaning",
      icon: "material-symbols:blinds",
      description:
        "Lets face it, Mini Blinds are a pain to clean. Call Champions Carpet Cleaning And More to know that job out for you",
    },
    {
      name: "Mattress Cleaning",
      icon: "material-symbols:bed-outline",
      description:
        "One of the most used and most overlooked item to clean is your mattress. You should have your mattress cleaned twice a year. But cleaning your mattress two times a year remains a solid rule of thumb.",
    },
    {
      name: "Pressure Washing",
      icon: "healthicons:running-water-outline",
      description:
        "Keep your house and drive looking new with a yearly pressure wash.",
    },
    {
      name: "Solar Panel Cleaning",
      icon: "material-symbols:solar-power-outline",
      description:
        "Keeping your solar panels clean is essential to having your panels operate at peak performance. We will clean them with a spot free solution to keep help keep them clean.",
    },
  ];
  return (
    <section className={styles.ServicesPageContainer}>
      <Navbar />
      {services.map((service) => {
        return (<Icon icon={service.icon} width='50' height='50' color='#E36414'/>)
      })}
    </section>
  );
}
