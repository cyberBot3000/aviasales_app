import { TicketCard } from 'Entities/TicketCard';
import { useAppDispatch, useAppSelector } from 'Shared/model/hooks';
import { useFetchSearchIdQuery, useFetchTicketsQuery } from 'Shared/service';
import { Flex } from 'Shared/ui/Flex';
import { Loader } from 'Shared/ui/Loader';
import { useEffect, type FC } from 'react';
import {
	disablePolling,
	increaseTicketsLimit,
	selectOrderedFilteredCuttedTickets,
} from './model';
import './style.scss';
import PercentLoader from './PercentLoader';

// most ugly component)

export const Tickets: FC = () => {
	const pollingInterval = useAppSelector(
		(state) => state.tickets.pollingInterval
	);
	const dispatch = useAppDispatch();
	const storeState = useAppSelector((state) => state);

	const {
		data: dbSearch,
		isLoading: isSearchIdLoading,
		isError: isSearchIdError,
	} = useFetchSearchIdQuery('');
	const { data: allTickets, filteredTickets } = useFetchTicketsQuery(
		{ searchId: dbSearch?.searchId ?? '' },
		{
			skip: isSearchIdError || isSearchIdLoading,
			selectFromResult: (result) => ({
				...result,
				filteredTickets: selectOrderedFilteredCuttedTickets(
					result,
					storeState
				),
			}),
			pollingInterval,
		}
	);
	useEffect(() => {
		if (allTickets?.stop) dispatch(disablePolling());
	}, [allTickets?.stop]);
	return (
		<div className="tickets">
			{isSearchIdLoading && <Loader />}

			{(allTickets?.total ?? 0) < 9000 && (
				<PercentLoader
					value={((allTickets?.total ?? 0) * 100) / 9000}
				/>
			)}
			{filteredTickets.length === 0 && (
				<div className="tickets__message">
					По заданным параметрам билетов нет
				</div>
			)}
			{filteredTickets.length !== 0 && (
				<>
					<TicketCard.List>
						{filteredTickets?.map((ticket) => (
							<TicketCard
								key={JSON.stringify(ticket)}
								ticket={ticket}
								className="home-page__ticket-card"
								header={
									<TicketCard.Header>
										<Flex
											alignItems="c"
											justifyContent="sb"
										>
											<TicketCard.Price />
											<TicketCard.Carrier />
										</Flex>
									</TicketCard.Header>
								}
								body={<TicketCard.Segments />}
							/>
						))}
					</TicketCard.List>
					<button
						className="tickets__get-more-btn"
						type="button"
						onClick={() => {
							dispatch(increaseTicketsLimit());
						}}
					>
						загрузить еще
					</button>
				</>
			)}
		</div>
	);
};

export * from './model';
