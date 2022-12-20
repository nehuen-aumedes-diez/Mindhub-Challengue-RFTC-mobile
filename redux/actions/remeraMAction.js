import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getRemeraM = createAsyncThunk("getRemeraM", async () => {
  try {
    const res = await axios.get(`${BASE_URL}/remeraM/`);

    return res.data.res;

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getOneRemeraMId = createAsyncThunk(
  "getOneRemeraMId",
  async (_id) => {
    let url = ` ${BASE_URL}/remeraM/?_id=${_id}`;
    try {
      const res = await axios.get(url);
      console.log(res.data.res);
      return {
        remeraMencontrada: res.data.res,
      };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);
const deleteRemeraM = createAsyncThunk("deleteRemeraM", async ({remeraMId}) => {

  try {
    const res = await axios.delete(`http://localhost:8000/api/remeraM/${remeraMId}`);

    return {
      success: true,
      response: res.data.message,
    };

  } catch (error) {
    console.log(error);
    
    return {
      payload: "Error",
    };
  }
});

const filtrarRemerasM = createAsyncThunk('filtrarRemerasM', async(data) => {
  let url = ` ${BASE_URL}/remeraM?nombre=${data.nombre}&order=${data.order}`
  try{
      const res = await axios.get(url)
      return {
        remerasM: res.data.res,
        busqueda: data.nombre,
        ordenPrecio: data.order,
      }
  } catch(error){
      console.log(error)
      return { payload: "error" }
  }
})

const remeraMActions = {
  getRemeraM,
  getOneRemeraMId,
  deleteRemeraM,
  filtrarRemerasM
};

export default remeraMActions;