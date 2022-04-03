import Header from './Header/Header'

const MainLayout = ({children}) => {
  return(
    <>
      <Header />
      {
        children
      }
    </>
  )
}

export default MainLayout