import Header from "../components/Header"

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{ children }</main>
    </>
  )
}

export default DefaultLayout
