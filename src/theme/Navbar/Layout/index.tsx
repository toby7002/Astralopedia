import React, { useEffect, useState, type ComponentProps } from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
	useHideableNavbar,
	useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import type { Props } from "@theme/Navbar/Layout";

import styles from "./styles.module.css";

function NavbarBackdrop(props: ComponentProps<"div">) {
	return (
		<div
			role="presentation"
			{...props}
			className={clsx("navbar-sidebar__backdrop", props.className)}
		/>
	);
}

export default function NavbarLayout({ children }: Props): JSX.Element {
	const {
		navbar: { hideOnScroll, style },
	} = useThemeConfig();
	const mobileSidebar = useNavbarMobileSidebar();
	const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
	const [isScroll, setScroll] = useState<boolean>(false);

	useEffect(() => {
		addEventListener("scroll", () => {
			if (typeof window !== undefined && window.scrollY > 1) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		});
	}, []);

	return (
		<nav
			ref={navbarRef}
			aria-label={translate({
				id: "theme.NavBar.navAriaLabel",
				message: "Main",
				description: "The ARIA label for the main navigation",
			})}
			className={clsx(
				"navbar",
				"navbar--fixed-top",
				hideOnScroll && [
					styles.navbarHideable,
					!isNavbarVisible && styles.navbarHidden,
				],
				{
					"navbar--dark": style === "dark",
					"navbar--primary": style === "primary",
					"navbar-sidebar--show": mobileSidebar.shown,
				},
				isScroll ? "bg-[#0e1826bf] backdrop-blur" : "bg-[#0E1826]",
			)}
			style={isScroll ? { borderBottom: "1px solid #334155" } : {}}
		>
			{children}
			<NavbarBackdrop onClick={mobileSidebar.toggle} />
			<NavbarMobileSidebar />
		</nav>
	);
}
