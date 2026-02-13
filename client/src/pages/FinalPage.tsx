export default function FinalPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Video */}
        <div className="flex justify-center">
          <video
            src="/assets/vidB.mp4"
            controls
            className="w-full max-w-sm rounded-lg"
          />
        </div>

        {/* Text */}
        <p className="text-center text-lg font-semibold text-gray-800">
          thanks my one day lover heheheheh, anyways heres an interesting video
          just for u!
        </p>
      </div>
    </div>
  );
}
