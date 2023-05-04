import { Checkbox } from 'Shared/ui/Checkbox/ui/Checkbox';
import React, { useCallback, useState } from 'react';
import type { FC } from 'react';

export const HomePage: FC = () => {
	const [isChecked, setIsChecked] = useState(false);
	const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
		(e) => {
			setIsChecked(e.target.checked);
		},
		[]
	);
	return (
		<div className="home-page">
			<Checkbox
				className="some"
				label="checkbox"
				checked={isChecked}
				onChange={onChange}
				name="checkbox"
				intermidiate={false}
			/>
		</div>
	);
};
