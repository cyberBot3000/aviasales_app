import {
	useCallback,
	useEffect,
	useState,
	type ChangeEventHandler,
	type FC,
	memo,
} from 'react';
import { InternalCheckbox } from './Checkbox';
import { Group } from './Group';
import {
	type CheckAllGroupProps,
	type CheckboxGroupChangeHandler,
	type CheckboxValueType,
} from './types';

export const CheckAllGroup = memo<FC<CheckAllGroupProps>>(
	({
		options,
		value,
		className,
		checkAllClassName,
		checkboxClassName,
		onChange,
	}: CheckAllGroupProps) => {
		const [isIndeterminate, setIsIndeterminate] = useState(false);
		const [isCheckAll, setIsCheckAll] = useState<boolean>(false);
		const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(
			value ?? []
		);
		useEffect(() => {
			if (value !== undefined) {
				setCheckedList(value);
			}
		}, [value]);
		const checkAllHandler = useCallback<
			ChangeEventHandler<HTMLInputElement>
		>((e) => {
			setIsCheckAll(e.target.checked);
			setIsIndeterminate(false);
			let newCheckedList: CheckboxValueType[] = [];
			if (e.target.checked) {
				newCheckedList = options.map((option) => option.value);
			}
			onChange?.(newCheckedList);
			setCheckedList(newCheckedList);
		}, []);
		const groupChangeHandler = useCallback<CheckboxGroupChangeHandler>(
			(list) => {
				if (value === undefined) setCheckedList(list);
				onChange?.(list);
				if (!!list.length && list.length !== options.length) {
					setIsCheckAll(false);
					setIsIndeterminate(true);
					return;
				}
				setIsCheckAll(!!list.length);
				setIsIndeterminate(false);
			},
			[]
		);
		return (
			<div className={`checkbox-check-all-group ${className ?? ''}`}>
				<InternalCheckbox
					value="checkAllcheckbox"
					label="выбрать все"
					className={`checkbox-check-all-group__check-all-cb ${
						checkAllClassName ?? ''
					}`}
					checked={isCheckAll}
					onChange={checkAllHandler}
					indeterminate={isIndeterminate}
				/>
				<Group
					options={options}
					value={checkedList}
					onChange={groupChangeHandler}
					checkboxClassName={checkboxClassName}
				/>
			</div>
		);
	}
);
