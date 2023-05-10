import _ from 'lodash';
import {
	useCallback,
	useEffect,
	useMemo,
	useState,
	type FC,
	memo,
} from 'react';
import { Tab } from './Tab';
import {
	type TabsCardProps,
	type TabValueType,
	type TabsCardContextType,
} from './types';
import { TabsCardContext } from './context';

export const TabsCard: FC<TabsCardProps> = memo(
	({
		options,
		name,
		className,
		tabActiveClassName,
		tabClassName,
		...restProps
	}: TabsCardProps) => {
		const [value, setValue] = useState<TabValueType>(restProps.value ?? '');
		useEffect(() => {
			if ('value' in restProps) {
				setValue(restProps.value ?? '');
			}
		}, [restProps.value]);
		const radioGroupName = useMemo(() => {
			if (name !== undefined) {
				return name;
			}
			return _.uniqueId('radio-group-');
		}, [name]);
		const changeValue = useCallback(
			(newVal: TabValueType) => {
				if (restProps.value === undefined) setValue(newVal);
				if (restProps.onChange !== undefined) {
					restProps?.onChange({ value: newVal });
				}
			},
			[restProps.value, restProps.onChange]
		);
		const contextVal = useMemo<TabsCardContextType>(
			() => ({
				name: radioGroupName,
				value,
				changeValue,
			}),
			[radioGroupName, value]
		);
		return (
			<div className={`tabs-card ${className ?? ''}`}>
				<TabsCardContext.Provider value={contextVal}>
					{options.map((option) => (
						<Tab
							value={option.value}
							key={option.value}
							label={option.label}
							className={tabClassName}
							activeClassName={tabActiveClassName}
						/>
					))}
				</TabsCardContext.Provider>
			</div>
		);
	}
);
