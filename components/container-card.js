import styles from "./container-card.module.css";
const ContainerCard = () => {
  return (
    <div className={styles.paragraphSection}>
      <div className={styles.bg} />
      <div className={styles.atBuiltsightWeContainer}>
        <p
          className={styles.atBuiltsightWe}
        >{`At BuiltSight, we bridge the gap between construction contractors and the ever-evolving world of material pricing. `}</p>
        <p className={styles.atBuiltsightWe}>&nbsp;</p>
        <p
          className={styles.atBuiltsightWe}
        >{`Born out of a passion for innovation and a deep understanding of the construction industry, our platform offers real-time insights into material price fluctuations, ensuring our users are always a step ahead. By harnessing the power of cutting-edge technology and meticulous market research, we've created a tool that not only tracks historical price data but also provides future price projections. `}</p>
        <p className={styles.atBuiltsightWe}>&nbsp;</p>
        <p className={styles.atBuiltsightWe}>
          Our dedicated team comprises experts from both the construction and
          tech domains, ensuring a seamless blend of practicality and
          innovation. Join us as we pave the way for smarter, more informed
          construction planning.
        </p>
      </div>
    </div>
  );
};

export default ContainerCard;
