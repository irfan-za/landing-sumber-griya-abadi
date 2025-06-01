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
import BlogsSection from "@/components/BlogsSection";

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
          <ProjectsSection />
          <Review />
          <section className="pt-8" id="kalkulator-material">
            <h2 className="text-2xl font-bold text-accent-foreground mb-6 text-center">
              Kalkulator Material
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/calculator-pvc" className="group">
                <div className="p-6 rounded-lg bg-blue-50 border border-blue-200 shadow-sm transition-all hover:shadow-md hover:bg-blue-100">
                  <svg
                    className="w-8 h-8 text-blue-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="font-semibold text-lg text-accent-foreground mb-2">
                    Kalkulator PVC
                  </h3>
                  <p className="text-muted-foreground">
                    Hitung kebutuhan material plafon PVC untuk proyek Anda
                  </p>
                </div>
              </Link>

              <Link href="/calculator-gypsum" className="group">
                <div className="p-6 rounded-lg bg-blue-50 border border-blue-200 shadow-sm transition-all hover:shadow-md hover:bg-blue-100">
                  <svg
                    className="w-8 h-8 text-blue-600 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <h3 className="font-semibold text-lg text-accent-foreground mb-2">
                    Kalkulator Gypsum
                  </h3>
                  <p className="text-muted-foreground">
                    Hitung kebutuhan material plafon gypsum untuk proyek Anda
                  </p>
                </div>
              </Link>
            </div>
          </section>

          <BlogsSection />
        </div>
        <div className="w-full overflow-hidden">
          <Footer socialMedia={socialMedia} />
        </div>
      </main>
    </ThemeProvider>
  );
}
