import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Story } from "./components/Story";
import { Teachers } from "./components/Teachers";
import { Courses } from "./components/Courses";
import { EnglishTest } from "./components/EnglishTest";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <Hero />
        <About />
        <Story />
        <Teachers />
        <Courses />
        <EnglishTest />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}