import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Close } from "../Icons";
import './styles.css';

const NavBar: React.FunctionComponent  = () => {
	const [query, setQuery] = useState('')
	let navigate = useNavigate()
	useEffect(() => {
		if(query === '') {
			navigate('/')
		} else {
			navigate(`/search/${query}`)
		}
	}, [query, navigate])

	const handler = async (e : any) => {
	   setQuery(() => e.target.value.toLowerCase())
	}
	console.log("NAVBAR RENDERED");
	
	return (
			<nav className="nav">
				<div className="search">
					<input type="text" value={query} placeholder="search" onChange={handler}/>
					{query ? <span onClick={() => setQuery('')}><Close /></span>: ""}
				</div>
			</nav>
	);
};

export default NavBar;