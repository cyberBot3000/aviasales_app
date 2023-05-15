import { getCarrierLogoPath } from 'Shared/service';
import { type FC } from 'react';
import { useTicketCardContext } from '../context';

export const Carrier: FC = () => {
	const { ticket } = useTicketCardContext();
	return (
		<div className="ticket-card__carrier">
			<img
				src={getCarrierLogoPath(ticket.carrier)}
				alt=""
				className="ticket-card__carrier-img"
			/>
		</div>
	);
};
