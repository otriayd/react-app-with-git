import styles from './App.module.scss'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayouts'
import { DialogsPage } from '../pages/DialogsPage'
import { FrontPage } from '../pages/FrontPage'
import { ProfilePage } from '../pages/ProfilePage'
import UsersPage from '../pages/UsersPage'
import { LoginPage } from '../pages/LoginPage'


export const App = () => {

	return (
		<div className={styles.app}>
			<Routes>
				<Route path={'/'} element={<MainLayout />}>
					<Route index element={<FrontPage />} />
					<Route path={'users'} element={<UsersPage />} />
					<Route path={'profile'} element={<ProfilePage />} />
					<Route path={'profile/:id'} element={<ProfilePage />} />
					<Route path={'dialogs'} element={<DialogsPage />} />
					<Route path={'login'} element={<LoginPage />} />
				</Route>
			</Routes>

		</div>
	)
}


