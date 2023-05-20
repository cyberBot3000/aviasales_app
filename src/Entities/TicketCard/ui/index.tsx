import React, { type FC, useMemo } from 'react';
import { TicketCardContext } from '../context';
import { type TicketCardCompounded, type TicketCardProps } from '../types';
import { Carrier } from './Carrier';
import { Header } from './Header';
import List from './List';
import Price from './Price';
import Segments from './Segments';
import './style.scss';

const TicketCardInternal: FC<TicketCardProps> = React.memo(
	({ className, ticket, header, body }: TicketCardProps) => {
		const contextVal = useMemo(
			() => ({
				ticket,
			}),
			[ticket]
		);
		return (
			<div className={`ticket-card ${className ?? ''}`}>
				<TicketCardContext.Provider value={contextVal}>
					{header && (
						<div className="ticket-card__header">{header}</div>
					)}
					{body && <div className="ticket-card__body">{body}</div>}
				</TicketCardContext.Provider>
			</div>
		);
	}
);

export const TicketCard = TicketCardInternal as TicketCardCompounded;

TicketCard.Segments = Segments;
TicketCard.Price = Price;
TicketCard.Header = Header;
TicketCard.Carrier = Carrier;
TicketCard.List = List;
