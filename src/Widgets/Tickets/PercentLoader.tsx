import React, { type FC } from 'react';

export interface PercentLoaderProps {
	value: number;
}
export const PercentLoader: FC<PercentLoaderProps> = ({ value }) => {
	return (
		<div className="tickets__percent-loader">
			<div className="tickets__percent-loader-label">
				подождите, билеты еще загружаются
			</div>
			<div className="tickets__percent-loader-wrapper">
				<div
					className="tickets__percent-loader-value"
					style={{
						width: `${value}%`,
					}}
				/>
			</div>
		</div>
	);
};

export default PercentLoader;
