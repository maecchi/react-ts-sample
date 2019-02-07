import {
  FilterType,
  setVisibilityFilter,
  SetVisibilityFilterAction,
  showAll,
} from './SetVisibilityFilter';

export {
  FilterType,
  showAll,
  showCompleted,
  showActive,
} from './SetVisibilityFilter';

type Actions = SetVisibilityFilterAction;

export interface State {
  visibility: FilterType;
}

const init = (): State => {
  return {
    visibility: showAll(),
  };
};

export const reducer = (state: State = init(), actions: Actions) => {
  switch (actions.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        visibility: actions.payload.filter,
      };
    default:
      return state;
  }
};

export const actionCreator = {
  setVisibilityFilter,
};
