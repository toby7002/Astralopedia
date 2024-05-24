import { PinContainer } from "../components/ui/PinContainer";
import { Vortex } from "../components/ui/Vortex";

import telescope from "../assets/img/telescope.webp";
import portal from "../assets/img/portal.gif";
import astronaut_with_human from "../assets/img/astronaut_and_rocket.gif";
import Alert from "../components/ui/Alert";

export default function Home() {
	return (
		<>
			<Alert />
			<div className="bg z-0 overflow-x-hidden">
				<div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
					<Vortex
						backgroundColor="transparent"
						rangeY={800}
						particleCount={25}
						baseHue={200}
						className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
					>
						<h2 className="text-white text-6xl md:text-7xl font-semibold text-center">
							Astralopedia
						</h2>
						<p className="text-white text-2xl max-w-xl mt-6 text-center">
							A guide and information database for the Create:
							Astral modpack for Minecraft, written and maintained
							by the players.
						</p>
						<div className="flex items-center mt-6">
							<a
								href="docs/intro"
								className="h-12 w-36 overflow-hidden"
							>
								<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#c382f0] text-lg font-medium text-white">
									<span className="i-fa6-solid-rocket m-2"></span>
									Explore
								</span>
							</a>
						</div>
					</Vortex>
				</div>
				<h1 className="text-4xl text-center text-white font-semibold mb-24">
					Topics
				</h1>
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<PinContainer
						title="Guides"
						href="docs/guides/InfiniteLiquid"
					>
						<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
							<img src={telescope} alt="icon" />
						</div>
					</PinContainer>
					<PinContainer
						title="Chapters"
						href="docs/chapters/ComingSoon"
					>
						<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
							<img src={astronaut_with_human} alt="icon" />
						</div>
					</PinContainer>
					<PinContainer
						title="Planets"
						href="docs/planets/ComingSoon"
					>
						<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
							<img src={portal} alt="icon" />
						</div>
					</PinContainer>
				</div>
				<div className=" text-white py-12">
					<p className="text-center">
						Site developed with{" "}
						<span className="i-fa6-solid-heart text-xl text-red-500"></span>{" "}
						by{" "}
						<a
							className="hover:underline"
							href={"https://toby7002.dev/"}
							target="_blank"
						>
							toby7002
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
