import { createSlice } from '@reduxjs/toolkit';
import { UIState } from '../../interfaces/uiDisplay';


const initialState: UIState = {
    showSidebar: true,
    showNavbar: true,
    displaySize: 'sm',
    drawerVariant: 'temporary',
    themeMode: 'light',
}


export const uiSlice = createSlice({
    name: 'ui',
    initialState,

    reducers: {
        onDisplayBreakpoint: ( state, action ) => {
            state.displaySize = action.payload.currentDisplayBreakPoint;
            state.drawerVariant = action.payload.drawerVariant
        },
        onToggleSidbar: (state, /* action */ ) => {
            state.showSidebar = !state.showSidebar;
        },
        onToggleThemeMode: ( state, action ) => {
            state.themeMode = action.payload;
        },
        onScrollYMoves: ( state, action ) => {
            state.showNavbar = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { onToggleSidbar, onDisplayBreakpoint, onToggleThemeMode, onScrollYMoves } = uiSlice.actions;