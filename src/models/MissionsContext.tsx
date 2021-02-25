import React, { useState } from 'react';
import { getContentFromFirestore, setCachedContent } from '../services/firestore';
import { AppContent } from './AppContent';

export interface MissionContextProps {
    appContent: AppContent;
    fetchContent: (refresh: boolean) => void;
}

export const mockAppContent: AppContent = {
    weeks: [],
    pages: new Map(),
}

export const MissionsContext = React.createContext<MissionContextProps>({ appContent: mockAppContent, fetchContent: () => { } });

export const MissionsContextProvider: React.FC = ({ children }) => {

    const [content, setContent] = useState<AppContent>(mockAppContent);

    const fetchContentFireStore = async (refresh: boolean) => {

        if (content.weeks.length === 0 || refresh) {

            const cachedContent = await getContentFromFirestore();

            if (cachedContent) {
                setContent(cachedContent);
            }

            const newContent = await getContentFromFirestore();
            setCachedContent(newContent);
            setContent(newContent);
        }
    };

    return (
        <MissionsContext.Provider value={{ appContent: content, fetchContent: fetchContentFireStore }}>{children}</MissionsContext.Provider>
    );
};
