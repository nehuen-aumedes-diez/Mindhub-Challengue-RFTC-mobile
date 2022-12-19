import { createReducer } from "@reduxjs/toolkit";
import gorraActions from "../actions/gorraAction";

const { getGorra, getOneGorraId, deleteGorra, filtrarGorras } = gorraActions

const initialState = {

  gorras: [],
  gorraId: '',
  busqueda: '',
  ordenPrecio: 'asc',
};

const gorraReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getGorra.fulfilled, (state, action) => {
      console.log(action);
      return {
        ...state,
        gorras: action.payload,

      };
    })
    .addCase(getOneGorraId.fulfilled, (state, action) => {
      return {
        ...state,
        gorraId: action.payload,
      };
    })
    .addCase(deleteGorra.fulfilled, (state, action) => {
      return {
        ...state,
        gorraId: action.payload.id
      }
    })
    .addCase(filtrarGorras.fulfilled, (state, action) => {
      //console.log("ACTION DE FILTRAR: ", action.payload);
      return {
          ...state,
          gorras: action.payload.gorras,
          busqueda: action.payload.busqueda,
          ordenPrecio: action.payload.ordenPrecio,
      }
    })
});

export default gorraReducer;