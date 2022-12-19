import { createReducer } from "@reduxjs/toolkit";
import buzoActions from "../actions/buzoAction";

const { getBuzo, getOneBuzoId, deleteBuzo, filtrarBuzos } = buzoActions

const initialState = {

  buzos: [],
  buzoId: [],
  busqueda: '',
  ordenPrecio: 'asc',
};

const buzoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getBuzo.fulfilled, (state, action) => {
      console.log(action);
      return {
        ...state,
        buzos: action.payload,

      };
    })
    .addCase(getOneBuzoId.fulfilled, (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        buzoId: action.payload,
      };
    }).addCase(deleteBuzo.fulfilled, (state, action) => {
      return {
        ...state,
        buzoId: action.payload.id
      }
    })
    .addCase(filtrarBuzos.fulfilled, (state, action) => {
      //console.log("ACTION DE FILTRAR: ", action.payload);
      return {
          ...state,
          buzos: action.payload.buzos,
          busqueda: action.payload.busqueda,
          ordenPrecio: action.payload.ordenPrecio,
      }
    })
});


export default buzoReducer;