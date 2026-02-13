import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

interface Page10Props {
  onNext: () => void;
  onWarning: () => void;
  showWarning: boolean;
  onWarningClose: () => void;
  onGoToPage: (page: number) => void;
}

export default function Page10({
  onNext,
  onWarning,
  showWarning,
  onWarningClose,
  onGoToPage,
}: Page10Props) {
  const [merciPosition, setMerciPosition] = useState({ x: 0, y: 0 });
  const merciButtonRef = useRef<HTMLButtonElement>(null);

  const handleMerciHover = () => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    setMerciPosition({ x: randomX, y: randomY });
    onWarning();
  };

  const handleYesClick = () => {
    onNext();
  };

  const handleWarningOkay = () => {
    onWarningClose();
    onGoToPage(10);
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4 relative">
      {/* Scattered Images */}
      <div className="absolute top-10 left-10 w-20 h-20">
        <img
          src="/assets/picG.jpg"
          alt="Pic G"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute top-20 right-10 w-24 h-24">
        <img
          src="/assets/picH.jpg"
          alt="Pic H"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute bottom-32 left-5 w-20 h-20">
        <img
          src="/assets/picI.jpg"
          alt="Pic I"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute bottom-20 right-20 w-24 h-24">
        <img
          src="/assets/picJ.jpg"
          alt="Pic J"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="absolute top-1/2 right-5 w-20 h-20">
        <img
          src="/assets/picK.jpg"
          alt="Pic K"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-sm space-y-8 z-10">
        {/* Text */}
        <p className="text-center text-lg font-semibold text-gray-800">
          wtf it's only for one day rightt? I can only give my love to the only
          other "carr" I knowww!🤸🏻‍♂️
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <Button
            onClick={handleYesClick}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg text-sm"
          >
            Oh I give you my love too for "One day"😊
          </Button>

          <div className="relative">
            <Button
              ref={merciButtonRef}
              onClick={handleMerciHover}
              onMouseEnter={handleMerciHover}
              className="w-full bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg text-xs"
              style={{
                transform: `translate(${merciPosition.x}px, ${merciPosition.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              Merci😒
            </Button>
          </div>
        </div>
      </div>

      {/* Warning Modal */}
      {showWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center space-y-4">
            <p className="text-lg font-semibold text-gray-800">
              STOP MESSING WITH ME OR I START RECITING ALL UR PANTIES COLORS IN
              PUBLIC!
            </p>
            <Button
              onClick={handleWarningOkay}
              className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Okayy😱
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
