import React from 'react'
import { MainLayout } from '../../src/components/layouts'
import { AppView } from '../../src/components/views'

const sidebarWidth = 250;

export const App = () => {
    return (
        <MainLayout>
          <AppView sidebarWidth={ sidebarWidth }>
            <h1>MainView</h1>
          </AppView>
    
        </MainLayout>
    
    
    
    )
}

