import { type ReactNode, type FC } from 'react';

export interface Ticket {
	// Цена в рублях
	price: number;
	// Код авиакомпании (iata)
	carrier: string;
	// Массив перелётов.
	// В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
	segments: [
		{
			// Код города (iata)
			origin: string;
			// Код города (iata)
			destination: string;
			// Дата и время вылета туда
			date: string;
			// Массив кодов (iata) городов с пересадками
			stops: string[];
			// Общее время перелёта в минутах
			duration: number;
		},
		{
			// Код города (iata)
			origin: string;
			// Код города (iata)
			destination: string;
			// Дата и время вылета обратно
			date: string;
			// Массив кодов (iata) городов с пересадками
			stops: string[];
			// Общее время перелёта в минутах
			duration: number;
		}
	];
}

export interface TicketCardProps {
	className?: string;
	ticket: Ticket;
	header?: ReactNode;
	body?: ReactNode;
}
export interface TicketCardContextVal {
	ticket: Ticket;
}

export interface TicketCardCompounded extends FC<TicketCardProps> {
	Header: FC<React.PropsWithChildren>;
	Price: FC;
	Carrier: FC;
	Segments: FC;
	List: FC<React.PropsWithChildren>;
}
