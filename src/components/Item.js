import React from "react";

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

    return(
        <div className="item-row">
			<label className="check-flag">
				<span className="check-flag-label">{props.data.title}</span>
    			<span className="checkbox">
				    <input className="checkbox-native" onClick={check} defaultChecked={props.data.isComplete} type="checkbox"/>
					<span className="checkmark">
						<svg viewBox="0 0 24 24">
							<path className="checkmark-icon" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
						</svg>
					</span>
				</span>
			</label>
		</div>
    )
}
export default Item;