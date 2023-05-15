import { createContext, useContext } from 'react';
import { type TicketCardContextVal } from './types';

export const TicketCardContext = createContext<TicketCardContextVal | null>(
	null
);

export const useTicketCardContext = (): TicketCardContextVal => {
	const contetxtVal = useContext(TicketCardContext);
	if (contetxtVal === null) {
		throw new Error('trying to use ticket element outside the card');
	}
	return contetxtVal;
};
