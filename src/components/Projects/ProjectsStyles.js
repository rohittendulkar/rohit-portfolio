import styled from "styled-components";

export const Img = styled.img`
	max-width: 500px;
	width: 100%;
	max-height: 200px;
	height: 100%;
	object-fit: cover;
	overflow: hidden;
`;

export const GridContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`;
export const BlogCard = styled.div`
	border-radius: 10px;
	box-shadow: 5px 5px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	width: 400px;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;
export const TitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
`;

export const HeaderThree = styled.h3`
	font-weight: 500;
	font-family: "Gemunu Libre", sans-serif;
	letter-spacing: 2px;
	color: #9cc9e3;
	padding: 0.5rem 0;
	font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
	width: 50px;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background: linear-gradient(90deg, #f12711, #f5af19); ;
`;

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #dce3e7;
	font-family: "Droid Serif", serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`;

export const CardInfo = styled.p`
	width: 100%;
	padding: 0 50px;
	color: #e4e6e7;
	font-style: 2rem;
	line-height: 24px;
	text-align: justify;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
	}
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-around;
	margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
	color: #d4c0c0;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background: #cb3066;
	border-radius: 15px;
	transition: 0.5s;
	&:hover {
		background: #a52753;
		box-shadow: 5px 5px 20px rgba(20, 184, 181, 0.5);
	}
`;

export const TagList = styled.ul`
	display: flex;
	justify-content: space-around;
	padding: 2rem;
`;
export const Tag = styled.li`
	color: #d8bfbf;
	font-size: 1.5rem;
`;
