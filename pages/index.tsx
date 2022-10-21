import type { NextPage } from 'next'
import { AppLayout } from '../src/components/layouts'
import { TestView } from '../src/components/views'

export const sidebarWidth = [ 200, 250 ];
export const appbarMarginTop = 30;

const Home: NextPage = () => {
  return (
    <AppLayout sidebarWidth={ sidebarWidth } appbarMarginTop={appbarMarginTop} >

      {/* // TODO: cambar luego appView por ruta de pagina de inicio*/}
      <TestView />
      
    </AppLayout>



  )
}

export default Home;
