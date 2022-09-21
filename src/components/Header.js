import React from 'react';
import plus from './../icons/icon-plus.svg';
import logo from '../images/vegait-logo.svg';
import calendar from './../icons/icon-calendar.svg';
import quotes from './../quote/Quotes';
import cites from './../quote/Cites';

function Header({buttonClick})
{
    function getTime()
    {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today.toString();
    }
    var rand = Math.floor(Math.random() * 8);
    var quote = quotes[rand];
    var cite = cites[rand];
    
    return(
        <header class="header">
			<div class="wrap">
				<button class="btn-icon" onClick={buttonClick}>
					<img class="icon icon-plus js-modal-init" src={plus} alt="Add New Item"/>
				</button>
				<div class="header-blockquote">
					<h1 class="header-quote">{quote}</h1>
					<div class="header-cite">{cite}</div>
				</div>
			</div>
			<div class="header-inner">
				<div class="wrap">
					<img class="logo" src={logo} alt="VegaIT"/>
					<div class="date-wrap">
						<img class="icon" src={calendar} alt="Calendar"/>
						<time>{getTime()}</time>
					</div>
				</div>
			</div>
		</header>
    )
}

export default Header;