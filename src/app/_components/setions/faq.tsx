import GlitchText from "@/components/glitch-text/glitch-text";
import Accordion from "../ui/accordion";
import FAQs from "@/data/faq-data";


export default function FAQsPage() {

  return (
    <>
      <section className="flex flex-col items-center gap-4 mb-7 mt-20">
        <GlitchText 
          text="FAQs"
          className="text-5xl font-vt323 font-bold w-fit mb-1 mt-5"
        />

        <div className="flex flex-col items-center justify-center gap-2">
          {FAQs.map((faq) => (
            <Accordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </>
  );
}