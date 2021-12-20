import React, { useEffect, useState, useContext, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import globalContext from "../globalState";
import { Close, Reload, Sort } from "../Icons";
import './styles.css';

const NavBar: React.FunctionComponent = () => {
	const { dispatch } = useContext(globalContext)
	const [query, setQuery] = useState('')
	let navigate = useNavigate()
	useEffect(() => {
		if (query === '') {
			navigate('/')
		} else {
			navigate(`/search/${query}`)
		}
	}, [query, navigate])

	const handler = async (e: any) => {
		setQuery(() => e.target.value.toLowerCase())
	}

	const reloadNotes = () => {
		dispatch({type: "DELETE_NOTES"})
		const local: any = localStorage.getItem("sort")
		const sort =JSON.parse(local)
		fetch(`${process.env.REACT_APP_API_DOMAIN}get_notes.php?sortby=${sort["sortby"]}&orderby=${sort["orderby"]}`).then(res => {
			return res.json()
		}).then(data => {
			dispatch({ type: "LOAD_NOTES", notes: data })
		}
		)
	}


	console.log("NAVBAR RENDERED");

	return (
		<nav className="nav">
			<div className="main">
				<div className="search">
					<input type="text" value={query} placeholder="search" onChange={handler} />
					{query ? <span onClick={() => setQuery('')}><Close /></span> : ""}
				</div>
			</div>
			<div className="btns">
				<div className="reload" onClick={reloadNotes}>
					<p>refresh</p>
					 <Reload />
				</div>
				<div className="sort">
					<p>sort</p>
					 <Sort />
					<DropDown />
				</div>
			</div>
		</nav>
	);
};




const DropDown = () => {
	const { dispatch } = useContext(globalContext)
	const local: any = localStorage.getItem("sort")
	const data = local ? JSON.parse(local) : { sortby: "dateCreated", orderby: "DESC" }
	const [sort, setSort] = useState<any>(data);
	const dropDown = useRef<any>()

	useEffect(() => {
		let position = dropDown.current.getBoundingClientRect()

		if (position.left < 0) {
			// if dropDown goes in left side
			dropDown.current.style.left = "-1rem"
			dropDown.current.style.transform = 'none'
		}

		if (position.right + 20 > window.innerWidth) {
			// if dropDown goes in right side
			dropDown.current.style.left = "unset"
			dropDown.current.style.right = "-1rem"
			dropDown.current.style.transform = 'none'
		}
	})
	useEffect(() => {
		const data: any = localStorage.getItem("sort")
		if (!data) {
			localStorage.setItem("sort", JSON.stringify(sort))
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	
	useEffect(() => {
		dispatch({type: "DELETE_NOTES"})
		fetch(`${process.env.REACT_APP_API_DOMAIN}get_notes.php?sortby=${sort["sortby"]}&orderby=${sort["orderby"]}`).then(res => {
			return res.json()
		}).then(data => {
			console.log("FETECHED NOTES BY SORT");
			dispatch({ type: "LOAD_NOTES", notes: data })
		}
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sort])

	const handleSort = (e: any) => {
		const title = e.target.closest(".option").title;
		if (title === "ASC" || title === "DESC") {
			setSort((prev: any) => {
				localStorage.setItem("sort", JSON.stringify({ ...prev, orderby: title }))
				return { ...prev, orderby: title }
			})
		}
		else {
			setSort((prev: any) => {
				localStorage.setItem("sort", JSON.stringify({ ...prev, sortby: title }))
				return { ...prev, sortby: title }
			})
		}

	}
	console.log("RENDERED")
	return <div className="dropdown" ref={dropDown}>
		<div className="sortby">
			<div className={sort.sortby === "title" ? "option active" : "option"} title="title" onClick={handleSort}>
				<div className="checkbox"></div>
				<p>Title</p>
			</div>
			<div className={sort.sortby === "dateCreated" ? "option active" : "option"} title="dateCreated" onClick={handleSort}>
				<div className="checkbox"></div>
				<p>Date Created</p>
			</div>
			<div className={sort.sortby === "dateModified" ? "option active" : "option"} title="dateModified" onClick={handleSort}>
				<div className="checkbox"></div>
				<p>Date Modified</p>
			</div>
		</div>
		<div className="orderby">
			<div className={sort.orderby === "ASC" ? "option active" : "option"} title="ASC" onClick={handleSort}>
				<div className="checkbox"></div>
				<p>Asending</p>
			</div>
			<div className={sort.orderby === "DESC" ? "option active" : "option"} title="DESC" onClick={handleSort}>
				<div className="checkbox"></div>
				<p>Desending</p>
			</div>
		</div>
	</div>
}

export default NavBar;