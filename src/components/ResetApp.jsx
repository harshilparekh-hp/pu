import React from 'react'
// import { resetCounter } from '../redux/slice/counterSlice';
import { resetDestination } from '../redux/slice/destinationSlice';
import { useDispatch } from 'react-redux';

import { resetReactReduxApp } from '../redux/action/action';

function ResetApp() {

  const dispatch = useDispatch();

  const resetCounterAndDestn = () => {
    // dispatch(resetCounter());
    dispatch(resetReactReduxApp());
  }

  return (
    <div className='text-center'>
        <button className='btn btn-warning' onClick={resetCounterAndDestn}>Reset App</button>
    </div>
  );
}

export default ResetApp