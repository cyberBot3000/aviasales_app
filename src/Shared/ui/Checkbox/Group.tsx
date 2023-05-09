import {
	type FC,
	useMemo,
	useState,
	useEffect,
	useCallback,
	memo,
} from 'react';
import {
	type CheckboxGroupContextValue,
	type CheckboxGroupProps,
	type CheckboxOption,
	type CheckboxValueType,
} from './types';
import { CheckboxGroupContext } from './Context';
import { InternalCheckbox } from './Checkbox';

export const Group = memo<FC<CheckboxGroupProps>>(
	({
		className,
		value,
		checkboxClassName,
		name,
		options,
		onChange,
		defaultChecked,
	}: CheckboxGroupProps) => {
		const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(
			value ?? defaultChecked ?? []
		);
		useEffect(() => {
			if (value !== undefined) {
				setCheckedList(value);
			}
		}, [value]);
		const toggleOption = useCallback(
			(option: CheckboxOption) => {
				const valueIndex = checkedList.indexOf(option.value);
				const newCheckedList = [...checkedList];
				if (valueIndex !== -1) {
					newCheckedList.splice(valueIndex, 1);
				} else newCheckedList.push(option.value);
				if (value === undefined) {
					setCheckedList(newCheckedList);
				}
				onChange?.(newCheckedList);
			},
			[checkedList, onChange]
		);
		const contextVal: CheckboxGroupContextValue = useMemo(
			() => ({
				toggleOption,
				name: name ?? '',
				value: checkedList,
			}),
			[checkedList, toggleOption]
		);
		return (
			<div className={`checkbox-group ${className ?? ''}`}>
				<CheckboxGroupContext.Provider value={contextVal}>
					{options.map((option) => (
						<InternalCheckbox
							value={option.value}
							key={option.value.toString()}
							className={checkboxClassName}
							label={option.label}
						/>
					))}
				</CheckboxGroupContext.Provider>
			</div>
		);
	}
);
