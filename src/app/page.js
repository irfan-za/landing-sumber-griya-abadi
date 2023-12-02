'use client'
import { ThemeProvider } from "next-themes"
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/card/CardSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import DarkModeTogleButton from "./components/navbar/DarkModeTogleButton";
import Review from "./components/Review";


export default function Home() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <main className="flex min-h-screen items-center flex-col bg-slate-200 dark:bg-slate-900">
        <Navbar />
        <div className="block sm:hidden pt-2 pb-4 w-full container max-w-[90%] text-end">
          <DarkModeTogleButton/>
        </div>
        <div className="py-4 px-4 sm:px-12 container sm:max-w-[90%] mx-auto w-full ">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <Review/>
        </div>
        <div className="w-full overflow-hidden">
          <Footer />
        </div>
      </main>

    </ThemeProvider>
  );
}
