import { type ReactNode } from 'react';

export type TabValueType = number | string;

export type TabChangeEventHandler = (e: TabChangeEvent) => void;

export interface TabChangeEvent {
	value: TabValueType;
}

export interface TabOption {
	label?: ReactNode;
	value: TabValueType;
}

export interface TabsCardProps {
	options: TabOption[];
	onChange?: TabChangeEventHandler;
	value?: TabValueType;
	name?: string;
	className?: string;
	tabClassName?: string;
	tabActiveClassName?: string;
}

export interface TabsCardContextType {
	name: string;
	value: TabValueType;
	changeValue: (val: TabValueType) => void;
}

export interface TabProps {
	label?: ReactNode;
	value: TabValueType;
	activeClassName?: string;
	className?: string;
}
