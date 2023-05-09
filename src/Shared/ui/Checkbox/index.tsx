import { CheckAllGroup } from './CheckAllGroup';
import { InternalCheckbox } from './Checkbox';
import { Group } from './Group';
import { type CompoundedComponent } from './types';

export * from './types';

export const Checkbox = InternalCheckbox as CompoundedComponent;
Checkbox.Group = Group;
Checkbox.CheckAllGroup = CheckAllGroup;
