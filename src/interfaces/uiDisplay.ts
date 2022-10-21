export interface UIState {
    showSidebar: boolean,
    showNavbar: boolean,
    displaySize: displayBreakPoint,
    drawerVariant: drawerVariantType,
    themeMode: themeType,
}

export type themeType = 'light' | 'dark';

export type displayBreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type drawerVariantType = 'permanent' | 'persistent' | 'temporary';