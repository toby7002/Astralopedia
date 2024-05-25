import React, { useState } from "react";
import { useDocsSidebar } from "@docusaurus/theme-common/internal";
import BackToTopButton from "@theme/BackToTopButton";
import DocRootLayoutSidebar from "@theme/DocRoot/Layout/Sidebar";
import DocRootLayoutMain from "@theme/DocRoot/Layout/Main";
import type { Props } from "@theme/DocRoot/Layout";

import styles from "./styles.module.css";
import clsx from "clsx";

export default function DocRootLayout({ children }: Props): JSX.Element {
	const sidebar = useDocsSidebar();
	const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false);
	return (
		<div className={clsx(styles.docsWrapper, "#bg-[#0E1826]")}>
			<BackToTopButton />
			<div className={styles.docRoot}>
				{sidebar && (
					<DocRootLayoutSidebar
						sidebar={sidebar.items}
						hiddenSidebarContainer={hiddenSidebarContainer}
						setHiddenSidebarContainer={setHiddenSidebarContainer}
					/>
				)}
				<DocRootLayoutMain
					hiddenSidebarContainer={hiddenSidebarContainer}
				>
					{children}
				</DocRootLayoutMain>
			</div>
		</div>
	);
}
