import {
	Checkbox,
	type CheckboxValueType,
	type CheckboxGroupChangeHandler,
	type CheckboxOption,
} from 'Shared/ui/Checkbox';
import React, { type FC } from 'react';

import './style.scss';

export interface FilterBoxProps {
	options: CheckboxOption[];
	label?: string;
	onChange?: CheckboxGroupChangeHandler;
	value?: CheckboxValueType[];
}
export const FilterBox: FC<FilterBoxProps> = React.memo(
	({ options, label = '', value, onChange }: FilterBoxProps) => {
		return (
			<div className="filter-box">
				<div className="filter-box__label">
					<div className="filter-box__label-typography">{label}</div>
				</div>
				<Checkbox.CheckAllGroup
					options={options}
					value={value}
					onChange={onChange}
					checkAllClassName="filter-box__checkbox-item"
					checkboxClassName="filter-box__checkbox-item"
				/>
			</div>
		);
	}
);
