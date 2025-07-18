import { aboutMe } from "@/staticData/home/home";
import { downloadPdf } from "@/utils/downloadPdf";
import Image from "next/image";
import Button from "../ui/Button";
import FunFacts from "./FunFacts";

const AboutMe = () => {
  return (
    <div className="about" data-title="About" id="about">
      <div className="container">
        <div className="section-title">
          <h2 className="title">
            <span>About</span> Me
          </h2>
        </div>
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div className="about-thumbnail-area">
              <Image
                src={aboutMe?.aboutImageDark}
                className="about-thumb dark img-fluid"
                width={325}
                height={380}
                alt="Luciano - Personal Portfolio"
              />
              <Image
                src={aboutMe?.aboutImage}
                className="about-thumb light img-fluid"
                width={325}
                height={380}
                alt="Luciano - Personal Portfolio"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="details">
              <h3 className="name">{aboutMe?.name}</h3>
              <h4 className="designation">
                {aboutMe?.designation} <span className="line"></span>
              </h4>
              <p className="bio">{aboutMe?.desc}</p>
              <ul className="info">
                {aboutMe?.aboutInfo?.map((item, i) => (
                  <li key={i}>
                    {item?.Icon}
                    {item?.title}
                  </li>
                ))}
              </ul>
              <Button arrow text={aboutMe?.btnText} onClick={downloadPdf} />
            </div>
          </div>
        </div>

        <FunFacts />
      </div>
    </div>
  );
};

export default AboutMe;
