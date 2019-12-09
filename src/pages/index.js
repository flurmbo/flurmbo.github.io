import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout";
import styles from "./index.module.scss";
import { Helmet } from "react-helmet";
import { FaChevronDown } from "react-icons/fa";
import ProjectCard from "../components/projectCard";
import ProjectModal from "../components/projectModal";
import LONG_CONTENT from "../utils/longContent";

const onClickAnchor = function(e) {
  e.preventDefault();
  document.querySelector(e.currentTarget.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
};

const cardData = [
  { title: "Project 1", description: "I did stuff", content: LONG_CONTENT},
  { title: "Project 2", description: "I did more stuff", content: LONG_CONTENT},

  { title: "Project 3", description: "I did stuff", content: LONG_CONTENT},
  { title: "Project 4", description: "I did more stuff", content: LONG_CONTENT},

  { title: "Project 5", description: "I did stuff", content: LONG_CONTENT},
  { title: "Project 6", description: "I did more stuff", content: LONG_CONTENT},

  { title: "Project 7", description: "I did stuff", content: LONG_CONTENT},
  { title: "Project 8", description: "I did more stuff", content: LONG_CONTENT},
];



export default () => {
  const [selectedCard, setSelectedCard] = useState(-1);
  const cardOneRef = useRef();
  const [coords, setCoords] = useState(undefined);

  const handleClickProjectCard = () => {
    const rect = cardOneRef.current.getBoundingClientRect();
    setCoords({x: rect.x, y: rect.y});
    console.log('coords', {x: rect.x, y: rect.y});
    setSelectedCard(0)
  }
  const cards = cardData.map((card, index) => {

    return (
      <ProjectCard
        title={card.title}
        description={card.description}
        key={index}
        alt={"alt"}
        handleClick={handleClickProjectCard}
        show={selectedCard === -1}
        ref={index === 0 ? cardOneRef : undefined}

      />
    );
  });

  useEffect(() => {
    window.addEventListener('click', (e) => {
      console.log(`x: ${e.clientX} y: ${e.clientY}`);
    })
  }, []);

  const handleCloseModal = () => {
    setSelectedCard(-1)
  }

  // useEffect(() => {
  //   if (cardOneRef.current) {
  //     const rect = cardOneRef.current.getBoundingClientRect();
  //     setCoords({x: rect.x, y: rect.y});
  //     console.log('coords', {x: rect.x, y: rect.y});
  //   }
  // }, []);

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
        cardData={cardData[selectedCard]}
        coords={coords}
        alt={"alt"}
      />
      }
    </Layout>
  );
};
