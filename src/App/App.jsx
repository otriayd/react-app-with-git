import styles from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayouts'
import { DialogsPage } from '../pages/DialogsPage'
import { FrontPage } from '../pages/FrontPage'
import UsersPage from '../pages/UsersPage'
import { LoginPageContainer } from '../pages/LoginPage'
import { ProfilePageContainer } from '../pages/ProfilePage/ProfilePageContainer'


export const App = () => {

	return (
		<div className={styles.app}>
			<Routes>
				<Route path={'/'} element={<MainLayout />}>
					<Route index element={<FrontPage />} />
					<Route path={'users'} element={<UsersPage />} />
					<Route path={'profile'} element={<ProfilePageContainer />} />
					<Route path={'profile/:id'} element={<ProfilePageContainer />} />
					<Route path={'dialogs'} element={<DialogsPage />} />
					<Route path={'login'} element={<LoginPageContainer />} />
				</Route>
			</Routes>

		</div>
	)
}


