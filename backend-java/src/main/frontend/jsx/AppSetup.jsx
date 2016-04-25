
import Backbone from "backbone";
import Numeral from "numeral";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from 'react-router';

import MainMenu from "forpdi/jsx/core/widget/MainMenu.jsx";
import NotFound from "forpdi/jsx/core/view/NotFound.jsx";

import Login from "forpdi/jsx/core/view/user/Login.jsx";
import RecoverPassword from "forpdi/jsx/core/view/user/RecoverPassword.jsx";
import ResetPassword from "forpdi/jsx/core/view/user/ResetPassword.jsx";

Numeral.language('pt-br', require("numeral/languages/pt-br.js"));
Numeral.language("pt-br");

ReactDOM.render((
	<main>
		<MainMenu />
		<div>
			<Router>
				<Route path="/" component={Login} />
			  	<Route path="/login" component={Login} />
				<Route path="/recover-password" component={RecoverPassword} />
				<Route path="/reset-password/:token" component={ResetPassword} />

				<Route path="*" component={NotFound} />
			</Router>
		</div>
  	</main>
  	),
  	document.getElementById('main-body')
);

module.exports = true;