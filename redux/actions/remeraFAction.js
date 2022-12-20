import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getRemeraF = createAsyncThunk("getRemeraF", async () => {
  try {
    const res = await axios.get(`${BASE_URL}/remeraF/`);

    return res.data.res;

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getOneRemeraFId = createAsyncThunk(
  "getOneRemeraFId",
  async (_id) => {
    let url = ` ${BASE_URL}/remeraF/?_id=${_id}`;
    try {
      const res = await axios.get(url);
      //console.log(res.data.res);
      return {
        remeraFencontrada: res.data.res,
      };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);
const deleteRemeraF = createAsyncThunk("deleteRemeraF", async ({remeraFId}) => {

  try {
    const res = await axios.delete(`http://localhost:8000/api/remeraF/${remeraFId}`);

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

const filtrarRemerasF = createAsyncThunk('filtrarRemerasF', async(data) => {
  let url = ` ${BASE_URL}/remeraF?nombre=${data.nombre}&order=${data.order}`
  try{
      const res = await axios.get(url)
      //console.log("res", res);
      //console.log("FILTRAR REMERAS ACTION",res.data);
      //console.log("data: ",data);
      return {
        remerasF: res.data.res,
        busqueda: data.nombre,
        ordenPrecio: data.order,
      }
  } catch(error){
      console.log(error)
      return { payload: "error" }
  }
})

const remeraFActions = {
  getRemeraF,
  getOneRemeraFId,
  deleteRemeraF,
  filtrarRemerasF
};

export default remeraFActions;