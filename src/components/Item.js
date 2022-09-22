import React from "react";
import trash from './../images/delete.png'

function Item(props)
{
	function check(){
		props.data.isComplete = !props.data.isComplete
		var id = props.data.id
		var url = `https://localhost:7242/api/todoitems/${id}`
		fetch(url,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(props.data)
		})
	}

	function itemDelete()
	{
		var id = props.data.id
		var url = `https://localhost:7242/api/todoitems/${id}`
		fetch(url,
		{
			method: 'DELETE',
		})
	}

    return(
        <div className="item-row">
			<label className="check-flag">
				<span className="check-flag-label">{props.data.title}</span>
				<input className="checkbox-native" onClick={check} defaultChecked={props.data.isComplete} type="checkbox"/>
				<span className="checkmark">
					<svg viewBox="0 0 24 24">
						<path className="checkmark-icon" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
					</svg>
				</span>
				<span className="delete">
					<button className="delete-btn" onClick={itemDelete}>
						<img className="trash" src={trash} alt="Delete-Item"/>
					</button>
				</span>
			</label>
		</div>
    )
}
export default Item;