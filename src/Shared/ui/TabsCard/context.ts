import { createContext, useContext } from 'react';
import { type TabsCardContextType } from './types';

export const TabsCardContext = createContext<TabsCardContextType | null>(null);

export const useTabsCardContext = (): TabsCardContextType => {
	const contextVal = useContext(TabsCardContext);
	if (contextVal === null) {
		throw new Error('trying to use Tab outside the tabs card element');
	}
	return contextVal;
};
