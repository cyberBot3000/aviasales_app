import { type FC } from 'react';
import { useTicketCardContext } from '../context';

const Price: FC = () => {
	const { ticket } = useTicketCardContext();

	return (
		<div className="ticket-card__price">
			{ticket.price.toLocaleString()}
		</div>
	);
};

export default Price;
