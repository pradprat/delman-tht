import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const mainReducer = createSlice({
    name: "Main",
    initialState: {
        isOpenSidebar: true,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isOpenSidebar = !state.isOpenSidebar;
        },
    },
});

export const MainReducer = mainReducer.reducer;
export const MainAction = mainReducer.actions;
