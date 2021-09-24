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
				Hello World. <br />I am Rohit Tendulkar
			</SectionTitle>
			<SectionText>
				I am a full stack web developer, who has experience building robust and
				responsive applications.
			</SectionText>
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
