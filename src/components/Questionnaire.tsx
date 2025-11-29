import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Option } from '../types.ts';
import { questions } from '../data/questions.ts';
import { cn } from '../lib/utils';
import { ChevronRight, Check } from 'lucide-react';

interface QuestionnaireProps {
    onComplete: (scores: { Vata: number; Pitta: number; Kapha: number }) => void;
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({ onComplete }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState({ Vata: 0, Pitta: 0, Kapha: 0 });
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const currentQuestion = questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const handleOptionSelect = (option: Option, index: number) => {
        setSelectedOption(index);

        // Small delay for better UX
        setTimeout(() => {
            const newScores = {
                Vata: scores.Vata + option.weight.Vata,
                Pitta: scores.Pitta + option.weight.Pitta,
                Kapha: scores.Kapha + option.weight.Kapha,
            };
            setScores(newScores);

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedOption(null);
            } else {
                onComplete(newScores);
            }
        }, 400);
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-6">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm font-heading text-secondary mb-2">
                    <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/80 backdrop-blur-sm p-8 rounded-xl ancient-border"
                >
                    <h2 className="text-2xl font-heading text-secondary mb-6 leading-relaxed">
                        {currentQuestion.text}
                    </h2>

                    <div className="space-y-4">
                        {currentQuestion.options.map((option, index) => (
                            <motion.button
                                key={index}
                                onClick={() => handleOptionSelect(option, index)}
                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                                whileTap={{ scale: 0.98 }}
                                className={cn(
                                    "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between group",
                                    selectedOption === index
                                        ? "border-primary bg-primary/10 text-secondary"
                                        : "border-secondary/20 hover:border-primary/50 text-gray-700"
                                )}
                            >
                                <span className="font-body text-lg">{option.text}</span>
                                {selectedOption === index && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                    >
                                        <Check className="w-6 h-6 text-primary" />
                                    </motion.div>
                                )}
                                {selectedOption !== index && (
                                    <ChevronRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
