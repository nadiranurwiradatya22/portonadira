"use client";
import Image from "next/image";
import Link from "next/link";
import SplashCursor from "./animation/SplashCursor/SplashCursor";
import Stack from "./comp/Stack/Stack";
import { workData } from "./data/work";
import { ScrollVelocity } from "./text.tsx/ScrollVelocity/ScrollVelocity";
import { ResumeCard } from "./components/ResumeCard";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { StaggeredReveal } from "@/components/staggered-reveal";
import { SparklesText } from "@/app/comp/spark";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};
const velocity = 100; // atau angka lain sesuai kecepatan scroll yang kamu mau

const images = [
  {
    id: 1,
    img: "/cardheader/image4header.jpg",
  },
  {
    id: 2,
    img: "/cardheader/image2header.jpg",
  },
  {
    id: 3,
    img: "/cardheader/image3header.jpg",
  },
  {
    id: 4,
    img: "/cardheader/image1header.png",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "C++",
  "PHP",
  "Dart",
  "Angular",
  "React",
  "Next.js",
  "Flutter",
  "Ionic",
  "Tailwind",
  "Node.js",
  "Express",
  "MySQL",
  "SQL Lite",
  "Firebase",
  "Git",
  "Figma",
  "Photoshop",
  "Adobe Ilustrator",
];

export default function Home() {
  return (
    <main className="px-4 py-10 bg-black text-[#dcdcdc] text-[14px] sm:text-[15px]">
      <SplashCursor />
      <div className="max-w-xl mx-auto leading-relaxed">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center mt-10 justify-between gap-10 w-full">
          <div className="md:w-3/4 w-full">
            <SparklesText>Hello Im Nadira</SparklesText>

            <h1 className="text-5xl font-semibold mb-4">
              <span className="font-bold cursor-default select-none"></span>
            </h1>
            <RevealOnScroll animation="slideUp" delay={200} triggerOnce={false}>
              <p className="text-lg mb-5 cursor-default select-none text-gray-600">
                Full Stack Developer. I love designing websites and turning them
                into code with passion & precision. I turn ideas into
                pixel-perfect experiences.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll animation="scale" delay={300} triggerOnce={false}>
            <div className="md:w-1/4 w-full flex justify-center">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 170, height: 170 }}
                cardsData={images}
              />
            </div>
          </RevealOnScroll>
        </div>
        {/* About Section */}
        <RevealOnScroll animation="slideUp" delay={100} triggerOnce={false}>
          <section className="mb-10 cursor-default select-none">
            <h2 className="text-lg font-bold mb-2 cursor-default select-none">
              About
            </h2>
            <p className="mb-3">
              I'm a web developer who's obsessed with visuals and design — not
              just making things work, but making them{" "}
              <em className="font-semibold">wew</em>. I recently finished my
              internship at{" "}
              <span className="font-semibold">Zettabyte Pte Ltd</span> as a
              front-end developer & software tester.
            </p>
            <p>
              I graduated from{" "}
              <strong className="font-semibold">UPN Veteran Yogyakarta</strong>{" "}
              and have always been passionate about digital experiences that
              connect with people.
            </p>
          </section>
        </RevealOnScroll>
        {/* Work Experience Section */}
        <section id="work">
          <div className="flex mb-5 min-h-0 flex-col gap-y-3">
            <RevealOnScroll animation="slideUp" triggerOnce={false}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </RevealOnScroll>

            {/* Setiap ResumeCard dengan animasi bergantian kiri-kanan */}
            {workData.map((work, index) => (
              <ResumeCard
                key={work.company}
                index={index}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            ))}
          </div>
        </section>
        {/* Education Section */}
        <RevealOnScroll animation="slideUp" delay={100} triggerOnce={false}>
          <section className="mb-10 cursor-default select-none">
            <h2 className="text-lg font-bold mb-2">Education</h2>
            <div>
              <strong className="font-semibold">UPN Veteran Yogyakarta</strong>
              <br />
              Bachelor's Degree in Information Technology
            </div>
          </section>
        </RevealOnScroll>
        {/* Skills Section */}
        <RevealOnScroll animation="slideUp" delay={150} triggerOnce={false}>
          <section className="mb-10 cursor-default select-none">
            <h2 className="text-lg font-bold mb-3">Skills</h2>
            <StaggeredReveal
              staggerDelay={30}
              animation="scale"
              className="flex flex-wrap gap-2"
              triggerOnce={false}
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white text-black px-2 py-1 rounded text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </StaggeredReveal>
          </section>
        </RevealOnScroll>
        <ScrollVelocity
          texts={["Project", "Documentation"]}
          velocity={velocity}
          className="custom-scroll-text"
        />
        {/* Projects Section */}
        <RevealOnScroll animation="slideUp" delay={200} triggerOnce={false}>
          <section className="mb-12 cursor-default select-none mt-12">
            <StaggeredReveal
              staggerDelay={200}
              animation="slideUp"
              className="grid gap-6 sm:grid-cols-2"
              triggerOnce={false}
            >
              <div className="border rounded-xl p-4 shadow-sm">
                <Image
                  src="/todowy.png"
                  alt="Todowy Project"
                  width={500}
                  height={280}
                  className="rounded-md mb-3"
                />
                <h3 className="font-semibold text-sm mb-1">Still Proggress</h3>
                <p className="text-xs text-gray-500 mb-2">2024 – 2025</p>
                <p className="text-sm mb-3">Sorry This View is</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-200 text-black px-2 py-1 rounded">
                    React
                  </span>
                  <span className="bg-gray-200 text-black px-2 py-1 rounded">
                    Tailwind
                  </span>
                  <span className="bg-gray-200 text-black px-2 py-1 rounded">
                    Still Proggress
                  </span>
                </div>
              </div>

              <div className="border rounded-xl p-4 shadow-sm">
                <Image
                  src="/omnifood.jpg"
                  alt="Omnifood Project"
                  width={500}
                  height={280}
                  className="rounded-md mb-3"
                />
                <h3 className="font-semibold text-sm mb-1">Still Proggress</h3>
                <p className="text-xs text-gray-500 mb-2">2024</p>
                <p className="text-sm mb-3">On Proggress</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="bg-gray-200 text-black px-2 py-1 rounded">
                    HTML
                  </span>
                  <span className="bg-gray-200 text-black px-2 py-1 rounded">
                    CSS
                  </span>
                  <span className="bg-gray-200 text-black px-2 py-1 rounded">
                    JavaScript
                  </span>
                </div>
              </div>
            </StaggeredReveal>
          </section>
        </RevealOnScroll>
        {/* Footer */}
        <div style={{ height: "60px", position: "relative" }}></div>
        <RevealOnScroll animation="fade" delay={300} triggerOnce={false}>
          <footer className=" text-center text-xs text-gray-400">
            <p className="mb-2">Built with 💻 and ☕ by Nadira Nur Wiradatya</p>
            <StaggeredReveal
              staggerDelay={100}
              animation="slideUp"
              className="flex justify-center gap-4"
              triggerOnce={false}
            >
              <Link
                href="https://linkedin.com/in/nadiranurwiradatya"
                target="_blank"
                className="text-gray-600 hover:text-black transition"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/nadiranurwiradatya22"
                target="_blank"
                className="text-gray-600 hover:text-black transition"
              >
                GitHub
              </Link>
              <Link
                href="https://instagram.com/aryana.dira"
                target="_blank"
                className="text-gray-600 hover:text-black transition"
              >
                Instagram
              </Link>
            </StaggeredReveal>
          </footer>
        </RevealOnScroll>
      </div>
    </main>
  );
}
