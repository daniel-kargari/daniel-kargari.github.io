"use client";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

const jobPositions = [
  {
    timeline: "2019 - 2023",
    degree: "Bachelor in Computer Engineering",
    title: "Golestan University",
  },
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Education
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border  dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 "
          >
            <CardContent className="flex flex-col p-0 w-full">
              <p className="text-primary font-bold">{job.degree}</p>

              <CardDescription className="py-3 text-muted-foreground">
                {job.title}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </>
    </section>
  );
}
