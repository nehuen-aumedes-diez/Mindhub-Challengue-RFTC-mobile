import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getGorra = createAsyncThunk("getGorra", async () => {
  try {
    const res = await axios.get(`http://localhost:8000/api/gorra/`);

    return res.data.res;

  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});
const getOneGorraId = createAsyncThunk(
  "getOneGorraId",
  async (_id) => {
    let url = ` ${BASE_URL}/gorra/?_id=${_id}`;
    try {
      const res = await axios.get(url);
      console.log(res.data.res);
      return {
        gorraId: res.data.res,
      };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  }
);
const deleteGorra = createAsyncThunk("deleteGorra", async ({gorraId}) => {

  try {
    const res = await axios.delete(`http://localhost:8000/api/gorra/${gorraId}`);

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

const filtrarGorras = createAsyncThunk('filtrarGorras', async(data) => {
  let url = ` ${BASE_URL}/gorra?nombre=${data.nombre}&order=${data.order}`
  try{
      const res = await axios.get(url)
      return {
        gorras: res.data.res,
        busqueda: data.nombre,
        ordenPrecio: data.order,
      }
  } catch(error){
      console.log(error)
      return { payload: "error" }
  }
})

const gorraActions = {
  getGorra,
  getOneGorraId,
  deleteGorra,
  filtrarGorras
};

export default gorraActions;