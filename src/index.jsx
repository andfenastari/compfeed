import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.png';
import intro from './intro.png';

const App = () => {
	return <div>
		<Header />
		<Main />
	</div>;
};

const Header = () => {
	const links = [
		['', 'Inicio'],
		['stats', 'Estatisticas'],
		['careers', 'Carreiras'],
		['test', 'Faça o Teste'],
	];

	return <header class="header">
		<div class="header-container">
			<div class="logo">
				<img src={logo} />
			</div>
			<nav class="nav">
				{links.map(([link, name]) =>
					<a class="nav-link" href={'#'+link}>{name}</a>
				)}
			</nav>
		</div>
	</header>;
};

const Main = () => {
	return <main class="content">
		<div class="intro">
			<h1>Já pensou em trabalhar com computação?</h1>
			<img src={intro}/>
		</div>
		<div class="cards">
			<div class="card">
				<h2>Mercado em alta</h2>
				<p>A computação é uma das áreas que mais cresce e
				deve continuar assim pelos proximos anos.</p>
			</div>
			<div class="card">
				<h2>Diversas áreas de atuação</h2>
				<p>Existem dezenas de possibilidades de carreiras,
				desde analista de dados até hacker.</p>
			</div>
			<div class="card">
				<h2>Cuidado com a escolha</h2>
				<p>Nos podemos te ajudar a entender as diferentes
				carreiras da área e te ajudar a escolher a que se
				encaixa melhor no seu perfil.</p>
			</div>
		</div>
		<div class="test-container">
			<button class="test">Faça o teste</button>
		</div>
	</main>;
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);
