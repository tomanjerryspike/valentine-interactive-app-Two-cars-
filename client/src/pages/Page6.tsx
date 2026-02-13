import { Button } from "@/components/ui/button";

interface Page6Props {
  onNext: () => void;
}

export default function Page6({ onNext }: Page6Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/assets/picE.jpg"
            alt="Pic E"
            className="w-64 h-auto object-cover rounded-lg"
          />
        </div>

        {/* Text */}
        <p className="text-center text-lg font-semibold text-gray-800">
          I DON'T HIDE BEHIND HUMOR UNLIKE WHAT SOME CARS MIGHT THINK!
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
