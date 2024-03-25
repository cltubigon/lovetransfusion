import MainNav from "./components/MainNav/MainNav"
import RecipientsPage from "./recipients/page"

const HomePage = async () => {
  return (
    <div>
      <MainNav />
      <RecipientsPage />
    </div>
  )
}

export default HomePage
