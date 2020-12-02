import styled from 'styled-components';

export const DivHeader = styled.div`
	max-width: 1280px;
	width: 100%;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 5rem;
	border-bottom: 1px solid #ccc;
	margin: 0 auto;

	.div-link-home {
		margin-left: -25rem;	
		
		.NavLink-home-header {
			text-decoration: none;
			font-family: Arial, Helvetica, sans-serif;
			font-style: italic;
			font-size: 18px;
			font-weight: bold;
			color: #666;
		}
	}

	.div-links-header {
		width: 35%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		text-decoration: none;
		font-family: Arial, Helvetica, sans-serif;
		font-style: italic;
		font-size: 18px;
		font-weight: bold;
		color: #ccc;

		.NavLink-1-header {
			text-decoration: none;
			color: #666;
		}

		.NavLink-2-header {
			width: 6rem;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			text-decoration: none;
			color: #666;
			cursor: pointer;
		}
	}

	.div-title-header {
		width: 100px;
		/* height: 60px; */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h1 {
			font-family: Arial, Helvetica, sans-serif;
			font-style: italic;
			font-size: 40px;
			font-weight: bold;
			color: #666;
			margin-top: 15px;
			margin-bottom: 3px;
		}

		.border-bottom-title{
			width: 6rem;
			height: 6px;
			border-radius: 10px;
			background: #C3CF32;
		}
	}
`;