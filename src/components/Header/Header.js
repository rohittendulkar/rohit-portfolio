import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { RiSkullLine } from "react-icons/ri";

import {
	Container,
	Div1,
	Div2,
	Div3,
	NavLink,
	SocialIcons,
	Span,
} from "./HeaderStyles";

import Headroom from "react-headroom";

const Header = () => (
	<Headroom
		style={{
			webkitTransition: "all .5s ease-in-out",
			mozTransition: "all .5s ease-in-out",
			oTransition: "all .5s ease-in-out",
			transition: "all .5s ease-in-out",
			background: "rgba(14, 124, 123, 0.48)",
		}}
	>
		<Container>
			<Div1>
				<Link href="/">
					<a
						style={{
							display: "flex",
							alignItems: "center",
							color: "white",
							marginBottom: "20px",
						}}
					>
						<RiSkullLine size="3rem" /> &nbsp;<Span>Rohit Tendulkar</Span>
					</a>
				</Link>
			</Div1>
			<Div2>
				<li>
					<Link href="#projects">
						<NavLink>Projects</NavLink>
					</Link>
				</li>
				<li>
					<Link href="#tech">
						<NavLink>Technologies</NavLink>
					</Link>
				</li>
				<li>
					<Link href="#about">
						<NavLink>About</NavLink>
					</Link>
				</li>
			</Div2>
			<Div3>
				<SocialIcons href="https://github.com/rohittendulkar">
					<AiFillGithub />
				</SocialIcons>
				<SocialIcons href="https://www.linkedin.com/in/rohitten/">
					<AiFillLinkedin />
				</SocialIcons>
				<SocialIcons href="https://www.instagram.com/antisoc.rex/">
					<AiFillInstagram />
				</SocialIcons>
			</Div3>
		</Container>
	</Headroom>
);

export default Header;
