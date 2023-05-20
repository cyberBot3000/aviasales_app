import { type Ticket } from 'Shared/types';
import { type ReactNode, type FC } from 'react';

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
