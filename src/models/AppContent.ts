import { Week } from "./Week";

export interface AppContent {

    weeks: Week[];
    pages: Map<string, Page>;
};

export interface Page {

    largeTitle: string;
    title: string;
}