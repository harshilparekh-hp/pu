import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  decMultiplier,
  incMultiplier,
} from "../redux/slice/counterSlice";

function Counter() {
  const counter = useSelector((state) => state.counterStore.counter);
  const dispatch = useDispatch();

  const [stateMultiplier, setStateMultiplier] = useState(() => {
    return 0;
  });

  return (
    <div
      className="mt-2 pt-3 pl-2 text-center"
      style={{ borderTop: "1px solid #999" }}
    >
      <div className="text-black pb-2 h4">Counter is {counter}</div>
      <div className="row">
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2"> Basic Counter </h4>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(incrementCounter())}
            >
              Add
            </button>{" "}
            &nbsp;
            <button
              className="btn btn-danger"
              onClick={() => dispatch(decrementCounter())}
            >
              Remove
            </button>
          </div>
        </div>

        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2"> Multiplier Counter </h4>
            <div className="row">
              <div className="col-4 p-1">
                <input
                  type="text"
                  placeholder="multiplier"
                  className="form-control"
                  value={stateMultiplier}
                  onChange={(e) => {
                    setStateMultiplier(e.target.value);
                  }}
                ></input>
              </div>
              <div className="col-4 p-1">
                <button
                  className="btn btn-primary form-control"
                  onClick={() => dispatch(incMultiplier(parseInt(stateMultiplier)))}
                >
                  Add
                </button>
              </div>
              <div className="col-4 p-1">
                {" "}
                <button
                  className="btn btn-danger form-control"
                  onClick={() => dispatch(decMultiplier(parseInt(stateMultiplier)))}
                >
                  Remove
                </button>
              </div>
            </div>{" "}
            &nbsp;
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
