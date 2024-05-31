import { useDocsSidebar } from '@docusaurus/theme-common/internal'
import BackToTopButton from '@theme/BackToTopButton'
import type { Props } from '@theme/DocRoot/Layout'
import DocRootLayoutMain from '@theme/DocRoot/Layout/Main'
import DocRootLayoutSidebar from '@theme/DocRoot/Layout/Sidebar'
import { useState } from 'react'

import Alert from '@site/src/components/ui/Alert'
import clsx from 'clsx'
import styles from './styles.module.css'

export default function DocRootLayout({ children }: Props): JSX.Element {
	const sidebar = useDocsSidebar()
	const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false)
	return (
		<div className={clsx(styles.docsWrapper, 'bg-[#0E1826]')}>
			<Alert />
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
					hiddenSidebarContainer={hiddenSidebarContainer}>
					{children}
				</DocRootLayoutMain>
			</div>
		</div>
	)
}
