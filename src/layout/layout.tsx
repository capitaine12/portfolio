import Navbar from "../components/layout/Navbar"

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      
     <Navbar />

      {/* Contenu principal */}
      <main className="app-content">
        {children}
      </main>

    </>
  )
}

export default MainLayout
