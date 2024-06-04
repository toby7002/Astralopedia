import { alertBoxAtom } from '@site/src/pages'
import cn from '@site/src/utils/cn'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

export default function Alert() {
	const [showAlert, setShowAlert] = useAtom(alertBoxAtom)

	useEffect(() => {
		setShowAlert(localStorage.getItem('showAlertBox') !== 'false')
	}, [])

	return (
		<div
			className={cn(
				'fixed top-1/2 left-1/2 z-[1] w-3/4 md:w-1/2 border-white border-solid border-2 rounded-2xl',
				showAlert ? 'block' : 'hidden',
			)}
			style={{ transform: 'translate(-50%, -50%)' }}>
			<div className='w-full'>
				<div className='absolute inset-0 h-full w-full bg-gradient-to-r from-[#0E1826] to-[#0E1826] transform scale-[0.90] blur-3xl' />
				<div className='relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start'>
					<h1 className='font-semibold text-xl text-white mb-4 relative z-50'>
						Hi Astral,
					</h1>

					<p className='font-normal text-base text-slate-300 mb-4 relative z-50'>
						Welcome to Astralopedia, this is an unofficial Create:
						Astral wiki, maintained and developed by toby7002. The
						main difference between Astralopedia and the{' '}
						<a href='https://createastral.wiki.gg/wiki/Create_Astral_Wiki'>
							official wiki
						</a>{' '}
						is their UI/UX. If you want a modern UI, Astralopedia
						for you. The official wiki is for you if you are a
						person who like the wiki style.
					</p>

					<div className='flex gap-3 flex-col sm:flex-row w-full'>
						{' '}
						<button
							onClick={() => {
								setShowAlert(false)
							}}
							className='text-white border px-4 py-1 text-md font-semibold rounded-lg cursor-pointer hover:bg-[#c382f0] bg-[#ad54eb] duration-200 border-none w-full sm:w-auto h-8 z-[1]'>
							Close
						</button>
						<button
							onClick={() => {
								localStorage.setItem('showAlertBox', 'false')
								setShowAlert(false)
							}}
							className='text-white border px-4 py-1 text-md font-semibold rounded-lg cursor-pointer hover:bg-red-500 bg-red-600 duration-200 border-none sm:w-auto w-full h-8 z-[1]'>
							Don't show anymore
						</button>
					</div>
					<Meteors number={28} />
				</div>
			</div>
		</div>
	)
}

const Meteors = ({
	number,
	className,
}: {
	number?: number
	className?: string
}) => {
	const meteors = new Array(number || 20).fill(true)
	return (
		<>
			{meteors.map((el, idx) => (
				<span
					key={'meteor' + idx}
					className={cn(
						'animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]',
						"before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
						className,
					)}
					style={{
						top: 0,
						left:
							Math.floor(Math.random() * (400 - -400) + -400) +
							'px',
						animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
						animationDuration:
							Math.floor(Math.random() * (10 - 2) + 2) + 's',
					}}></span>
			))}
		</>
	)
}
