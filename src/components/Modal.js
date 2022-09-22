import React from "react";

function Modal({open})
{
	function saveItem()
	{
		let value = document.getElementById("titleInput").value
		fetch('https://localhost:7242/api/todoitems',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: value,
					isComplete: false
				})
			})
	}

    if(!open) return null
    return(
        <div className="modal-wrap js-modal">
			<div className="modal js-modal-inner">
				<h2>Create a task today:</h2>
				<form action="">
					<div className="field-wrap">
						<input className="field" type="text" id="titleInput" placeholder="Title.."/>
					</div>
					<button className="btn-wrap align-right">
						<input className="btn" type="submit" value="Create" onClick={saveItem}/>
					</button>
				</form>
			</div>
		</div>
    )
}
export default Modal;