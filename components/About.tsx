"use client";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-56  mt-4 lg:mt-[124px] lg:pb-[75px]"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="gap-4">
        <p className="text-start text-muted-foreground inline">
          Highly experienced and proficient Frontend Developer with over
        </p>
        <p className=" text-primary dark:text-white inline">
          <br className="hidden lg:block" /> 4 years{" "}
        </p>
        <p className="text-start text-muted-foreground  inline">
          of success in creating PWAs. Committed to continuous learning,
          resolving challenges, and maximizing user efficiency through intuitive
          and responsive user interfaces. Excel at staying updated with the
          latest industry trends and working effectively within team
          environments to deliver high-quality, scalable solutions.
        </p>
      </div>
    </section>
  );
}
