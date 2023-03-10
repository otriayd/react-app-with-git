import { Aside } from '../../components/Aside'
import { Main } from '../../components/Main'
import { Footer } from '../../components/Footer'
import { HeaderContainer } from '../../components/Header/HeaderContainer'

export const MainLayout = () => {
	return (
		<>
			<HeaderContainer />
			<Aside />
			<Main />
			<Footer />
		</>
	)
}