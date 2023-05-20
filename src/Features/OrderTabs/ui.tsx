import FilterTabs from 'Entities/FilterTabs';
import { useAppDispatch, useAppSelector } from 'Shared/model/hooks';
import { type TabChangeEventHandler, type TabOption } from 'Shared/ui/TabsCard';
import { useCallback, type FC } from 'react';
import { setSelectedOrder } from './model';

const options: TabOption[] = [
	{ label: 'самый дешевый', value: 'mostCheap' },
	{ label: 'самый быстрый', value: 'mostFast' },
	{ label: 'оптимальный', value: 'optimal' },
];

export const OrderTabs: FC = () => {
	const { selectedValue } = useAppSelector((state) => state.orderTabs);
	const dispatch = useAppDispatch();
	const changeHandler = useCallback<TabChangeEventHandler>((e) => {
		dispatch(setSelectedOrder(e.value));
	}, []);
	return (
		<FilterTabs
			options={options}
			value={selectedValue}
			onChange={changeHandler}
		/>
	);
};

export default OrderTabs;
