import { createAsyncThunk } from "@reduxjs/toolkit";
import "regenerator-runtime";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  const result = await delay(1000, {
    data: data.id,
  });
  console.log(`checked! ID: ${data.id} PW: ${data.pw}`);
  return result;
});
