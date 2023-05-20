import React, { type PropsWithChildren, type FC } from 'react';

export const List: FC<PropsWithChildren> = React.memo(
	({ children }: PropsWithChildren) => {
		return <div className="ticket-card__list">{children}</div>;
	}
);

export default List;
