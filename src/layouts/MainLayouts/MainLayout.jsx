import { Header } from '../../components/Header'
import { Aside } from '../../components/Aside'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'

export const MainLayout = () => {
	return (
		<>
			<Header />
			<Aside />
			<Main />
			<Footer />
		</>
	)
}