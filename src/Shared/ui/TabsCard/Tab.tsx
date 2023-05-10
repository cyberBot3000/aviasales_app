import _ from 'lodash';
import { memo, useMemo, type ChangeEventHandler, type FC } from 'react';
import { useTabsCardContext } from './context';
import { type TabProps } from './types';
import './style.scss';

export const Tab: FC<TabProps> = memo(
	({ label, value, className, activeClassName }: TabProps) => {
		const inputId = useMemo(() => _.uniqueId('radio-'), []);
		const tabsCardContext = useTabsCardContext();
		const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
			tabsCardContext.changeValue(e.target.value);
		};
		return (
			<label
				className={`tab ${className ?? ''} ${
					value === tabsCardContext.value
						? activeClassName ?? 'tab_active'
						: ''
				}`}
				htmlFor={inputId}
			>
				<div className="tab__label">{label ?? value}</div>
				<input
					type="radio"
					name={tabsCardContext.name}
					id={inputId}
					className="tab__input"
					checked={value === tabsCardContext.value}
					value={value}
					onChange={changeHandler}
				/>
			</label>
		);
	}
);
