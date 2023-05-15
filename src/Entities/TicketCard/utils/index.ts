export const getLandingTime = (
	takeoff: Date | string | number,
	minutes: number
): Date => {
	const takeoffDate = new Date(takeoff);
	return new Date(takeoffDate.valueOf() + 1000 * 60 * minutes);
};

export const getTimeString = (dateVal: Date | number | string): string => {
	return new Date(dateVal).toLocaleTimeString('ru', {
		timeStyle: 'short',
	});
};

export const getTimeParts = (flightMinutesAmount: number): string => {
	let totalDays = Math.floor(flightMinutesAmount / 60 / 24);
	let totalHours = Math.floor(flightMinutesAmount / 60);
	let totalMinutes = flightMinutesAmount;
	let resultStr = '';
	if (totalDays > 0) {
		resultStr += `${totalDays}д `;
		totalHours -= totalDays * 24;
		totalMinutes -= totalDays * 60 * 24;
	}
	if (totalHours > 0) {
		resultStr += `${totalHours}ч `;
		totalMinutes -= totalHours * 60;
	}
	if (totalMinutes > 0) {
		resultStr += `${totalMinutes}м `;
	}
	return resultStr;
};
