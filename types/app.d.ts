declare global {
	// eslint-disable-next-line @typescript-eslint/consistent-type-imports
	declare type RootState = import('../src/App/store').RootState;
	// eslint-disable-next-line @typescript-eslint/consistent-type-imports
	declare type AppDispatch = import('../src/App/store').Dispatch;
	declare module '*.svg' {
		import type * as React from 'react';

		export const ReactComponent: React.FunctionComponent<
			React.SVGProps<SVGSVGElement> & { title?: string }
		>;

		const src: string;
		export default src;
	}
}
export {};
