import React from 'react';
import type { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import type { CheckboxProps } from '../types';
import { useCheckboxLogic } from '../model/Checkbox';

export const Checkbox: FC<CheckboxProps> = ({
	className,
	label,
	name,
	checked,
	intermidiate,
	onChange,
}) => {
	const { isChecked, inputId, changeHandler } = useCheckboxLogic(
		checked,
		intermidiate,
		onChange
	);
	return (
		<div className="checkbox">
			<label htmlFor={inputId} className="checkbox__content">
				<div className="checkbox__icon-wrapper">
					{(intermidiate || isChecked) && (
						<FontAwesomeIcon
							className="checkbox__icon"
							icon={intermidiate ? faSquare : faCheck}
						/>
					)}
				</div>
				<div className="checkbox__label">{label}</div>
			</label>
			<input
				type="checkbox"
				className="checkbox__input"
				id={inputId}
				name={name}
				checked={isChecked}
				onChange={changeHandler}
			/>
		</div>
	);
};
