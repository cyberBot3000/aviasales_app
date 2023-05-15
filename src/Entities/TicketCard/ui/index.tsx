import { useMemo } from 'react';
import { TicketCardContext } from '../context';
import { type TicketCardCompounded, type TicketCardProps } from '../types';
import './style.scss';
import Segments from './Segments';
import Price from './Price';
import { Header } from './Header';
import { Carrier } from './Carrier';
import List from './List';

export const TicketCard: TicketCardCompounded = ({
	className,
	ticket,
	header,
	body,
}: TicketCardProps) => {
	const contextVal = useMemo(
		() => ({
			ticket,
		}),
		[ticket]
	);
	return (
		<div className={`ticket-card ${className ?? ''}`}>
			<TicketCardContext.Provider value={contextVal}>
				{header && <div className="ticket-card__header">{header}</div>}
				{body && <div className="ticket-card__body">{body}</div>}
			</TicketCardContext.Provider>
		</div>
	);
};

TicketCard.Segments = Segments;
TicketCard.Price = Price;
TicketCard.Header = Header;
TicketCard.Carrier = Carrier;
TicketCard.List = List;
