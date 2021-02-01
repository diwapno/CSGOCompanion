import React, { useState } from 'react';
import { getMissionsFromCache, getMissionsFromFirestore, setCachedMissions } from '../services/firestore';
import { Week } from './Week';

export interface MissionContextProps {
    weeks: Week[];
    fetchWeeks: (refresh: boolean) => void;
}

export const MissionsContext = React.createContext<MissionContextProps>({ weeks: [], fetchWeeks: () => { } });

export const MissionsContextProvider: React.FC = ({ children }) => {

    const [weeks, setWeeks] = useState<Week[]>([]);

    const fetchWeeksFireStore = async (refresh: boolean) => {

        if (weeks.length === 0 || refresh) {

            const cachedWeeks = await getMissionsFromCache();

            if (cachedWeeks) {
                setWeeks(cachedWeeks);
            }

            const newWeeks = await getMissionsFromFirestore();
            setCachedMissions(newWeeks);
            setWeeks(newWeeks);
        }
    };

    return (
        <MissionsContext.Provider value={{ weeks: weeks, fetchWeeks: fetchWeeksFireStore }}>{children}</MissionsContext.Provider>
    );
};
