import React from "react";
import "./homepage.css";
import autumn from "./img/prenter_down_low_514128.jpg";

const Homepage = () => {
	return (
			<div className={"homepage"}>
				<h1>Autumn</h1>
				<div className={"homepage-picture"}>
					<img src={autumn} width={"600px"} alt="autumn" />
				</div>
				<div className={"homepage-text"}>
					“Go, sit upon the lofty hill, And turn your eyes around,
					Where waving woods and waters wild Do hymn an autumn sound.
					The summer sun is faint on them — The summer flowers depart —
					Sit still — as all transform’d to stone, Except your musing heart.”
					—Elizabeth Barrett Browning, The Autumn.
				</div>
			</div>
	);
};

export default Homepage;
