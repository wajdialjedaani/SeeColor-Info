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
          How does the <span className="text-gradient">SeeColor accessibility extension</span> work<br className="sm:block hidden" />
        </h2>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        The extension is developed to solve accessibility difficulties relating to the design and readability of images by enabling users to test different image designs for how accessible the images are for those with different color-blindness conditions.
        <br />
        <br />
        Users can run a simple image test and simultaneously receive all relevant results for the three main color-blindness variants. Additionally, users can receive a report with the failing contrast values in a score format which shows them what colors cause the most issues in the image based on WCAG standards.
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
