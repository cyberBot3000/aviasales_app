const PLURALS: Record<Locales, PluralKeys> = {
	ru: {
		stops: {
			zero: 'пересадок',
			one: 'пересадка',
			two: 'пересадки',
			few: 'пересадки',
			many: 'пересадок',
			other: 'пересадки',
		},
	},
};

export type Locales = 'ru';

export interface PluralKeyObj {
	zero: string;
	one: string;
	two: string;
	few: string;
	many: string;
	other: string;
}
export type PluralKeys = Record<string, PluralKeyObj>;

export const getPluralString = (
	pluralKey: string,
	locale: Locales,
	amount: number
): string => {
	const ruleObj = new Intl.PluralRules(locale);
	return PLURALS[locale][pluralKey][ruleObj.select(amount)];
};
