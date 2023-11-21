import { feature } from "../constants";
import styles, { layout } from "../style";
import { popup } from "../assets";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== feature.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Project = () =>  (
  <section id="project" className={layout.section}>
    <div className={`${layout.sectionInfo} flex justify-center items-center`}>
      <div className="text-center">
        <h2 className={styles.heading2}>
          How does the <span className="text-gradient">accessibility extension</span> work<br className="sm:block hidden" />
        </h2>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        The extension is developed to solve accessibility difficulties relating to the UI, design, and readability of websites by enabling users to modify users' website design to meet their individual needs.
        <br />
        <br />
        Users can choose different accessibility features like "Text to Speech" and simultaneously activate all relevant adjustments. Additionally, users can enable singular feature such as adjusting font sizes, change text and scheme color, text spacing, focus ruler, and more.
      </p>
      <img src={popup} alt="popup" className="w-[60%] rounded-2xl mt-10"/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {feature.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Project;
