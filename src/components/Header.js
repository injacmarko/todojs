import React, { useEffect, useState } from 'react';
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

        today = dd + '/' + mm + '/' + yyyy;
        return today.toString();
    }

	const [quote, setQuote] = useState("")
	const [cite, setCite] = useState("")
	useEffect(() => {
		var rand = Math.floor(Math.random() * 8);
		setQuote(quotes[rand])
		setCite(cites[rand])
	}, [])
    
    return(
        <header className="header">
			<div className="wrap">
				<button className="btn-icon" onClick={buttonClick}>
					<img className="icon icon-plus js-modal-init" src={plus} alt="Add New Item"/>
				</button>
				<div className="header-blockquote">
					<h1 className="header-quote">{quote}</h1>
					<div className="header-cite">{cite}</div>
				</div>
			</div>
			<div className="header-inner">
				<div className="wrap">
					<img className="logo" src={logo} alt="VegaIT"/>
					<div className="date-wrap">
						<img className="icon" src={calendar} alt="Calendar"/>
						<time>{getTime()}</time>
					</div>
				</div>
			</div>
		</header>
    )
}

export default Header;