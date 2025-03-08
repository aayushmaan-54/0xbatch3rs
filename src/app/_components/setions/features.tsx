import GlitchText from "@/components/glitch-text/glitch-text";
import features from "@/data/features-data";


export default function FeaturesPage() {
  return (
    <>
      <section className="flex flex-col items-center gap-4">
        <GlitchText
          text="Features"
          className="text-5xl font-vt323 font-bold w-fit mb-7 mt-20"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
          {features.map((feature) => (
            <div key={feature.heading} className="bg-accent-green-dark/10 border border-accent-green-light rounded-md px-3 py-3 sm:w-[300px] md:w-[400px] sm:px-4 hover:bg-accent-green-dark/20 cursor-pointer">
              <div className="flex items-center gap-2">
                <feature.icons className="stroke-accent-green-light size-10" />
                <h3 className="text-accent-green-light text-lg font-bold sm:text-xl">{feature.heading}</h3>
              </div>
              <p className="mt-1 sm:mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}