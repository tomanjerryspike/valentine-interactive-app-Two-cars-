import { Button } from "@/components/ui/button";

interface Page5Props {
  onNext: () => void;
}

export default function Page5({ onNext }: Page5Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Video */}
        <div className="flex justify-center">
          <video
            src="/assets/vidA.mp4"
            controls
            className="w-full max-w-sm rounded-lg"
          />
        </div>

        {/* Emoji */}
        <p className="text-center text-4xl">
          🤸🏻‍♂️
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
