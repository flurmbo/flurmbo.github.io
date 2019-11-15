import React, { useState } from "react";
import Layout from "../components/layout";
import styles from "./index.module.scss";
import { Helmet } from "react-helmet";
import { FaChevronDown } from "react-icons/fa";
import ProjectCard from "../components/projectCard";
import ProjectModal from "../components/projectModal";

const onClickAnchor = function(e) {
  e.preventDefault();
  document.querySelector(e.currentTarget.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
};

const cardData = [
  { title: "Project 1", description: "I did stuff"},
  { title: "Project 2", description: "I did more stuff"},

  { title: "Project 3", description: "I did stuff"},
  { title: "Project 4", description: "I did more stuff"},

  { title: "Project 5", description: "I did stuff"},
  { title: "Project 6", description: "I did more stuff"},

  { title: "Project 7", description: "I did stuff"},
  { title: "Project 8", description: "I did more stuff"},
];



export default () => {
  const [selectedCard, setSelectedCard] = useState(-1);
  
  const cards = cardData.map((card, index) => {
    return (
      <ProjectCard
        title={card.title}
        description={card.description}
        key={index}
        setSelectedCard={() => {console.log('hi'); setSelectedCard(index)}}
      />
    );
  });

  const handleCloseModal = () => {
    setSelectedCard(-1)
  }

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Phil Marshall</title>
      </Helmet>
      <div className={styles.header}>
        <div className={styles.header__textBox}>
          <h1 className={styles.header__headingPrimary}>Phil Marshall</h1>
          <h2 className={styles.header__headingSecondary}>Web Developer</h2>
        </div>
        <div className={styles.header__myWork}>
          <p>
            <a
              onClick={onClickAnchor}
              className={styles.header__myWork__link}
              href="#work"
            >
              See my work <FaChevronDown />
            </a>
          </p>
        </div>
      </div>
      <div id="work" className={styles.work}>
        {cards}
      </div>
      {!(selectedCard === -1) && 
      <ProjectModal
        selectedCard={selectedCard}
        handleCloseModal={handleCloseModal}
        cardData={cardData}
      />
      }
    </Layout>
  );
};
