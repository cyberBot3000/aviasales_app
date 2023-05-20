/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from 'Shared/ui/Container';
import { Flex } from 'Shared/ui/Flex';
import { type FC } from 'react';

import FilterStops from 'Features/FilterStops/ui';
import OrderTabs from 'Features/OrderTabs/ui';
import { Tickets } from 'Widgets/Tickets';
import './style.scss';

export const HomePage: FC = () => {
	return (
		<div className="home-page">
			<Container className="home-page__container">
				<Flex className="home-page__layout">
					<div className="home-page__sidebar">
						<FilterStops />
					</div>
					<div className="home-page__content">
						<div className="home-page__content-header">
							<OrderTabs />
						</div>
						<Tickets />
					</div>
				</Flex>
			</Container>
		</div>
	);
};
