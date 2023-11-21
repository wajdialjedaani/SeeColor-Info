import styles from "../style";
import Button from "./Button";

const Explore = () => (
  <section id="explore" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our extension!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Information you need to know about installing our extension and best practices for the use of the tool.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default Explore;
