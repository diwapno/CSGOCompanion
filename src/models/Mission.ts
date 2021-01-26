export interface Mission {

    title: string;
    description: string;
    stars: number;
    step1: number;
    step2?: number;
    step3?: number;
    week: number;
    selectedStars?: number;
}