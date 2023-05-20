import _ from 'lodash';
import { useMemo } from 'react';
import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';

export const useListKeys = (list: any[], prefix: string = ''): string[] => {
	const keys = useMemo(
		() => list.map(() => _.uniqueId(prefix)),
		[list, prefix]
	);
	return keys;
};

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
