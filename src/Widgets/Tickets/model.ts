import { createSelector, createSlice } from '@reduxjs/toolkit';
import { type UseQueryHookResult } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { type aviasalesApi } from 'Shared/service';
import { type Ticket } from 'Shared/types';

export const selectTickets = (
	res: UseQueryHookResult<
		typeof aviasalesApi.endpoints.fetchTickets.Types.QueryDefinition
	>
): Ticket[] | undefined => {
	return res.data?.tickets;
};

export interface TicketsState {
	pollingInterval: number;
	ticketsLimit: number;
}

const initialState: TicketsState = {
	pollingInterval: 50,
	ticketsLimit: 5,
};

const TicketsSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {
		disablePolling: (state) => {
			state.pollingInterval = 0;
		},
		increaseTicketsLimit: (state) => {
			state.ticketsLimit += 5;
		},
	},
});

export const { disablePolling, increaseTicketsLimit } = TicketsSlice.actions;
export const TicketsReducer = TicketsSlice.reducer;

export const selectFilteredTickets = createSelector(
	[
		selectTickets,
		(res, state: RootState) => state.filterStops.selectedValues,
	],
	(tickets, selectedStopsFilter) => {
		const resultTickets: Ticket[] = [];
		if (tickets === undefined) {
			return undefined;
		}
		tickets.forEach((ticket) => {
			for (let elem of selectedStopsFilter) {
				if (ticket.segments[0].stops.length === elem) {
					resultTickets.push(ticket);
					return;
				}
			}
		});
		return resultTickets;
	}
);

export const selectOrderedFilteredTickets = createSelector(
	[
		selectFilteredTickets,
		(res, state: RootState) => state.orderTabs.selectedValue,
	],
	(filteredTickets, selectedOrder) => {
		if (selectedOrder === undefined || filteredTickets === undefined)
			return [];
		return [...filteredTickets].sort((a, b) => {
			if (selectedOrder === 'mostCheap') {
				return a.price - b.price;
			}
			if (selectedOrder === 'mostFast') {
				return a.segments[0].duration - b.segments[0].duration;
			}
			if (selectedOrder === 'optimal') {
				return (
					a.segments[0].duration * a.price -
					b.segments[0].duration * b.price
				);
			}
			return 0;
		});
	}
);

export const selectOrderedFilteredCuttedTickets = createSelector(
	[
		selectOrderedFilteredTickets,
		(res, state: RootState) => state.tickets.ticketsLimit,
	],
	(tickets, limit) => {
		return tickets?.slice(0, limit);
	}
);
