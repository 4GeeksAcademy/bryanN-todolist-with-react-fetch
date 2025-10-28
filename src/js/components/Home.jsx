import { useEffect } from "react";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [task, setTask] = useState('')
	const [list, setList] = useState([])
	const API_URL = 'https://playground.4geeks.com/todo/'

	const addtoList = (event) => {
		if (event.key === 'Enter') {
			if (task !== '') {
				setList([...list, task]);
				setTask('');
			}

		}
	}

	const deleteTask = (tasktodelete) => {
		setList(list.filter((_, i) => i !== tasktodelete))
	}
	const tasksCounter = () => {
		if (list.length === 0) {
			return ('No Tasks')
		} else if (list.length === 1) {
			return ('1 Task')
		} return (list.length + ' Tasks')
	}

	const createUser = async()=>{
		try {
			const response = await fetch(API + 'users/bruyi',{
				method: 'POST',
			})
		} catch (error) {
			
		}
	}





	return (
		<div>
			<div className="text-center d-flex justify-content-evenly align-items-center mt-4">
				<p className='p-4'>
					<img src={rigoImage} />
				</p>
				<div className="flex-fill p-4 fs-1">
					<label htmlFor="yourTask" className="form-label">What needs to be done?</label>
					<input type="text" className="form-control" id="yourTask" value={task} onKeyDown={addtoList} onChange={(e)=>setTask(e.target.value)} placeholder="Your tasks here"></input>
				</div>
			</div>
			<div className="card m-4" style={{ width: "18rem" }}>
				<ul className="list-group list-group-flush">
					{list.map((lis, index) => (
						<li className="list-group-item d-flex justify-content-between hide-button" key={index}>
							<span>{lis}</span>
							<button type="button" className="btn-close close-button" onClick={() => deleteTask(index)} aria-label="Close"></button>
						</li>
					))}
				</ul>
				<div className="ms-3 d-flex align-items-center justify-content-between">
					<div>{tasksCounter()}</div>
					<button type="button" onClick={() => setList([])} className="btn btn-outline-warning">Clear Tasks</button>
				</div>
			</div>
		</div>
	);
};

export default Home;