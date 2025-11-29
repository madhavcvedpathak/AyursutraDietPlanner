export type Dosha = 'Vata' | 'Pitta' | 'Kapha';

export interface Option {
    text: string;
    weight: {
        Vata: number;
        Pitta: number;
        Kapha: number;
    };
}

export interface Question {
    id: number;
    text: string;
    options: Option[];
}

export interface DietPlan {
    dosha: Dosha;
    description: string;
    foodsToEat: string[];
    foodsToAvoid: string[];
    lifestyleTips: string[];
}
