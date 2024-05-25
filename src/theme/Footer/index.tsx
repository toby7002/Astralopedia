import React from "react";
import type { WrapperProps } from "@docusaurus/types";
import Footer from "@site/src/components/Footer";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
	return (
		<>
			<Footer />
		</>
	);
}
