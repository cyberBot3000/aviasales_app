import type { HOC } from 'Shared/types';
import { compose } from 'lodash/fp';
import { withStore } from './withStore';

export const withProviders: HOC = compose(withStore);
