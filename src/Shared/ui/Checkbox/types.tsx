import { type ReactNode } from 'react';

export interface CheckboxProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	value: CheckboxValueType;
	indeterminate?: boolean;
	checked?: boolean;
	name?: string;
	label?: ReactNode;
}
export interface CheckboxChangeEvent {
	checked: boolean;
	indeterminate: boolean;
	value: CheckboxValueType;
}
export type CheckboxValueType = string | number;

export interface CheckboxOption {
	label?: ReactNode;
	value: CheckboxValueType;
}

export type CheckboxGroupChangeHandler = (list: CheckboxValueType[]) => void;

export interface CheckboxGroupProps {
	options: CheckboxOption[];
	className?: string;
	checkboxClassName?: string;
	value?: CheckboxValueType[];
	defaultChecked?: CheckboxValueType[];
	onChange?: CheckboxGroupChangeHandler;
	name?: string;
}

export interface CheckboxGroupContextValue {
	toggleOption: (option: CheckboxOption) => void;
	name: string;
	value: CheckboxValueType[];
}

export type CompoundedComponent = React.MemoExoticComponent<
	React.FC<CheckboxProps>
> & {
	Group: React.FC<CheckboxGroupProps>;
	CheckAllGroup: React.FC<CheckAllGroupProps>;
};

export interface CheckAllGroupProps {
	options: CheckboxOption[];
	value?: CheckboxValueType[];
	className?: string;
	checkAllClassName?: string;
	checkboxClassName?: string;
	onChange?: CheckboxGroupChangeHandler;
}
