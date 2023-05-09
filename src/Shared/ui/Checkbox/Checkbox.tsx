import { faCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import { useContext, useEffect, useMemo, useState, type FC, memo } from 'react';

import { CheckboxGroupContext } from './Context';
import './style.scss';
import { type CheckboxProps } from './types';

export const InternalCheckbox = memo<FC<CheckboxProps>>(
	({
		indeterminate = false,

		name,
		value,
		className,
		label,
		...restProps
	}: CheckboxProps) => {
		const inputId = useMemo(() => _.uniqueId('checkbox-'), []);
		const [isChecked, setIsChecked] = useState<boolean>(
			restProps.checked ?? false
		);
		const checkboxGroup = useContext(CheckboxGroupContext);

		useEffect(() => {
			if (checkboxGroup !== null) {
				setIsChecked(checkboxGroup?.value.includes(value));
			}
		}, [checkboxGroup]);
		useEffect(() => {
			if (restProps.checked !== undefined)
				setIsChecked(restProps.checked);
		}, [restProps.checked]);

		const checkboxProps = { ...restProps };
		checkboxProps.onChange = (e) => {
			if (restProps.checked === undefined)
				setIsChecked((e.target as HTMLInputElement).checked);
			if (restProps.onChange) {
				restProps.onChange(e);
			}
			if (checkboxGroup !== null) {
				checkboxGroup?.toggleOption({ label: label ?? value, value });
			}
		};

		return (
			<div className={`checkbox ${className ?? ''}`}>
				<label htmlFor={inputId} className="checkbox__content">
					<div className="checkbox__icon-wrapper">
						{!isChecked && indeterminate && (
							<FontAwesomeIcon
								className="checkbox__icon"
								icon={faSquare}
							/>
						)}
						{isChecked && (
							<FontAwesomeIcon
								className="checkbox__icon"
								icon={faCheck}
							/>
						)}
					</div>
					<div className="checkbox__label">{label}</div>
				</label>
				<input
					className="checkbox__input"
					type="checkbox"
					name={name ?? ''}
					id={inputId}
					value={value}
					checked={isChecked}
					{...checkboxProps}
				/>
			</div>
		);
	}
);
