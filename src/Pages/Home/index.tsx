/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	type CheckboxGroupChangeHandler,
	type CheckboxOption,
	type CheckboxValueType,
} from 'Shared/ui/Checkbox';
import { Container } from 'Shared/ui/Container';
import { Flex } from 'Shared/ui/Flex';
import { useCallback, useMemo, useState, type FC } from 'react';

import { FilterBox } from 'Widgets/FilterBox';
import FilterTabs from 'Widgets/FilterTabs';
import './style.scss';
import { TicketCard, type Ticket } from 'Entities/TicketCard';
import { useListKeys } from 'Shared/utils';

export const HomePage: FC = () => {
	const options = useMemo<CheckboxOption[]>(
		() => [
			{
				label: 'one',
				value: 'one',
			},
			{
				label: 'two',
				value: 'two',
			},
			{
				label: 'three',
				value: 'three',
			},
		],
		[]
	);
	const tickets = useMemo<Ticket[]>(
		() => [
			{
				price: 10000,
				carrier: 'S7',
				segments: [
					{
						// Код города (iata)
						origin: 'MOW',
						// Код города (iata)
						destination: 'AUH',
						// Дата и время вылета туда
						date: '4-18-2022-20:30:5',
						// Массив кодов (iata) городов с пересадками
						stops: ['JFK', 'JFK'],
						// Общее время перелёта в минутах
						duration: 480,
					},
					{
						// Код города (iata)
						origin: 'AUH',
						// Код города (iata)
						destination: 'MOW',
						// Дата и время вылета обратно
						date: '4-25-2022-20:30:5',
						// Массив кодов (iata) городов с пересадками
						stops: ['JFK', 'JFK'],
						// Общее время перелёта в минутах
						duration: 480,
					},
				],
			},
			{
				price: 10000,
				carrier: 'S7',
				segments: [
					{
						// Код города (iata)
						origin: 'MOW',
						// Код города (iata)
						destination: 'AUH',
						// Дата и время вылета туда
						date: '4-18-2022-20:30:5',
						// Массив кодов (iata) городов с пересадками
						stops: ['JFK', 'JFK'],
						// Общее время перелёта в минутах
						duration: 480,
					},
					{
						// Код города (iata)
						origin: 'AUH',
						// Код города (iata)
						destination: 'MOW',
						// Дата и время вылета обратно
						date: '4-25-2022-20:30:5',
						// Массив кодов (iata) городов с пересадками
						stops: ['JFK', 'JFK'],
						// Общее время перелёта в минутах
						duration: 480,
					},
				],
			},
		],
		[]
	);
	const ticketsKeys = useListKeys(tickets, 'ticket-');
	const [checked, setChecked] = useState<CheckboxValueType[]>([]);
	const groupChangeHandler = useCallback<CheckboxGroupChangeHandler>(
		(list) => {
			setChecked(list);
		},
		[]
	);

	return (
		<div className="home-page">
			<Container className="home-page__container">
				<Flex className="home-page__layout">
					<div className="home-page__sidebar">
						<FilterBox
							value={checked}
							options={options}
							onChange={groupChangeHandler}
							label="Количество пересадок"
						/>
					</div>
					<div className="home-page__content">
						<div className="home-page__content-header">
							<FilterTabs options={options} />
						</div>
						<TicketCard.List>
							{tickets.map((ticket, index) => (
								<TicketCard
									ticket={ticket}
									className="home-page__ticket-card"
									key={ticketsKeys[index]}
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
					</div>
				</Flex>
			</Container>
		</div>
	);
};
