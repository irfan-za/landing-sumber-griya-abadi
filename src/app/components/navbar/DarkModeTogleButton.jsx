'use client'
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes";

function DarkModeTogleButton() {
  const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              onClick={() => currentTheme == "dark"? setTheme('light'): setTheme("dark")}
            >
              {
                currentTheme ==='light'?(
                  <MoonIcon className="w-5 h-5"/>
                )
                :
                <SunIcon className="w-5 h-5"/>
              }
            </button>
  )
}

export default DarkModeTogleButton