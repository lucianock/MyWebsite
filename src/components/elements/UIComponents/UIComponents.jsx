import Accordion from "./Accordion";
import Tabs from "./Tabs";
import Table from "./Table";
import Calendar from "./Calendar";
import { Knowledge } from "./Knowledge";
import Languages from "./Languages";

const UIComponents = () => {
  return (
    <div className="elements section-gap">
      <div className="container">
        <div className="row inner-gap">
          <Accordion />
          <Tabs />
          <Table />
          <Calendar />
          <Knowledge />
        </div>
        <Languages />
      </div>
    </div>
  );
};

export default UIComponents;
