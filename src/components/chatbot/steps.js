export default [
	{
		id: '1',
		message: 'What is your name?',
		trigger: '2',
	},
	{
		id: '2',
		user: true,
		trigger: '3',
	},
	{
		id: '3',
		message: 'Hi {previousValue}, nice to meet you!',
		trigger: '4',
	},
	{
		id: '4',
		message: 'Who are you ?',
		trigger: '5',
	},
	{
		id: '5',
		options: [
			{ value: "Mentor", label: 'Mentor', trigger: '8' },
			{ value: "Entrepreneur", label: 'Entrepreneur', trigger: '7' },
			{ value: "Investor", label: 'Investor', trigger: '6' },
		],
	},
	{
		id: '6',
		message: 'Join the community of your preference and see amazing pitches from our bright Entrepreneurs',
		trigger: '2',
	},
	{
		id: '7',
		message: 'Use our Automated Pitch Builder to build your pitch for your startup.',
		end: true,
	},
	{
		id: '8',
		message: 'Chose the Entrepreneurs to connect with and provide your guidance.',
		trigger: '2',
	},
];
