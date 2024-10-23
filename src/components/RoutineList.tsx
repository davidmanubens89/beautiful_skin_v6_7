import React from 'react';
import { Apple, Dumbbell } from 'lucide-react';

interface RoutineListProps {
  routine: Array<{
    id: number;
    step: string;
    product: string;
    time: string;
  }>;
  icon: React.ReactNode;
  title: string;
}

const RoutineList: React.FC<RoutineListProps> = ({ routine, icon, title }) => {
  const lifestyleTips = {
    morning: {
      nutrition: [
        "Start your day with a glass of water with lemon to boost skin hydration and detoxification",
        "Include antioxidant-rich berries and vitamin C foods in your breakfast for skin protection",
        "Green tea contains polyphenols that help protect against UV damage"
      ],
      exercise: [
        "Morning yoga improves blood circulation, bringing oxygen and nutrients to your skin",
        "A quick cardio session boosts collagen production and gives your skin a healthy glow",
        "Facial exercises can help tone facial muscles and improve skin appearance"
      ]
    },
    evening: {
      nutrition: [
        "Include omega-3 rich foods like salmon or nuts in your dinner for skin repair",
        "Avoid sugary snacks before bed as they can contribute to inflammation",
        "Herbal teas like chamomile can help reduce stress and improve skin health"
      ],
      exercise: [
        "Light stretching before bed improves circulation and helps skin recovery",
        "Practice stress-reducing activities like meditation to prevent cortisol-related skin issues",
        "Get adequate sleep (7-9 hours) for optimal skin cell regeneration"
      ]
    }
  };

  const isEveningRoutine = title.toLowerCase().includes('evening');
  const tips = isEveningRoutine ? lifestyleTips.evening : lifestyleTips.morning;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      
      {/* Skincare Steps */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Skincare Steps</h3>
        <ul className="space-y-4">
          {routine.map((item) => (
            <li key={item.id} className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 rounded-full text-indigo-800 font-semibold mr-4">
                {item.id}
              </span>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{item.step}</h3>
                <p className="text-gray-600">{item.product}</p>
                <p className="text-sm text-gray-500">{item.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Lifestyle Tips */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Lifestyle Tips</h3>
        
        {/* Nutrition Tips */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Apple className="w-5 h-5 text-green-500 mr-2" />
            <h4 className="font-medium text-gray-700">Nutrition Tips</h4>
          </div>
          <ul className="space-y-2 pl-7">
            {tips.nutrition.map((tip, index) => (
              <li key={index} className="text-gray-600 text-sm list-disc">{tip}</li>
            ))}
          </ul>
        </div>

        {/* Exercise Tips */}
        <div>
          <div className="flex items-center mb-3">
            <Dumbbell className="w-5 h-5 text-blue-500 mr-2" />
            <h4 className="font-medium text-gray-700">Exercise Tips</h4>
          </div>
          <ul className="space-y-2 pl-7">
            {tips.exercise.map((tip, index) => (
              <li key={index} className="text-gray-600 text-sm list-disc">{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoutineList;