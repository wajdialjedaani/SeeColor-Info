import { texttospeech } from "../assets";
import styles, { layout } from "../style";

const TextToSpeech = () => (
  <section id="features" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={texttospeech} alt="resultsgraph" className="w-[100%] h-[100%] relative z-[5] rounded-2xl" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading3} w-[100%] flex justify-center items-center font-bold`}>RESULTS THAT MATTER</h2>
      <h2 className={`${styles.heading2} flex justify-center text-gradient`}>Results Graph</h2>
      <div className="flex justify-center">
        <p className={`${styles.paragraph} w-[90%] mt-5 text-justify`}>
          This section allows users to see the results of the image test in a graphical format. The graph will show the percentage of the image that is not accessible to each type of color-blindness.
          <br /><br />
          This will allow users to see which types of color-blindness are the most problematic in the image.
        </p>
      </div>
    </div>
  </section>
);

export default TextToSpeech;
