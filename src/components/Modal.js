import React from "react";

function Modal({open})
{
    if(!open) return null
    return(
        <div class="modal-wrap js-modal">
			<div class="modal js-modal-inner">
				<h2>Create a task today:</h2>
				<form action="">
					<div class="field-wrap">
						<input class="field" type="text" placeholder="Title.."/>
					</div>
					<button class="btn-wrap align-right">
						<input class="btn" type="submit" value="Create"/>
					</button>
				</form>
			</div>
		</div>
    )
}
export default Modal;