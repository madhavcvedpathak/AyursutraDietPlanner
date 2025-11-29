import type { Question } from '../types.ts';

export const questions: Question[] = [
    {
        id: 1,
        text: "How would you describe your body frame?",
        options: [
            { text: "Thin, bony, small joints", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Medium build, good muscle definition", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Large build, heavy bone structure", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 2,
        text: "How is your skin texture?",
        options: [
            { text: "Dry, rough, cool to touch", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Warm, oily, sensitive, reddish", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Cool, moist, thick, smooth", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 3,
        text: "How is your hair?",
        options: [
            { text: "Dry, brittle, frizzy", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Fine, straight, early graying/balding", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Thick, wavy, lustrous, oily", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 4,
        text: "How are your eyes?",
        options: [
            { text: "Small, active, dry", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Medium, penetrating, light sensitive", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Large, calm, loving", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 5,
        text: "How is your appetite?",
        options: [
            { text: "Irregular, sometimes hungry, sometimes not", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Strong, unbearable if meal is missed", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Slow, steady, can skip meals easily", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 6,
        text: "How is your digestion?",
        options: [
            { text: "Irregular, gas, bloating, constipation", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Quick, heartburn, loose stools", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Slow, heavy, lethargic after eating", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 7,
        text: "What is your typical energy level?",
        options: [
            { text: "Bursts of energy, then exhaustion", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Moderate, steady, focused", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Slow to start, but good endurance", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 8,
        text: "How is your sleep pattern?",
        options: [
            { text: "Light, interrupted, trouble falling asleep", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Sound, short duration, wake up alert", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Deep, long, trouble waking up", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 9,
        text: "How do you react to stress?",
        options: [
            { text: "Anxiety, worry, fear", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Anger, frustration, criticism", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Withdrawal, depression, possessiveness", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 10,
        text: "How is your memory?",
        options: [
            { text: "Quick to learn, quick to forget", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Good memory, distinct", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Slow to learn, slow to forget", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 11,
        text: "What is your body temperature preference?",
        options: [
            { text: "I dislike cold, love warmth", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "I dislike heat, love cool environments", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "I dislike damp/cool, love dry warmth", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 12,
        text: "How are your joints?",
        options: [
            { text: "Cracking, popping, stiff", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Loose, flexible", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Large, sturdy, well-lubricated", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 13,
        text: "How is your speech?",
        options: [
            { text: "Fast, rambling, talkative", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Sharp, precise, articulate", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Slow, melodious, thoughtful", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 14,
        text: "What is your walking pace?",
        options: [
            { text: "Fast, light steps", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Medium, determined stride", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Slow, steady, heavy steps", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 15,
        text: "How are your nails?",
        options: [
            { text: "Brittle, rough, ridges", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Soft, pink, flexible", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Thick, strong, smooth", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 16,
        text: "How is your pulse?",
        options: [
            { text: "Weak, thready, irregular (like a snake)", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Strong, bounding (like a frog)", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Slow, steady (like a swan)", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 17,
        text: "How is your sweat?",
        options: [
            { text: "Scanty, minimal odor", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Profuse, strong odor", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Moderate, pleasant odor", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 18,
        text: "How are your lips?",
        options: [
            { text: "Dry, chapped, thin", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Red, soft, medium", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Pale, thick, smooth", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 19,
        text: "How are your teeth?",
        options: [
            { text: "Irregular, protruding, gums recede", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Medium, yellowish, gums bleed easily", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Large, white, strong gums", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 20,
        text: "What is your typical emotional state?",
        options: [
            { text: "Enthusiastic but changeable", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Intense, ambitious, driven", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Calm, content, loyal", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 21,
        text: "How do you handle money?",
        options: [
            { text: "Spend impulsively on small things", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Spend on luxury/status, but save too", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Save, hoard, spend carefully", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 22,
        text: "How is your social life?",
        options: [
            { text: "Love new people, short interactions", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Select friends, like to lead", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Few close friends, long-term bonds", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 23,
        text: "How is your decision making?",
        options: [
            { text: "Indecisive, change mind often", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Quick, decisive, sometimes rash", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Slow, deliberate, stick to it", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 24,
        text: "What weather do you prefer?",
        options: [
            { text: "Warm and humid", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Cool and dry", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Warm and dry", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 25,
        text: "How is your physical strength?",
        options: [
            { text: "Low, tire easily", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Medium, good tone", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "High, very strong", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 26,
        text: "How is your thirst?",
        options: [
            { text: "Variable", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Excessive", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Low", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 27,
        text: "How are your dreams?",
        options: [
            { text: "Flying, moving, fearful, active", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Fire, fighting, colorful, intense", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Water, nature, romantic, slow", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 28,
        text: "How is your elimination (bowel movements)?",
        options: [
            { text: "Dry, hard, constipation", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Soft, oily, loose", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Heavy, slow, thick", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 29,
        text: "What is your dominant sense?",
        options: [
            { text: "Hearing/Touch", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Sight", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Taste/Smell", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    },
    {
        id: 30,
        text: "How do you feel about routine?",
        options: [
            { text: "Dislike it, feel trapped", weight: { Vata: 3, Pitta: 0, Kapha: 0 } },
            { text: "Like it if I designed it", weight: { Vata: 0, Pitta: 3, Kapha: 0 } },
            { text: "Love it, need it for stability", weight: { Vata: 0, Pitta: 0, Kapha: 3 } }
        ]
    }
];
