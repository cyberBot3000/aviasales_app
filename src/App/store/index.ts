import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { aviasalesApi } from 'Shared/service';
import { filterStopsReducer } from 'Features/FilterStops';
import { orderTabsReducer } from 'Features/OrderTabs/model';
import { TicketsReducer } from 'Widgets/Tickets';

const rootReducer = combineReducers({
	[aviasalesApi.reducerPath]: aviasalesApi.reducer,
	filterStops: filterStopsReducer,
	orderTabs: orderTabsReducer,
	tickets: TicketsReducer,
});
export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(aviasalesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
