import {
	TabsCard,
	type TabOption,
	type TabValueType,
	type TabChangeEventHandler,
} from 'Shared/ui/TabsCard';
import React, { type FC } from 'react';
import './style.scss';

export interface FilterTabsProps {
	options: TabOption[];
	className?: string;
	value?: TabValueType;
	onChange?: TabChangeEventHandler;
}

const FilterTabs: FC<FilterTabsProps> = React.memo(
	({ options, className, value, onChange }: FilterTabsProps) => {
		return (
			<div className={`filter-tabs ${className ?? ''}`}>
				<TabsCard
					options={options}
					className="filter-tabs__card"
					tabClassName="filter-tabs__tab"
					tabActiveClassName="filter-tabs__tab_active"
					value={value}
					onChange={onChange}
				/>
			</div>
		);
	}
);

export default FilterTabs;
