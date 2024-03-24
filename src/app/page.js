import MainNav from "./components/MainNav/MainNav"
import RecipientsPage from "./recipient/page"

const HomePage = async () => {
  return (
    <div>
      <MainNav />
      <RecipientsPage />
    </div>
  )
}

export default HomePage
