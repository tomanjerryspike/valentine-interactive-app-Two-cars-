import { Button } from "@/components/ui/button";

interface Page1Props {
  onNext: () => void;
}

export default function Page1({ onNext }: Page1Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Images */}
        <div className="flex gap-4 justify-center">
          <img
            src="/assets/picA.jpg"
            alt="Pic A"
            className="w-32 h-32 object-cover rounded-lg"
          />
          <img
            src="/assets/picB.jpg"
            alt="Pic B"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <p className="text-center text-lg font-semibold text-gray-800">
          alight lemme get in character, no funny business comin haha (nervious)
        </p>

        {/* Next Button */}
        <div className="flex justify-end">
          <Button
            onClick={onNext}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Next Page
          </Button>
        </div>
      </div>
    </div>
  );
}
