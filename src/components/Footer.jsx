import styles from "../style";
import { logo1 } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <div>
          <a href="#" className="flex items-center cursor-pointer">
            <img src={logo1} alt="access" className="w-[273px] h-[70px]" />
          </a>
        </div>
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new tool to test whether your visual content is truly accessible in all the spectrums.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footer) => (
          <div key={footer.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footer.title}
            </h4>
            <ul className="list-none mt-4">
              {footer.links.map((title, index) => (
                <li
                  key={title.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footer.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={title.link}>{title.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-center items-center pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023. All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
