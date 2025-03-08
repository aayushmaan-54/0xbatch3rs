import CTA from "./_components/setions/cta";
import FAQsPage from "./_components/setions/faq";
import FeaturesPage from "./_components/setions/features";
import Hero from "./_components/setions/hero";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPage />
      <FAQsPage />
      <CTA />
    </>
  );
}
