import React, { useState } from 'react';
import { PieChart, Pie, Text } from 'recharts';

const data = [
	{
		index: 0,
		name: 'Katalon',
		value: 35
	},
	{
		index: 1,
		name: 'puppeteer',
		value: 20
	},
	{
		index: 2,
		name: 'Leapwork',
		value: 20
	},
	{
		index: 3,
		name: 'Cypress',
		value: 10
	},
	{
		index: 4,
		name: 'Virtuoso',
		value: 10
	},
	{
		index: 5,
		name: 'Selenium',
		value: 5
	}
];

const label = ({ name, value, cx, x, y }) => {
	return (
		<>
			{/* 引数で付属情報を受け取れます */}
			<Text x={x} y={y} fill="#383478">
				{name}
			</Text>
			<Text x={x} y={y} dominantBaseline="hanging" fill="#383478">
				{/* {value} */}
			</Text>
		</>
	);
};

const field = [
	{
		index: 0,
		name: 'Music Streaming',
		value: 10
	},
	{
		index: 1,
		name: 'Online Banking',
		value: 15
	},
	{
		index: 2,
		name: 'Digital Payments',
		value: 15
	},
	{
		index: 3,
		name: 'E-commerce',
		value: 15
	},
	{
		index: 4,
		name: 'Financial Crime Prevention System',
		value: 25
	},
	{
		index: 5,
		name: 'SNS',
		value: 10
	}
];

const skill = [
	{
		index: 0,
		name: 'Test Planning',
		value: 15
	},
	{
		index: 1,
		name: 'Requirement Analysis',
		value: 15
	},
	{
		index: 2,
		name: 'Design test cases',
		value: 15
	},
	{
		index: 3,
		name: 'Create automated test suite',
		value: 15
	},
	{
		index: 4,
		name: 'Non-functional testing',
		value: 10
	},
	{
		index: 5,
		name: 'Bug Investigation',
		value: 10
	},
	{
		index: 6,
		name: 'Improve products'
	}
];

export default function Skill(props) {
	return (
		<>
			<div className="SkillPage">
				<h1>My Experties</h1>
				<div id="h2">
					<h2 width={330}>Experties</h2>
					<h2 width={330}>Field of Experties</h2>
					<h2 width={330}>Tools</h2>
				</div>
				<div id="wrapper">
					{/* ココから */}

					<PieChart width={420} height={280}>
						<Pie
							data={skill}
							cx="50%"
							cy="50%"
							outerRadius={100}
							fill="#8884d8"
							label={label}
						/>
					</PieChart>
					{/* <h2>Field</h2> */}
					<PieChart width={420} height={280}>
						<Pie
							data={field}
							cx="50%"
							cy="50%"
							outerRadius={100}
							fill="#8884d8"
							label={label}
						/>
					</PieChart>
					{/* <h2>横並びの3つ目</h2> */}
					{/* <h2 width="730">E2E testing tools I use most often</h2> */}
					<PieChart width={420} height={280}>
						<Pie
							data={data}
							cx="50%"
							cy="50%"
							outerRadius={100}
							fill="#8884d8"
							label={label}
						/>
					</PieChart>
				</div>
			</div>
		</>
	);
}
