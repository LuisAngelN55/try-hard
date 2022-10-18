import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        showSidebar: true,
        showNavbar: true,

    },
    reducers: {
        toogleSidbar: (state, /* action */ ) => {
            state.showSidebar = !state.showSidebar;
        },
    }
});


// Action creators are generated for each case reducer function
export const { toogleSidbar } = uiSlice.actions;