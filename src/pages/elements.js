import ClientsLogo from "@/components/elements/ClientsLogo";
import PricingPlans from "@/components/elements/PricingPlans";
import TeamMember from "@/components/elements/TeamMember";
import UIComponents from "@/components/elements/UIComponents/UIComponents";
import BreadcrumbHero from "@/components/shared/BreadcrumbHero";
import Layout from "@/layout/Layout";
import { elementHero } from "@/staticData/elements/elements";

const Elements = () => {
  return (
    <Layout className="components">
      <div id="elements">
        <BreadcrumbHero heroData={elementHero} />
        <TeamMember />
        <PricingPlans />
        <ClientsLogo />
        <UIComponents />
      </div>
    </Layout>
  );
};

export default Elements;
