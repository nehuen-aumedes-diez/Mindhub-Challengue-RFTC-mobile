import buzoReducer from "./buzoReducer";
import gorraReducer from "./gorraReducer";
import remeraMReducer from "./remeraMReducer";
import remeraFReducer from "./remeraFReducer";
import userReducer from "./userReducer";

const rootReducer = {
 
  buzos: buzoReducer,
  gorras: gorraReducer,
  remerasM: remeraMReducer,
  remerasF: remeraFReducer,
  userReducer

};

export default rootReducer 
