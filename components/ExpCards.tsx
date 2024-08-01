"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon, MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "2022 - Present",
    currentPosition: "Senior Frontend Developer",
    company: "Ebiblo (Remote)",
    place: "Australia",
    previousPositions: [""],
    description:
      "An AI-powered platform that helps users fine-tune their models and create agents.",
    skills: ["Typescript", "Next.js", "Tailwind CSS", "AI", "Service Workers"],
  },
  {
    timeline: "2020 - 2022",
    currentPosition: "Frontend Developer",
    company: "Tat Family",
    previousPositions: [""],
    place: "Iran",

    description:
      "A service-based company specializing in creating web applications.",
    skills: ["React.js", "Webpack", "Bootstrap", "AI", "Testing"],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-56 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="job-position-container p-3 lg:p-6 mb-8 flex flex-col lg:flex-row w-full min-h-fit gap-0  border-transparent hover:border  dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 "
          >
            <CardHeader className="h-full  p-0 lg:w-[190px]">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap ">
                <div className="flex flex-col text-sm">
                  {job.timeline}
                  <div className="flex">{job.place}</div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0 w-full ">
              <p className=" font-bold dark:text-white company-title">
                {job.currentPosition} · {job.company}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      {/* <div className="lg:px-6 mt-12">
        <a
          className="inline-flex items-center font-medium leading-tight text-foreground group"
          href="/daniel-kargari-resume.pdf"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            View Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div> */}
    </section>
  );
}
