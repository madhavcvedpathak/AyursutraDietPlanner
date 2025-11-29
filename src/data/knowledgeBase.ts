import type { DietPlan } from '../types.ts';

export const dietPlans: Record<string, DietPlan> = {
    Vata: {
        dosha: 'Vata',
        description: "Vata is the energy of movement. You are likely creative, energetic, and lively, but may struggle with anxiety, dryness, and irregularity. Your diet should focus on grounding, warming, and nourishing foods.",
        foodsToEat: [
            "Warm, cooked foods (soups, stews)",
            "Sweet, sour, and salty tastes",
            "Healthy fats (ghee, sesame oil, olive oil)",
            "Dairy products (warm milk, cheese)",
            "Rice, wheat, oats (cooked)",
            "Root vegetables (cooked)",
            "Nuts and seeds (soaked)",
            "Warming spices (ginger, cinnamon, cardamom)"
        ],
        foodsToAvoid: [
            "Cold, raw foods (salads, raw veggies)",
            "Bitter, pungent, and astringent tastes",
            "Dry foods (crackers, popcorn, dried fruit)",
            "Beans (unless well-cooked with spices)",
            "Carbonated drinks",
            "Caffeine and stimulants"
        ],
        lifestyleTips: [
            "Establish a consistent daily routine (Dinacharya).",
            "Prioritize sleep and rest.",
            "Keep warm and avoid cold drafts.",
            "Practice grounding exercises like Yoga (slow flow) or walking.",
            "Daily self-massage with warm sesame oil (Abhyanga)."
        ]
    },
    Pitta: {
        dosha: 'Pitta',
        description: "Pitta is the energy of transformation and digestion. You are likely intelligent, focused, and ambitious, but may be prone to anger, inflammation, and perfectionism. Your diet should be cooling and calming.",
        foodsToEat: [
            "Cool, refreshing foods (salads, raw fruits)",
            "Sweet, bitter, and astringent tastes",
            "Ghee, coconut oil, olive oil",
            "Dairy (milk, butter, ghee)",
            "Wheat, rice, barley, oats",
            "Sweet fruits (grapes, melons, pears)",
            "Green leafy vegetables",
            "Cooling spices (fennel, coriander, mint)"
        ],
        foodsToAvoid: [
            "Hot, spicy foods (chili, cayenne)",
            "Sour and salty tastes",
            "Fermented foods (yogurt, pickles, vinegar)",
            "Fried and oily foods",
            "Alcohol and caffeine",
            "Red meat",
            "Tomatoes, onions, garlic (in excess)"
        ],
        lifestyleTips: [
            "Avoid excessive heat and direct sunlight.",
            "Practice cooling breathwork (Sheetali).",
            "Engage in non-competitive exercise (swimming, moon salutations).",
            "Spend time in nature, especially near water.",
            "Cultivate patience and moderation."
        ]
    },
    Kapha: {
        dosha: 'Kapha',
        description: "Kapha is the energy of structure and lubrication. You are likely calm, loving, and strong, but may struggle with lethargy, weight gain, and attachment. Your diet should be stimulating, light, and drying.",
        foodsToEat: [
            "Warm, light, dry foods",
            "Pungent, bitter, and astringent tastes",
            "Minimal oil (mustard oil, sunflower oil)",
            "Goat milk or soy milk (in moderation)",
            "Barley, corn, millet, buckwheat",
            "Most vegetables (steamed or sautéed)",
            "Apples, pears, pomegranates",
            "Strong spices (black pepper, turmeric, ginger, chili)"
        ],
        foodsToAvoid: [
            "Cold, heavy, oily foods",
            "Sweet, sour, and salty tastes",
            "Dairy products (cheese, yogurt, milk)",
            "Fried foods",
            "Wheat and rice (in excess)",
            "Sweet fruits (bananas, dates, melons)",
            "Nuts and seeds (in excess)"
        ],
        lifestyleTips: [
            "Engage in vigorous exercise daily.",
            "Wake up early (before sunrise).",
            "Seek new experiences and variety.",
            "Avoid napping during the day.",
            "Practice dry brushing (Garshana) to stimulate circulation."
        ]
    }
};
