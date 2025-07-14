import { members } from "@/staticData/elements/elements";
import Member from "./Member";

const TeamMember = () => {
  return (
    <div className="team section-gap">
      <div className="container">
        <div className="section-title">
          <h3 className="subtitle">OUR TEAM MEMBER</h3>
        </div>
        <div className="row g-4 g-md-3 g-lg-3 g-xl-4 g-xxl-5">
          {members?.map((member) => (
            <Member key={member?.id} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
