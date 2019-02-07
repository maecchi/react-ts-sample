import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';

import Link from '../components/Link';
import { actionCreator, RootState } from '../modules';
import { FilterType } from '../modules/visibilityFilter';

interface OwnProps {
  filter: FilterType;
}

const mapStateToProps = (state: RootState, onwProps: OwnProps) => {
  return {
    active: onwProps.filter === state.visibilityFilter.visibility,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: OwnProps) => {
  return {
    onClick: () => {
      dispatch(
        actionCreator.visibilityFilter.setVisibilityFilter({
          filter: ownProps.filter,
        }),
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);
