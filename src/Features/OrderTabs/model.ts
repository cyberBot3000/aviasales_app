import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type TabValueType } from 'Shared/ui/TabsCard';

export interface IOrderTabs {
	selectedValue: TabValueType | undefined;
}

const initialState: IOrderTabs = {
	selectedValue: undefined,
};

export const orderTabsSlice = createSlice({
	name: 'orderTabs',
	initialState,
	reducers: {
		setSelectedOrder: (state, action: PayloadAction<TabValueType>) => {
			state.selectedValue = action.payload;
		},
	},
});

export const selectOrderTabs = (state: RootState): IOrderTabs | undefined =>
	state.orderTabs;

export const { setSelectedOrder } = orderTabsSlice.actions;
export const orderTabsReducer = orderTabsSlice.reducer;
