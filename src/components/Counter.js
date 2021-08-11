import React from 'react';
import {connect} from "dva";
import {withRouter} from 'dva/router'

const Counter = ({counter, dispatch, history}) => {
  return (
    <div>
      <h1>{counter.count}</h1>
      <button onClick={() => {
        dispatch({type: 'counter/add'})
      }}>Add
      </button>
      <button onClick={() => {
        dispatch({type: 'counter/asyncAdd'})
      }}>asyncAdd
      </button>
      <button onClick={() => history.push('/')
      }>go back home
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(withRouter(Counter));
