import { texttospeech } from "../assets";
import styles, { layout } from "../style";

const TextToSpeech = () => (
  <section id="features" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={texttospeech} alt="texttospeech" className="w-[100%] h-[100%] relative z-[5] rounded-2xl" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading3} w-[100%] flex justify-center items-center font-bold`}>AN ACCESSIBLE EXPERIENCE</h2>
      <h2 className={`${styles.heading2} flex justify-center text-gradient`}>Text To Speech</h2>
      <div className="flex justify-center">
        <p className={`${styles.paragraph} w-[90%] mt-5 text-justify`}>
          This section allows users to enable text to speech feature which assists people with disability or visually-impaired in reading the website. Users can choose different speed to listen that suits their preference. Finally, the text highlight helps them to keep track of the text.
        </p>
      </div>
    </div>
  </section>
);

export default TextToSpeech;
