import { funItems } from "@/staticData/home/home";
import FunFactItem from "./FunFactItem";

const FunFacts = () => {
  return (
    <div className="funfacts">
      {funItems?.map((item) => (
        <FunFactItem key={item?.id} {...item} />
      ))}
    </div>
  );
};

export default FunFacts;
