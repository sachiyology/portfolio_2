import React from 'react';
import Skill from '../pages/About';
import Work from '../pages/Work';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const routes = [
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: Skill,
		key: 'About',
		path: '/about'
	},
	{
		Component: Work,
		key: 'Work',
		path: '/work'
	},
	{
		Component: Contact,
		key: 'Contact',
		path: '/contact'
	}
];

export default routes;
