import authReducer from "../slices/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";

const configuredStore = configureStore({ reducer: authReducer });

export default configuredStore;
