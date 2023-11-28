import { displayadjust } from "../assets";
import styles, { layout } from "../style";

const DisplayAdjustments = () => (
    <section id="features" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
        <img src={displayadjust} alt="extensionscreenshot" className="h-[100%] relative z-[5] rounded-2xl" />
        </div>

        <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading3} w-[100%] flex justify-center items-center font-bold`}>EASY TO USE ON THE GO</h2>
        <h2 className={`${styles.heading2} flex justify-center text-gradient`}>Browser Extensions</h2>
        <div className="flex justify-center">
            <p className={`${styles.paragraph} w-[90%] mt-5 text-justify`}>
            The browser extension versions of the website provide the same functionality as the website, but with the added benefit of being able to use the extension on any website with publicly accessible images.
            <br /><br />
            Download information for the extension can be found down below.
            </p>
        </div>
        </div>
    </section>
);

export default DisplayAdjustments;