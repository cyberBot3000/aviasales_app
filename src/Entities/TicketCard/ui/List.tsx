import { type PropsWithChildren, type FC } from 'react';

export const List: FC<PropsWithChildren> = ({ children }) => {
	return <div className="ticket-card__list">{children}</div>;
};

export default List;
