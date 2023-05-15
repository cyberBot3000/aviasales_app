import { type PropsWithChildren, type FC } from 'react';

export const Header: FC<PropsWithChildren> = ({ children }) => {
	return <div className="ticket-card__header">{children}</div>;
};
