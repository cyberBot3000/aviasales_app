import { FilterBox } from 'Entities/FilterBox';
import { useAppDispatch, useAppSelector } from 'Shared/model/hooks';
import {
	type CheckboxOption,
	type CheckboxGroupChangeHandler,
} from 'Shared/ui/Checkbox';
import { useCallback, type FC } from 'react';
import { setSelectedFilters } from './model';

const filterStopsOptions: CheckboxOption[] = [
	{
		label: 'без пересадок',
		value: 0,
	},
	{
		label: '1 пересадка',
		value: 1,
	},
	{
		label: '2 пересадки',
		value: 2,
	},
	{
		label: '3 пересадки',
		value: 3,
	},
];

export const FilterStops: FC = () => {
	const { selectedValues } = useAppSelector((store) => store.filterStops);
	const dispatch = useAppDispatch();
	const changeHandler = useCallback<CheckboxGroupChangeHandler>((list) => {
		dispatch(setSelectedFilters(list));
	}, []);
	return (
		<FilterBox
			options={filterStopsOptions}
			label="Количество пересадок"
			value={selectedValues}
			onChange={changeHandler}
		/>
	);
};

export default FilterStops;
