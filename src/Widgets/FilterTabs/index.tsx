import { TabsCard, type TabOption } from 'Shared/ui/TabsCard';
import { type FC } from 'react';
import './style.scss';

export interface FilterTabsProps {
	options: TabOption[];
	className?: string;
}

const FilterTabs: FC<FilterTabsProps> = ({ options, className }) => {
	return (
		<div className={`filter-tabs ${className ?? ''}`}>
			<TabsCard
				options={options}
				className="filter-tabs__card"
				tabClassName="filter-tabs__tab"
				tabActiveClassName="filter-tabs__tab_active"
			/>
		</div>
	);
};

export default FilterTabs;
