// --- 次でuseReducerを追加 ---
import React, { Fragment, useEffect, useReducer } from 'react';

import { fetchLineFoods } from '../apis/line_foods';


import {
  initialState,
  lineFoodsActionTypes,
  lineFoodsReducer,
} from '../reducers/lineFoods';

export const Orders = () => {
  const [state, dispatch] = useReducer(lineFoodsReducer, initialState);

  useEffect(() => {
    dispatch({ type: lineFoodsActionTypes.FETCHING });
    fetchLineFoods({
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((data) =>
        dispatch({
          type: lineFoodsActionTypes.FETCH_SUCCESS,
          payload: {
            lineFoodsSummary: data
          }
        })
      )
      .catch((e) => console.error(e));
  }, []);

  return (
    <Fragment>
      注文画面
    </Fragment>
  )
}