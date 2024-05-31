import { create } from 'zustand'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Topics from '../components/Topics'
import Alert from '../components/ui/Alert'

interface AlertBoxState {
	showAlert: boolean
	setShowAlert: (showAlert: boolean) => void
}

export const useAlertBoxStore = create<AlertBoxState>()(set => ({
	showAlert: false,
	setShowAlert: (showAlert: boolean) => set({ showAlert }),
}))

export default function Home() {
	return (
		<>
			<Alert />
			<div className='bg z-0 overflow-x-hidden'>
				<Header />
				<Topics />
				<Footer />
			</div>
		</>
	)
}
