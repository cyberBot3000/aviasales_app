import {
	Checkbox,
	type CheckboxGroupChangeHandler,
	type CheckboxOption,
	type CheckboxValueType,
} from 'Shared/ui/Checkbox';
import { useCallback, useMemo, useState, type FC } from 'react';

export const HomePage: FC = () => {
	const options = useMemo<CheckboxOption[]>(
		() => [
			{
				label: 'one',
				value: 'one',
				key: 1,
			},
			{
				label: 'two',
				value: 'two',
				key: 2,
			},
			{
				label: 'three',
				value: 'three',
				key: 3,
			},
		],
		[]
	);
	const [checked, setChecked] = useState<CheckboxValueType[]>([]);
	const groupChangeHandler = useCallback<CheckboxGroupChangeHandler>(
		(list) => {
			setChecked(list);
			console.log(list);
		},
		[]
	);

	return (
		<div className="home-page">
			<Checkbox.CheckAllGroup
				options={options}
				value={checked}
				onChange={groupChangeHandler}
			/>
		</div>
	);
};
