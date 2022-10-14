import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showSidebar: true,
        showNavbar: true,

    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.showSidebar = true;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = uiSlice.actions;