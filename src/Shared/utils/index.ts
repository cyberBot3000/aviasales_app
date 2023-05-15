import _ from 'lodash';
import { useMemo } from 'react';

export const useListKeys = (list: any[], prefix: string = ''): string[] => {
	const keys = useMemo(() => list.map(() => _.uniqueId(prefix)), []);
	return keys;
};
