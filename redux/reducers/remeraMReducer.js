import { createReducer } from "@reduxjs/toolkit";
import remeraMActions from "../actions/remeraMAction";

const { getRemeraM, getOneRemeraMId, deleteRemeraM, filtrarRemerasM } = remeraMActions

const initialState = {

  remerasM: [],
  remeraMencontrada:[],
  busqueda: '',
  ordenPrecio: 'asc',
};

const remeraMReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRemeraM.fulfilled, (state, action) => {
      console.log(action);
      return {
        ...state,
        remerasM: action.payload,

      };
    })
    .addCase(getOneRemeraMId.fulfilled, (state, action) => {
      return {
        ...state,
        remeraMencontrada: action.payload.remeraMencontrada,
      };
    })
    .addCase(deleteRemeraM.fulfilled, (state, action) => {
      return {
        ...state,
        remeraMId: action.payload.id
      }
    })
    .addCase(filtrarRemerasM.fulfilled, (state, action) => {
      //console.log("ACTION DE FILTRAR: ", action.payload);
      return {
          ...state,
          remerasM: action.payload.remerasM,
          busqueda: action.payload.busqueda,
          ordenPrecio: action.payload.ordenPrecio,
      }
    })
});


export default remeraMReducer;