const { spawn } = require('child_process');

const cri = spawn('chrome-remote-interface', ['list']);

cri.stdout.on('data', (data) => {
	const info = JSON.parse(data.toString()).filter(item => item.type === "page").map(item => ({id: item.id, title: item.title, url: item.url }))

	const pagetitles = info.map((item, idx) => {
		return `${idx} > ${item.title} \t${item.id} `;
	});

	pagetitles.forEach(page => {
		console.log(page);
	})
});

