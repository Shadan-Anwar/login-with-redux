import { configureStore } from "@reduxjs/toolkit";

import userSlice from './slice/login.js'

export const store = configureStore(
    {
        reducer:
        {
            userSlice,
        }


    }
)