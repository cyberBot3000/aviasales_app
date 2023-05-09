import { Container } from 'Shared/ui/Container';
import { Flex } from 'Shared/ui/Flex';
import React, { type FC } from 'react';
import { ReactComponent as Logo } from 'Shared/assets/Logo.svg';
import './style.scss';

export const Header: FC = () => {
	return (
		<div className="header">
			<Container className="header__container">
				<Flex alignItems="c" justifyContent="c">
					<Logo />
				</Flex>
			</Container>
		</div>
	);
};

export default Header;
