import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href="tel:1234567890">1234567890</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:vrekedit00@gmail.com">
						vrekedit00@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Leveling up, squashing one bug at a time.</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/rohittendulkar">
						<AiFillGithub />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/rohitten/">
						<AiFillLinkedin />
					</SocialIcons>
					<SocialIcons href="https://www.instagram.com/antisoc.rex/">
						<AiFillInstagram />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
