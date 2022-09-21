import React from "react";

function Item()
{
    return(
        <div class="item-row">
			<label class="check-flag">
				<span class="check-flag-label">Pick up drycleaning</span>
    			<span class="checkbox">
				    <input class="checkbox-native" type="checkbox"/>
					<span class="checkmark">
						<svg viewBox="0 0 24 24">
							<path class="checkmark-icon" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
						</svg>
					</span>
				</span>
			</label>
		</div>
    )
}
export default Item;