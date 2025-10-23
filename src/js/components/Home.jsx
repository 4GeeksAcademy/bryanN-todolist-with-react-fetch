import { useEffect } from "react";
import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask] = ('')
	const [list, setList] = ([])


	return (
		<div className="text-center d-flex justify-content-evenly align-items-center mt-4">           
			<p className='p-4'>
				<img src={rigoImage} />
			</p>
			<div className="flex-fill p-4 fs-1">
				<label for="yourTask" className="form-label">What needs to be done?</label>
				<input type="text" className="form-control" id="yourTask" placeholder="Your tasks here"></input>
			</div>
		</div>
	);
};

export default Home;