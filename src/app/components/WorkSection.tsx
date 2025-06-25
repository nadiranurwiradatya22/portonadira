// app/components/WorkSection.tsx
"use client";

import { ResumeCard } from "./ResumeCard";
import { workData } from "../data/work";
import { BlurFade } from "@/components/magicui/blur-fade"; // dari magicui
const BLUR_FADE_DELAY = 0.1;

export function WorkSection() {
  return (
    <section id="work" className="my-8">
      <div className="flex flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>

        {workData.map((item, id) => (
          <BlurFade key={id} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <ResumeCard
              logoUrl={item.logoUrl}
              altText={item.altText}
              title={item.title}
              subtitle={item.subtitle}
              href={item.href}
              badges={item.badges}
              period={`${item.start} - ${item.end ?? "Present"}`}
              description={item.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
