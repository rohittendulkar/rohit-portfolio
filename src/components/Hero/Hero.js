import React from "react";

import {
	Section,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
	<Section row nopadding>
		<LeftSection>
			<SectionTitle main center>
				Welcome To <br />
				My Personal Portfolio
			</SectionTitle>
			<SectionText>I can build full stack web applications.</SectionText>
			<Button
				onClick={() =>
					(window.location = "https://www.linkedin.com/in/rohitten/")
				}
			>
				Learn More
			</Button>
		</LeftSection>
	</Section>
);

export default Hero;
