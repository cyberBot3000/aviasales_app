import { store } from 'App/store';
import { type HOC } from 'Shared/types';
import { Provider } from 'react-redux';

export const withStore: HOC = (Component) => (props) => {
	return (
		<Provider store={store}>
			<Component {...props} />
		</Provider>
	);
};
