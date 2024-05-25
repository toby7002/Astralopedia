import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Footer() {
	const {
		siteConfig: { customFields },
	} = useDocusaurusContext();
	return (
		<div className="w-full bg-[#0E1826]">
			<div className="p-10">
				<div className="gap-5 grid place-content-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 text-center">
					<div className=" hidden lg:grid grid-rows-5">
						<p className="text-gray-300">
							Astralopedia is{" "}
							<a href="https://github.com/Astralopedia/Astralopedia">
								open source
							</a>
						</p>
						<p>
							Astralopedia/astralopedia@
							<a
								href={`https://github.com/Astralopedia/Astralopedia/commit/${customFields.commit_ref}`}
							>
								{customFields.commit_ref as any}
							</a>
						</p>
					</div>
					<div className=" grid grid-rows-5">
						<p className="text-gray-100 font-bold uppercase">
							Resources
						</p>
						<a href="/docs" className="text-gray-300">
							Introduction
						</a>
						<a
							href="/docs/guides/InfiniteLiquid"
							className="text-gray-300"
						>
							Guides
						</a>
						<a
							href="/docs/chapters/ComingSoon"
							className="text-gray-300"
						>
							Chapters
						</a>
						<a
							href="/docs/planets/ComingSoon"
							className="text-gray-300"
						>
							Planets
						</a>
					</div>
					<div className=" grid grid-rows-5 grid-flow-col">
						<p className="text-gray-100 font-bold uppercase">
							Community
						</p>
						<a
							href="https://discord.gg/mNeHyuZdqm"
							className="text-gray-300"
						>
							Discord
						</a>
					</div>
					<div className="hidden sm:grid grid-rows-5">
						<p className="text-gray-100 font-bold uppercase">
							Project
						</p>
						<a href="" className="text-gray-300">
							Contributing
						</a>
						<a
							href="https://github.com/Astralopedia/Astralopedia/blob/main/LICENSE"
							className="text-gray-300"
						>
							License
						</a>
					</div>
					<div className="hidden lg:grid grid-rows-5">
						<button
							className="w-32 font-semibold h-10 bg-gray-800 text-gray-400 cursor-pointer border-none rounded-xl hover:opacity-90"
							onClick={() => {
								localStorage.removeItem("showAlertBox");
								window.location.reload();
							}}
						>
							<span className="i-fa6-solid-circle-exclamation mr-1"></span>
							<span>Show Popup</span>
						</button>
					</div>
				</div>
				<div className="my-5">
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
		</div>
	);
}
