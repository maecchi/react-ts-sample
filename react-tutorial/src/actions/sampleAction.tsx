import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const actions = {
  updateValue: actionCreator<string>('Action_UPDATE_VALUE'),
};
