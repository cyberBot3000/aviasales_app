import type { HOC } from 'Shared/types';
import { compose } from 'lodash/fp';

export const withProviders: HOC = compose();
