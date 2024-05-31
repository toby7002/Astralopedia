import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import '../css/Footer.css'
import { useAlertBoxStore } from '../pages'

export default function Footer() {
	const {
		siteConfig: { customFields },
	} = useDocusaurusContext()
	const { showAlert, setShowAlert } = useAlertBoxStore()

	return (
		<div className='w-full bg-[#0E1826] text-sm md:text-base'>
			<div className='p-10'>
				<div className='grid place-content-center grid-cols-3 lg:grid-cols-5 text-center'>
					<div className='grid place-items-center col-start-1 col-end-4 lg:col-start-1 lg:col-end-2 lg:grid-rows-5'>
						<img
							src={'/img/logo.webp'}
							alt='logo'
							width={160}
							className='py-2'
						/>
						<p className='text-gray-300'>
							Astralopedia is{' '}
							<a href='https://github.com/Astralopedia/Astralopedia'>
								open source
							</a>
						</p>
						<p>
							astralopedia/astralopedia@
							<a
								href={`https://github.com/Astralopedia/Astralopedia/commit/${customFields.commit_ref}`}>
								{customFields.commit_ref as any}
							</a>
						</p>
					</div>
					<div className='grid grid-cols-3 col-start-1 col-end-4 lg:col-start-2 lg:col-end-5'>
						<div className='grid grid-rows-5 gap-5'>
							<p className='text-gray-100 font-bold uppercase text-center'>
								Resources
							</p>
							<a
								href='/docs'
								className='text-gray-300'
								target='_blank'>
								Introduction
							</a>
							<a
								href='/docs/guides/InfiniteLiquid'
								className='text-gray-300'
								target='_blank'>
								Guides
							</a>
							<a
								href='/docs/chapters/ComingSoon'
								className='text-gray-300'
								target='_blank'>
								Chapters
							</a>
							<a
								href='/docs/planets/ComingSoon'
								className='text-gray-300'
								target='_blank'>
								Planets
							</a>
						</div>
						<div className='grid grid-rows-5 grid-flow-col'>
							<p className='text-gray-100 font-bold uppercase text-center'>
								Community
							</p>
							<a
								href='https://discord.gg/mNeHyuZdqm'
								className='text-gray-300'
								target='_blank'>
								Discord
							</a>
							<a
								href='https://open.spotify.com/album/5z6NRIdWGJ6tpRC36mrxx3'
								className='text-gray-300'
								target='_blank'>
								Spotify
							</a>
							<a
								href='https://www.curseforge.com/minecraft/modpacks/create-astral'
								className='text-gray-300'
								target='_blank'>
								CurseForge
							</a>
						</div>
						<div className='grid grid-rows-5'>
							<p className='text-gray-100 font-bold uppercase text-center'>
								Project
							</p>
							<a
								href='https://github.com/Astralopedia/Astralopedia/blob/main/CONTRIBUTING.md'
								className='text-gray-300'
								target='_blank'>
								Contributing
							</a>
							<a
								href='https://github.com/Astralopedia/Astralopedia/blob/main/LICENSE'
								className='text-gray-300'
								target='_blank'>
								License
							</a>
						</div>
					</div>
					<div className='grid col-start-1 col-end-4 place-content-center lg:col-start-5 lg:col-end-6 lg:grid-rows-5'>
						<label className='inline-flex h-auto items-center cursor-pointer'>
							<input
								type='checkbox'
								value=''
								className='sr-only peer'
								checked={showAlert}
								onChange={e => {
									setShowAlert(e.target.checked)
									localStorage.setItem(
										'showAlertBox',
										e.target.checked.toString(),
									)
								}}
							/>
							<div className="relative w-11 h-6 peer-focus:outline-none rounded-full peer bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ad54eb]"></div>
							<span className='ms-3 text-sm text-gray-400'>
								Show Popup
							</span>
						</label>
					</div>
				</div>
				<div className='pt-5'>
					<p className='text-center'>
						Site developed with{' '}
						<span className='i-fa6-solid-heart text-xl text-red-500'></span>{' '}
						by{' '}
						<a
							className='hover:underline'
							href={'https://toby7002.dev/'}
							target='_blank'>
							toby7002
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}
