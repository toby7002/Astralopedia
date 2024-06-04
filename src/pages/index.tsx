import { atom } from 'jotai'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Topics from '../components/Topics'
import Alert from '../components/ui/Alert'

export const alertBoxAtom = atom(false)

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
