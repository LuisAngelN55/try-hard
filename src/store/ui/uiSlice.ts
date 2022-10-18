import { createSlice } from '@reduxjs/toolkit';
import { displayBreakPoint, drawerVariantType } from '../../interfaces/uiDisplay';


export interface UIState {
    showSidebar: boolean,
    showNavbar: boolean,
    displaySize: displayBreakPoint,
    drawerVariant: drawerVariantType
}  

const initialState: UIState = {
showSidebar: true,
showNavbar: true,
displaySize: 'sm',
drawerVariant: 'temporary'
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
    }
});


// Action creators are generated for each case reducer function
export const { onToggleSidbar, onDisplayBreakpoint } = uiSlice.actions;