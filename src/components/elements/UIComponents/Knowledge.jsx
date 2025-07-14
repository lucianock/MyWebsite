import { knowledgeLists } from "@/staticData/elements/elements";
import Link from "next/link";

export const Knowledge = () => {
  return (
    <div className="col-lg-6">
      <div className="section-title">
        <h3 className="subtitle">KNOWLEDGE</h3>
      </div>

      <ul className="knowledge-links">
        {knowledgeLists?.map((item) => (
          <li className="list-inline-item" key={item?.id}>
            <Link href={item?.url} className="btn-link-rounded">
              {item?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
