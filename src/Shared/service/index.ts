import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type Ticket, type DBSearch } from 'Shared/types';

export const getCarrierLogoPath = (iataCode: string): string => {
	return `https://pics.avs.io/99/36/${iataCode}.png`;
};

export interface FetchTicketsResponseData {
	tickets: Ticket[];
	stop: boolean;
	total: number;
}

export interface FetchTicketsArgs {
	searchId: string;
}

export const aviasalesApi = createApi({
	reducerPath: 'aviasalesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://aviasales-test-api.kata.academy',
	}),
	endpoints: (builder) => ({
		fetchSearchId: builder.query<DBSearch, any>({
			query: () => '/search',
		}),
		fetchTickets: builder.query<FetchTicketsResponseData, FetchTicketsArgs>(
			{
				query: ({ searchId }) => ({
					url: '/tickets',
					params: {
						searchId,
					},
				}),
				merge(currData, responsedData) {
					currData.tickets.push(...responsedData.tickets);
					currData.stop = responsedData.stop;
					currData.total += responsedData.total;
				},
				transformResponse(
					baseQueryReturnValue: FetchTicketsResponseData,
					meta,
					arg
				) {
					return {
						...baseQueryReturnValue,
						total: baseQueryReturnValue.tickets.length,
					};
				},
			}
		),
	}),
});

export const { useFetchSearchIdQuery, useFetchTicketsQuery } = aviasalesApi;
