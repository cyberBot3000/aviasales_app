import _ from 'lodash';
import { useEffect, useMemo, useState } from 'react';

export const useCheckboxLogic = (
	checked: boolean,
	intermidiate: boolean,
	onChange: React.ChangeEventHandler<HTMLInputElement>
): {
	isChecked: boolean;
	inputId: string;
	changeHandler: React.ChangeEventHandler<HTMLInputElement>;
} => {
	const [isChecked, setIsChecked] = useState<boolean>(checked);
	const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setIsChecked(e.target.checked);
	};
	useEffect(() => {
		setIsChecked(false);
	}, [intermidiate]);
	const inputId = useMemo(() => _.uniqueId('checkbox-'), []);

	return { isChecked, inputId, changeHandler };
};
