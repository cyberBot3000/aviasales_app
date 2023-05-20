import type { FC } from 'react';

export type HOC = (Component: FC) => FC;

export interface DBSearch {
	searchId: string;
}

export interface Ticket {
	// Цена в рублях
	price: number;
	// Код авиакомпании (iata)
	carrier: string;
	// Массив перелётов.
	// В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
	segments: TicketSegment[];
}

export interface TicketSegment {
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
