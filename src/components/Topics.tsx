import astronaut_with_human from '../assets/img/astronaut_and_rocket.gif'
import portal from '../assets/img/portal.gif'
import telescope from '../assets/img/telescope.webp'
import { PinContainer } from './ui/PinContainer'

export default function Topics() {
	return (
		<>
			<h1 className='text-3xl sm:text-5xl text-center text-white font-semibold mt-12'>
				Topics
			</h1>
			<div className='grid my-24 grid-cols-1 gap-8 lg:grid-cols-3'>
				<PinContainer title='Guides' href='docs/guides/InfiniteLiquid'>
					<div className='flex basis-full flex-col p-4  sm:basis-1/2 w-[20rem] h-[20rem] '>
						<img src={telescope} alt='icon' loading="lazy" />
					</div>
				</PinContainer>
				<PinContainer title='Chapters' href='docs/chapters/ComingSoon'>
					<div className='flex basis-full flex-col p-4 sm:basis-1/2 w-[20rem] h-[20rem] '>
						<img src={astronaut_with_human} alt='icon' loading="lazy" />
					</div>
				</PinContainer>
				<PinContainer title='Planets' href='docs/planets/ComingSoon'>
					<div className='flex basis-full flex-col p-4 sm:basis-1/2 w-[20rem] h-[20rem] '>
						<img src={portal} alt='icon' loading="lazy" />
					</div>
				</PinContainer>
			</div>
		</>
	)
}
