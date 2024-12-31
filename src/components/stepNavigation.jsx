import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";


export default function StepNavigation({ currentStep, totalSteps, onNext, onPrev,  isNextDisabled = false 
}) {
  return (
    <div className="w-full mb-8">
    {/* Top navigation buttons */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onPrev}
          disabled={currentStep === 1}
        >
          <ChevronLeftIcon className="w-4 h-4 mr-1" />
          
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onNext}
          disabled={isNextDisabled || currentStep === totalSteps}
        >
          
          <ChevronRightIcon className="w-4 h-4 ml-1" />
        </Button>
      </div>
      <span className="text-sm text-gray-500">
        Langkah {currentStep} dari {totalSteps}
      </span>
    </div>

    {/* Progress bar */}
    <div className="relative">
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
        <div
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-300"
        />
      </div>
      <div className="flex justify-between">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index + 1 <= currentStep ? 'text-blue-500' : 'text-gray-400'
            }`}
          >
            <div
              className={`rounded-full transition-all duration-300 flex items-center justify-center w-8 h-8 mb-1
                ${
                  index + 1 < currentStep
                    ? 'bg-blue-500 text-white'
                    : index + 1 === currentStep
                    ? 'border-2 border-blue-500 text-blue-500'
                    : 'border-2 border-gray-300 text-gray-300'
                }`}
            >
              {index + 1 < currentStep ? (
                <CheckIcon className="w-4 h-4" />
              ) : (
                index + 1
              )}
            </div>
            <span className="text-xs font-medium">
              {index === 0
                ? 'Dimensi'
                : index === 1
                ? 'Material'
                : 'Rangka'}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
