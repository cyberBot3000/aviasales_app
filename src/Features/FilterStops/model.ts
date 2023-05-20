import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type CheckboxValueType } from 'Shared/ui/Checkbox';

export interface IFilterStops {
	selectedValues: CheckboxValueType[];
}

const initialState: IFilterStops = {
	selectedValues: [],
};

export const filterStopsSlice = createSlice({
	name: 'filterStops',
	initialState,
	reducers: {
		setSelectedFilters: (
			state,
			action: PayloadAction<CheckboxValueType[]>
		) => {
			state.selectedValues = action.payload;
		},
	},
});

export const selectFilterStops = (state: RootState): IFilterStops =>
	state.filterStops;
export const { setSelectedFilters } = filterStopsSlice.actions;
export const filterStopsReducer = filterStopsSlice.reducer;
