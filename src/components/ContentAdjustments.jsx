import { textconfig } from "../assets";
import styles, { layout } from "../style";

const ContentAdjustments = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading3} w-[100%] flex justify-center items-center font-bold`}>A READABLE EXPERIENCE</h2>
      <h2 className={`${styles.heading2} flex justify-center text-gradient`}>Content Adjustments</h2>
      <div className="flex justify-center">
        <p className={`${styles.paragraph} w-[90%] mt-5 text-justify`}>
          This section enables users to adjust how website's content is displayed, making it as readable as possible to people with a specific disability. Users with blurred vision or aging sight, utilize these adjustments to customize your website’s content to their specific needs.
          <br /><br />
          Content adjustments: font-size, font-weight, font-style, text align, line height, word spacing, and letter spacing.
        </p>
      </div>
    </div>

    <div className={layout.sectionImg}>
      <img src={textconfig} alt="billing" className="w-[90%] h-[95%] rounded-2xl" />
    </div>
  </section>
);

export default ContentAdjustments;
