"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SplashCursor from "./animation/SplashCursor/SplashCursor";
import Stack from "./comp/Stack/Stack";
import { workData } from "./data/work";
import { ScrollVelocity } from "./text.tsx/ScrollVelocity/ScrollVelocity";
import { ResumeCard } from "./components/ResumeCard";
import ProjectModal from "./projectmodals";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { StaggeredReveal } from "@/components/staggered-reveal";
import { SparklesText } from "@/app/comp/spark";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};
const velocity = 100;

const images = [
  { id: 1, img: "/cardheader/image4header.jpg" },
  { id: 2, img: "/cardheader/image2header.jpg" },
  { id: 3, img: "/cardheader/image3header.jpg" },
  { id: 4, img: "/cardheader/image1header.png" },
];

const skills = [
  "Figma",
  "Usability Testing",
  "Information Architecture",
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind",
  "Node.js",
  "Express",
  "MySQL",
  "SDLC",
  "Testing",
  "Angular",
];

// DATA PROYEK BARU DENGAN DETAIL LENGKAP
const projectData = [
  {
    id: 1,
    name: "Pertamina Internship Attendance UI/UX",
    date: "Oktober 2025",
    imgSrc: "/images/projects/pertamina.png",
    shortDescription:
      "Mendesain sistem presensi untuk HR & Interns. Solusi ini berhasil mencapai Usability Score tervalidasi sebesar 92/100.",
    fullDescription:
      "Fokus utama adalah menyederhanakan alur presensi wajib yang kompleks di lingkungan korporat besar untuk Staf HR dan Interns. Validasi yang ketat menghasilkan desain yang terbukti sangat efisien.",
    tags: ["Figma", "UX Research", "Prototyping", "Corporate System"],
    link: "https://shorturl.at/71tK1",
    results: [
      "Overall Usability Score: 92/100",
      "Streamlining HR and Intern flow",
      "Development-ready prototype.",
    ],
  },
  {
    id: 2,
    name: "MoneyLab Sneakers - Dual Usability",
    date: "Mar 2025 – Sep 2025",
    imgSrc: "/images/projects/moneylabs.png",
    shortDescription:
      "Mencapai Usability Score 100% (Admin) dan 88.12% (Customer). Fokus pada riset UX dan akurasi desain ke produksi.",
    fullDescription:
      "Proyek e-commerce yang melibatkan riset UX mendalam untuk mendiagnosis 3 pain points kritis. Berhasil mencapai skor validasi ganda yang tinggi, membuktikan efektivitas desain baik dari sisi operasional maupun konsumen.",
    tags: ["Figma", "UX Research", "Blade Templating", "E-commerce"],
    link: "https://shorturl.at/3mpG5",
    results: [
      "Admin Usability Score: 100%",
      "Customer Usability Score: 88.12%",
      "Solving 3 critical user pain points.",
    ],
  },
  {
    id: 3,
    name: "Dikpora Kota Yogyakarta - Data Multi-Level",
    date: "April 2025",
    imgSrc: "/images/projects/dikpora.png",
    shortDescription:
      "Merampingkan alur data 5 acara multi-level. Output: 40+ aset UI high-fidelity yang menjadi cetak biru pengembangan.",
    fullDescription:
      "Studi kasus tentang skala: mendesain sistem untuk menyederhanakan alur kerja administrasi yang melibatkan data kompleks dari 5 acara multi-level (POPDA, O2SN, dll.). Outputnya adalah 40+ aset high-fidelity yang memandu pengembangan.",
    tags: ["Information Architecture", "Figma", "Stakeholder Mapping", "Public Sector"],
    link: "https://shorturl.at/YbEu7",
    results: [
      "40+ High-Fidelity UI Assets delivered",
      "Streamlined end-to-end operational flow",
      "Mapped 5 multi-level event data flows.",
    ],
  },
  {
    id: 4,
    name: "Bjong Ngopi - Multi-Device System",
    date: "Sep 2025 – Nov 2025",
    imgSrc: "/images/projects/bjongngopi.png",
    shortDescription:
      "Merancang 3 sistem (Admin, POS, Pelanggan) di 3 perangkat. Validasi: 90% Admin/POS, 88% Pelanggan.",
    fullDescription:
      "Proyek ini adalah tantangan kompleks merancang tiga sistem terpisah yang beroperasi mulus di tiga perangkat berbeda (Laptop untuk Admin, Tablet untuk POS/Kasir, dan HP untuk Pelanggan). Desain ini berhasil menyederhanakan end-to-end flow bisnis kedai kopi.",
    tags: ["Figma/Prototyping", "Usability Testing", "Design Thinking", "Multi-Platform"],
    link: "https://shorturl.at/wCETD",
    results: [
      "Admin/POS Usability Score: 90%",
      "Customer Usability Score: 88%",
      "Simplifikasi End-to-End Business Flow.",
    ],
  },
  {
    id: 5,
    name: "Zetta Bytes Ltd - SDLC & Testing Optimization",
    date: "Feb 2024 – May 2024",
    imgSrc: "/images/project/zetta-bytes.jpg",
    shortDescription:
      "Mengoptimalkan alur Bug Reporting, berkontribusi pada penyederhanaan identifikasi defect hingga 15%.",
    fullDescription:
      "Internship yang berfokus pada perbaikan alur testing dan bug reporting dalam SDLC nyata. Berhasil menyederhanakan identifikasi defect hingga 15%, dan memberi pemahaman mendalam tentang Angular dan Graphql.",
    tags: ["SDLC", "Testing", "Angular Basics", "Bug Reporting"],
    link: null,
    results: [
      "Simplified defect identification flow by 15%",
      "Improved product quality through better testing flow",
      "Gained experience with Angular and Graphql.",
    ],
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projectData[number] | null>(null);

  const openModal = (project: typeof projectData[number]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main className="px-4 py-10 bg-black text-[#dcdcdc] text-[14px] sm:text-[15px]">
      <SplashCursor />
      {/* wider container so grid can breathe on larger screens */}
      <div className="max-w-5xl mx-auto leading-relaxed">
        {/* Hero Section ... (Unchanged) */}
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
        {/* About Section ... (Unchanged) */}
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
        {/* Work Experience Section ... (Unchanged) */}
        <section id="work">
          <div className="flex mb-5 min-h-0 flex-col gap-y-3">
            <RevealOnScroll animation="slideUp" triggerOnce={false}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </RevealOnScroll>
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
        {/* Education Section ... (Unchanged) */}
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
        {/* Skills Section ... (Unchanged) */}
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
        {/* Projects Section - UPDATED TO USE STATE AND MODAL */}
        <RevealOnScroll animation="slideUp" delay={200} triggerOnce={false}>
          <section className="mb-12 cursor-default select-none mt-12">
            <h2 className="text-xl font-bold mb-4">Selected Projects</h2>
            <StaggeredReveal
              staggerDelay={200}
              animation="slideUp"
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              triggerOnce={false}
            >
              {projectData.map((project) => (
                <div
                  key={project.id}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openModal(project);
                    }
                  }}
                  onClick={() => openModal(project)}
                  // parent perspective for subtle 3D
                  style={{ perspective: 1000 }}
                  className="group"
                >
                  <div
                    className="relative rounded-xl overflow-hidden bg-black/75 border border-white/8 shadow-lg transition-transform duration-300 transform-gpu will-change-transform
                               group-hover:-translate-y-2 group-hover:scale-105 group-hover:rotate-1"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* depth shadow */}
                    <div className="absolute inset-0 pointer-events-none -z-10 transition-all duration-300
                                    shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)]" />

                    {/* content */}
                    <div className="p-4 flex flex-col min-h-[220px]">
                      <div className="w-full mb-3 overflow-hidden rounded-md">
                        <div className="relative w-full aspect-video">
                          <Image
                            src={project.imgSrc}
                            alt={project.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                          />
                          {/* subtle glass layer to add depth */}
                          <div className="absolute inset-0 bg-white/3 backdrop-blur-sm opacity-0 group-hover:opacity-10 transition duration-300" />

                          {/* long diagonal glossy sweep */}
                          <div
                            className="absolute -left-40 top-0 h-full w-40 bg-gradient-to-r from-white/60 via-white/20 to-white/0
                                       opacity-0 blur-sm transform -skew-x-12 rotate-12 transition-all duration-900
                                       group-hover:opacity-70 group-hover:translate-x-[160%]"
                          />

                          {/* circular specular highlight */}
                          <div
                            className="absolute right-4 top-4 w-12 h-12 rounded-full bg-white/20 blur-sm opacity-0 transform scale-75 transition duration-400
                                       group-hover:opacity-85 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-sm mb-1 text-white">{project.name}</h3>
                        <p className="text-xs text-white/60 mb-2">{project.date}</p>
                        <p className="text-sm mb-3 text-white/80">{project.shortDescription}</p>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2 text-xs">
                        {project.tags.map((tag) => (
                          <span key={tag} className="bg-white/6 text-white/90 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* glossy rim highlight for edge reflection */}
                    <div className="absolute inset-0 pointer-events-none rounded-xl ring-1 ring-white/6 shadow-inner" />
                  </div>
                </div>
               ))}
            </StaggeredReveal>
          </section>
        </RevealOnScroll>

        {/* Footer ... (Unchanged) */}
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

      {/* RENDER MODAL DI BAWAH SEMUA CONTENT */}
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </main>
  );
}