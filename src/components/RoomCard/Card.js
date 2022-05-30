import styled from "styled-components";

const Card = ({ roomNo, occupantName, rentDueDate, coverImg }) => {
	return (
		<Wrapper coverImg={coverImg}>
			<div className="bg" />
			<div className="body">
				<h4>Room No: {roomNo}</h4>
				<footer>
					<p>Occupant: {occupantName}</p>
					<p>Rent Due Date: {rentDueDate}</p>
				</footer>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	border-radius: 7px;	
	box-shadow: -2px 7px 8px 3px rgba(204, 204, 204, 0.63);
	width: 15rem;
	

	& > .bg {
		background: url(${(props) => props.coverImg}) no-repeat center center/cover;
		height: 10rem;
	}


	h4 {
			text-align: center;
		}

	& .body {
		flex-direction: column;
		align-items: center;
		padding: 0.5rem 0 1rem;
		display: flex;



		footer {
			margin-top: 0.7rem;

			& p {
				font-size: 0.9rem;
			}
		}
	}
`;

export default Card;
