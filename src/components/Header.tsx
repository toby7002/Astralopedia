import { Vortex } from './ui/Vortex'

export default function Header() {
	return (
		<div className='w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden'>
			<Vortex
				backgroundColor='transparent'
				rangeY={800}
				particleCount={32}
				baseHue={200}
				className='flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full'>
				<img src='/img/logo.webp' width='719' height='94' />
				<p className='text-white text-xl sm:text-3xl max-w-2xl mt-6 text-center'>
					A guide and information database for the Create: Astral
					modpack for Minecraft, written and maintained by the
					players.
				</p>
				<div className='flex items-center mt-6'>
					<a href='docs' className='h-12 w-36'>
						<span className='hover:brightness-110 duration-300 hover:scale-105 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#c382f0] text-lg font-medium text-white'>
							<span className='i-fa6-solid-rocket m-2'></span>
							Explore
						</span>
					</a>
				</div>
			</Vortex>
		</div>
	)
}
