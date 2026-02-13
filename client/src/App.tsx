import { useState } from "react";
import Page1 from "@/pages/Page1";
import Page2 from "@/pages/Page2";
import Page3 from "@/pages/Page3";
import Page4 from "@/pages/Page4";
import Page5 from "@/pages/Page5";
import Page6 from "@/pages/Page6";
import Page7 from "@/pages/Page7";
import Page8 from "@/pages/Page8";
import Page9 from "@/pages/Page9";
import Page10 from "@/pages/Page10";
import FinalPage from "@/pages/FinalPage";

import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showWarning, setShowWarning] = useState(false);

  const goToNextPage = () => {
    if (currentPage < 11) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1 onNext={goToNextPage} />;
      case 2:
        return <Page2 onNext={goToNextPage} />;
      case 3:
        return <Page3 onNext={goToNextPage} />;
      case 4:
        return <Page4 onNext={goToNextPage} />;
      case 5:
        return <Page5 onNext={goToNextPage} />;
      case 6:
        return <Page6 onNext={goToNextPage} />;
      case 7:
        return <Page7 onNext={goToNextPage} />;
      case 8:
        return <Page8 onNext={goToNextPage} />;
      case 9:
        return <Page9 onNext={goToNextPage} />;
      case 10:
        return (
          <Page10
            onNext={goToNextPage}
            onWarning={() => setShowWarning(true)}
            showWarning={showWarning}
            onWarningClose={() => setShowWarning(false)}
            onGoToPage={goToPage}
          />
        );
      case 11:
        return <FinalPage />;
      default:
        return <Page1 onNext={goToNextPage} />;
    }
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen bg-white">
            {renderPage()}
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
