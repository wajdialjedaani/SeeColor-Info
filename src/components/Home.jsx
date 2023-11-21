import styles from "../style";
import { access, discount } from "../assets";

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">The</span> Project For{" "}
            <span className="text-white">Accessibility</span> Tool.
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The All-in-one <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Accessibility</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Extension Suite.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Accessibility Extension allows users to personalize website's design and interface to their individual preference or assists disabilities in accessing website effectively.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={access} alt="billing" className="w-[90%] h-[95%] relative z-[5] rounded-2xl" />
      </div>
    </section>
  );
};

export default Home;
