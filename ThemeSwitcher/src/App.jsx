import { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import useTheme from "./contexts/Theme";
import ThemeBtn from "./components/Theme"; // renamed for clarity
import Card from "./components/Card";

function ThemedApp() {
  const { themeMode } = useTheme();

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className="flex flex-wrap min-h-screen items-center justify-center">
      <div className="w-full max-w-sm mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeBtn />
        </div>
        <Card />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}
