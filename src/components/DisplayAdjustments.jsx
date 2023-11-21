import { displayadjust } from "../assets";
import styles, { layout } from "../style";

const DisplayAdjustments = () => (
    <section id="features" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
        <img src={displayadjust} alt="texttospeech" className="w-[90%] h-[95%] relative z-[5] rounded-2xl" />
        </div>

        <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading3} w-[100%] flex justify-center items-center font-bold`}>A VISUALLY SATISFYING EXPERIENCE</h2>
        <h2 className={`${styles.heading2} flex justify-center text-gradient`}>Display Adjustments</h2>
        <div className="flex justify-center">
            <p className={`${styles.paragraph} w-[90%] mt-5 text-justify`}>
            This section provides users with adjusting colors and contrast of the website. People with certain degrees of color blindness or visual impairment may not able to experience the content effectively, while light-sensitive users may not be able to surf websites with white backgrounds.
            <br /><br />
            Section adjustments: Tint Color, Brightness, Focus Ruler, Ruler Height, Ruler Color, Contrast, and Saturation.
            </p>
        </div>
        </div>
    </section>
);

export default DisplayAdjustments;