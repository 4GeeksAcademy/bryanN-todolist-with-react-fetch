import { useEffect } from "react";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask] = useState('')
	const [list, setList] = useState([])

	const getTask = (event) => {
		setTask(event.target.value);
	}
	const addtoList=(event)=>{
		if (event.key==='Enter') {
			if (task!=='') {
				setList([...list, task]);
				setTask('');				
			}
			
		}
	}

	return (
		<div>
			<div className="text-center d-flex justify-content-evenly align-items-center mt-4">
				<p className='p-4'>
					<img src={rigoImage} />
				</p>
				<div className="flex-fill p-4 fs-1">
					<label for="yourTask" className="form-label">What needs to be done?</label>
					<input type="text" className="form-control" id="yourTask" value={task} onKeyDown={addtoList} onChange={getTask} placeholder="Your tasks here"></input>
				</div>
			</div>
			<div className="card m-4 p-4" style={{ width: "18rem" }}>
				<ul className="list-group list-group-flush">
					{list.map((lis, index)=>(
						<li className="list-group-item" key={index}>
							<span>{lis}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;