import { textconfig } from "../assets";
import styles, { layout } from "../style";

const ContentAdjustments = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading3} w-[100%] flex justify-center items-center font-bold`}>A DETAILED EXPERIENCE</h2>
      <h2 className={`${styles.heading2} flex justify-center text-gradient`}>Results Details</h2>
      <div className="flex justify-center">
        <p className={`${styles.paragraph} w-[90%] mt-5 text-justify`}>
        This section provides developers with specific colors and contrasts of the image. The application will provide the level of acceptance according to WCAG standards and allow the devloper to know which color combinations are not safe to use in their images.
          <br /><br />
          For more information on what the standards are, please see the WCAG standards here in this link: <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-gradient">WCAG Standards</a>
        </p>
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={textconfig} alt="detailedresults" className="w-[100%] h-[92.5%] relative z-[5] rounded-2xl" />
    </div>
  </section>
);

export default ContentAdjustments;
