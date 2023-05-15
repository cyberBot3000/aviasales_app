import { getPluralString } from 'Shared/lib/plurals';
import { useListKeys } from 'Shared/utils';
import { type FC } from 'react';
import { useTicketCardContext } from '../context';
import { getLandingTime, getTimeParts, getTimeString } from '../utils';

const Segments: FC = () => {
	const { ticket } = useTicketCardContext();

	const segmentsKeys = useListKeys(ticket.segments, 'ticket-card-segment-');

	return (
		<div className="ticket-card__segments">
			{ticket.segments.map((segment, i) => (
				<div className="ticket-card__segment" key={segmentsKeys[i]}>
					<div className="ticket-card__segment-item">
						<div className="ticket-card__segment-item-head">
							{segment.origin} - {segment.destination}
						</div>
						<div className="ticket-card__segment-item-body">
							{getTimeString(segment.date)}-
							{getTimeString(
								getLandingTime(segment.date, segment.duration)
							)}
						</div>
					</div>
					<div className="ticket-card__segment-item">
						<div className="ticket-card__segment-item-head">
							в пути
						</div>
						<div className="ticket-card__segment-item-body">
							{getTimeParts(segment.duration)}
						</div>
					</div>
					<div className="ticket-card__segment-item">
						<div className="ticket-card__segment-item-head">
							{segment.stops.length}{' '}
							{getPluralString(
								'stops',
								'ru',
								segment.stops.length
							)}
						</div>
						<div className="ticket-card__segment-item-body">
							{segment.stops.join(', ')}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Segments;
