"use client";

const skills = [
  {
    title: "Languages",
    details: ["Typescript", "JavaScript (ES6+)"],
  },
  {
    title: "Frameworks & Libraries",
    details: ["Next.js", "React"],
  },
  {
    title: "Styling",
    details: [
      "Bootstrap",
      "Tailwind",
      "Styled Components",
      "Material-UI",
      "SCSS",
      "CSS",
    ],
  },
  {
    title: "State Management",
    details: ["Redux", "Context API", "Recoil"],
  },
  {
    title: "API Technologies",
    details: ["WebSocket (Socket.io)", "GraphQL", " RESTful APIs"],
  },
  {
    title: "Testing",
    details: ["Jest", "React Testing Library", "Cypress", "TestCafe"],
  },
  {
    title: "Build Tools",
    details: ["Webpack", "Babel", "NPM", "Yarn"],
  },
  {
    title: "Tools & Methodologies",
    details: ["Git", "Docker", "Service Workers", "Scrum", "Design Patterns"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Skills
        </h2>
      </div>
      <div className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent ">
        <div>
          {skills.map((skill, index) => (
            <div key={index} className=" md:whitespace-nowrap mb-3">
              <p className="font-bold text-md">{skill.title}: </p>
              <p className="text-muted-foreground text-sm">
                {skill.details?.map((value, index) =>
                  index + 1 !== skill.details.length ? value + ", " : value
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
