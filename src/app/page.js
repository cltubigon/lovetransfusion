import MainNav from "./components/MainNav/MainNav"
import RecipientsPage from "./recipients/page"

export const revalidate = 5

const HomePage = async () => {
  return (
    <div>
      <MainNav />
      <RecipientsPage />
    </div>
  )
}

export default HomePage
