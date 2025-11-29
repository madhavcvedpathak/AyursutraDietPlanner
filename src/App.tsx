import { useState } from 'react';
import { Questionnaire } from './components/Questionnaire.tsx';
import { DietPlanResult } from './components/DietPlanResult.tsx';
import { dietPlans } from './data/knowledgeBase.ts';
import type { DietPlan, Dosha } from './types.ts';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'result'>('welcome');
  const [result, setResult] = useState<DietPlan | null>(null);

  const handleQuizComplete = (scores: { Vata: number; Pitta: number; Kapha: number }) => {
    // Determine dominant Dosha
    let dominantDosha: Dosha = 'Vata';
    let maxScore = scores.Vata;

    if (scores.Pitta > maxScore) {
      maxScore = scores.Pitta;
      dominantDosha = 'Pitta';
    }
    if (scores.Kapha > maxScore) {
      maxScore = scores.Kapha;
      dominantDosha = 'Kapha';
    }

    setResult(dietPlans[dominantDosha]);
    setStep('result');
  };

  const resetQuiz = () => {
    setStep('welcome');
    setResult(null);
  };

  return (
    <div className="min-h-screen py-12 px-4 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary rounded-full blur-[100px]" />
      </div>

      <header className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h1 className="text-4xl md:text-5xl font-heading text-secondary font-bold">Ayursutra</h1>
        </div>
        <p className="text-lg text-gray-600 font-body italic">Discover your ancient path to wellness</p>
      </header>

      <AnimatePresence mode="wait">
        {step === 'welcome' && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center max-w-2xl"
          >
            <div className="bg-white/80 backdrop-blur-sm p-10 rounded-xl ancient-border shadow-xl">
              <h2 className="text-3xl font-heading text-secondary mb-6">Personalized Diet Plan Maker</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Unlock the secrets of your body's unique constitution. Answer 30 simple questions to discover your Dosha and receive a customized dietary guide based on ancient Ayurvedic wisdom.
              </p>
              <button
                onClick={() => setStep('quiz')}
                className="btn-primary text-xl px-10 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Begin Your Journey
              </button>
            </div>
          </motion.div>
        )}

        {step === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full"
          >
            <Questionnaire
              onComplete={handleQuizComplete}
              onExit={() => setStep('welcome')}
            />
          </motion.div>
        )}

        {step === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full"
          >
            <DietPlanResult plan={result} onReset={resetQuiz} />
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>© 2024 Ayursutra. Ancient Wisdom for Modern Life.</p>
      </footer>
    </div>
  );
}

export default App;
