import { NextPage } from 'next';

import { AppLayout } from '../../src/components/layouts'
import { TestView } from '../../src/components/views'

export const sidebarWidth = [ 200, 250 ];
export const appbarMarginTop = 15;

const App: NextPage = () => {
    return (
        <AppLayout sidebarWidth={ sidebarWidth } appbarMarginTop={appbarMarginTop} >
          
          <TestView />
    
        </AppLayout>
    )
}

export default App;
