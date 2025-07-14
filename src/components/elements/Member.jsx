import Image from "next/image";
import Link from "next/link";
// import ellipse from "../../../public/assets/images/svg/elips.svg";
// import arrowTop from "../../../public/assets/images/svg/arrow-top.svg";

const Member = ({ image, name, socialURLs, designation }) => {
  return (
    <div className="col-6 col-sm-6 col-lg-4">
      <div className="card">
        <div className="thumb">
          <Image
            src={image}
            alt={name}
            width={400}
            height={300}
            className="mx-auto img-fluid w-100"
          />
        </div>
        <div className="card-footer d-flex">
          <div className="media-holder">
            <span>
              <Image src={""} alt={"Social Media"} className="elips" />
              <Image src={""} alt={"Social Media"} className="expand" />
            </span>
            <div className="drop-menu">
              <ul>
                {socialURLs?.map((social, i) => (
                  <li key={i}>
                    <Link href={social?.url}>{social?.Icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="info">
            <h5>{name}</h5>
            <h6>{designation}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
