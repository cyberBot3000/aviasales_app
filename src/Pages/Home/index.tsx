import {
	type CheckboxGroupChangeHandler,
	type CheckboxOption,
	type CheckboxValueType,
} from 'Shared/ui/Checkbox';
import { Container } from 'Shared/ui/Container';
import { Flex } from 'Shared/ui/Flex';
import { useCallback, useMemo, useState, type FC } from 'react';

import { FilterBox } from 'Widgets/FilterBox';
import FilterTabs from 'Widgets/FilterTabs';
import './style.scss';

export const HomePage: FC = () => {
	const options = useMemo<CheckboxOption[]>(
		() => [
			{
				label: 'one',
				value: 'one',
			},
			{
				label: 'two',
				value: 'two',
			},
			{
				label: 'three',
				value: 'three',
			},
		],
		[]
	);
	const [checked, setChecked] = useState<CheckboxValueType[]>([]);
	const groupChangeHandler = useCallback<CheckboxGroupChangeHandler>(
		(list) => {
			setChecked(list);
		},
		[]
	);
	// const tabsChangeHandler = useCallback<TabChangeEventHandler>((e) => {
	// 	console.log(e.value);
	// }, []);

	return (
		<div className="home-page">
			<Container className="home-page__container">
				<Flex className="home-page__layout">
					<div className="home-page__sidebar">
						<FilterBox
							value={checked}
							options={options}
							onChange={groupChangeHandler}
							label="Количество пересадок"
						/>
					</div>
					<div className="home-page__content">
						<div className="home-page__content-header">
							<FilterTabs options={options} />
						</div>
						i am content
					</div>
				</Flex>
			</Container>
		</div>
	);
};
