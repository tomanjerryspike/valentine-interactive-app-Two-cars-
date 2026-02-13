import { Button } from "@/components/ui/button";

interface Page4Props {
  onNext: () => void;
}

export default function Page4({ onNext }: Page4Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Text */}
        <p className="text-center text-2xl font-bold text-gray-800">
          fr now tell me...
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
