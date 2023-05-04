import type { ReactNode } from 'react';

export interface CheckboxProps {
	checked: boolean;
	onChange: CheckboxChangeAction;
	intermidiate: boolean;
	className: string;
	name: string;
	label: ReactNode;
}
export type CheckboxValueType = string | number;
export type CheckboxChangeAction = (
	e: React.ChangeEvent<HTMLInputElement>
) => void;
