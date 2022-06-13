import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const mainReducer = createSlice({
    name: "Main",
    initialState: [] as string[],
    reducers: {
        addName: (state, action: PayloadAction<string>) => {
            state.push(action.payload);
        },
    },
});

export const MainReducer = mainReducer.reducer;
export const MainAction = mainReducer.actions;
