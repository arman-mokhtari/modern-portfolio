import { techStack } from "@/data";
import Image from "next/image";

const AnimatedLogos = () => {
  return (
    <section className="w-full">
      <div className="mb-16 flex w-full flex-col items-center justify-center">
        <h1 className="heading">
          What is my
          <span className="text-purple"> tech stack?</span>
        </h1>
      </div>
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2 "
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {techStack.map((logo, key) => (
                  <Image
                    key={key}
                    src={logo.img}
                    className="h-10 w-28 px-2 md:w-24"
                    alt={`${logo.alt}`}
                    width={28}
                    title={`${logo.alt}`}
                    height={10}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedLogos;
