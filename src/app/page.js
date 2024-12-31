"use client";
import { ThemeProvider } from "next-themes";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/card/CardSection";
import Footer from "@/components/Footer";
import AchievementsSection from "@/components/AchievementsSection";
import DarkModeTogleButton from "@/components/navbar/DarkModeTogleButton";
import Review from "@/components/Review";
import { achievementsList, socialMedia } from "@/constans";
import Link from "next/link";

export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="flex min-h-screen items-center flex-col bg-slate-200 dark:bg-slate-900">
        <Navbar />
        <div className="block sm:hidden pt-2 pb-4 w-full container max-w-[90%] text-end">
          <DarkModeTogleButton />
        </div>
        <div className="py-4 px-4 sm:px-12 container sm:max-w-[90%] mx-auto w-full ">
          <HeroSection />
          <AchievementsSection achievementsList={achievementsList} />
          <AboutSection />
          <Link
            href="/calculator-pvc"
            className="inline-block px-6 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Kalkulator PVC
          </Link>
          <ProjectsSection />
          <Review />
        </div>
        <div className="w-full overflow-hidden">
          <Footer socialMedia={socialMedia} />
        </div>
      </main>
    </ThemeProvider>
  );
}
