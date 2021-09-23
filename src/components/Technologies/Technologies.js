import React from "react";
import { DiJava, DiMysql, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from "../../styles/GlobalComponents";
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
	<Section id="tech">
		<SectionDivider />
		<br />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I have worked with a range of technologies from backend to frontend to
			UI/UX Design
		</SectionText>
		<List>
			<ListItem>
				<DiReact size="3rem" />
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						HTML, CSS, JS, Angular.js, React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiJava size="3rem" />
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Java,Struts,Spring MVC,Spring Boot
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<DiMysql size="3rem" />
				<ListContainer>
					<ListTitle>Databases</ListTitle>
					<ListParagraph>
						Experience with <br />
						MySQL and MongoDb
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<FiFigma size="3rem" />
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						Tools like Figma and Axure RP
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider />
	</Section>
);

export default Technologies;
