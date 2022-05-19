<script>
	let playersArray = [
		{
			id: 1,
			name: 'Asi',
			imgUrl: 'https://avatars.githubusercontent.com/u/45923568?v=4'
		},
		{
			id: 2,
			name: 'Liran',
			imgUrl:
				'https://media-exp1.licdn.com/dms/image/C4D03AQEtfnc5tHKvJg/profile-displayphoto-shrink_800_800/0/1577782079196?e=1657756800&v=beta&t=qfJ2xCylw9t1eS3Q9gSQI3sj60bl1SJd19fRvPvBbwc'
		},
		{
			id: 3,
			name: 'Yuval',
			imgUrl:
				'https://www.imperva.com/blog/wp-content/uploads/sites/9/2016/11/Yuval-Mishan-150x150.png.webp'
		},
		{
			id: 4,
			name: 'Asaf',
			imgUrl:
				'https://media-exp1.licdn.com/dms/image/C4D03AQG9VSfvGrD_Ag/profile-displayphoto-shrink_400_400/0/1636020720705?e=1657756800&v=beta&t=_Q_LwmYSKv0vhSHwKHpSO0IhJDYdoA9VP34MdP7M42w'
		},
		{
			id: 5,
			name: 'Nadav',
			imgUrl:
				'https://media-exp1.licdn.com/dms/image/D4D35AQHb__18V1kZKA/profile-framedphoto-shrink_800_800/0/1652115906034?e=1653321600&v=beta&t=lQ4yeVpDhNBDPLVhmQrl5mnZes4TrlvXXFsuU9jUE7g'
		},
		{
			id: 6,
			name: 'Israel',
			imgUrl:
				'https://pps.whatsapp.net/v/t61.24694-24/75363524_474283473268505_1870333604764092208_n.jpg?ccb=11-4&oh=71f31f49e01cbf6ce8fee0b9aba8a3e2&oe=6292CD34'
		},
		{
			id: 7,
			name: 'Amir',
			imgUrl:
				'https://media-exp1.licdn.com/dms/image/C4E03AQH3_WaZdLrHGg/profile-displayphoto-shrink_800_800/0/1579529056070?e=1658361600&v=beta&t=nvRDenOdeZB_9qFEM6z07H8Ht-KplPxHuh33q8ru-Yw'
		},
		{
			id: 7,
			name: 'Omer',
			imgUrl:
				'https://pps.whatsapp.net/v/t61.24694-24/56106035_2275628316037250_7590769179968405504_n.jpg?ccb=11-4&oh=01_AVyaF_eNAbebrMys8pJjFws42msQGP9B-ZzWeF3qdADKxA&oe=6292D4A1'
		},
		{
			id: 8,
			name: 'Yaniv',
			imgUrl:
				'https://pps.whatsapp.net/v/t61.24694-24/172323459_1755568351307822_3979198941979798641_n.jpg?ccb=11-4&oh=01_AVzVxquys4Xo5rPoJC_hpXT0g8PbkOaBbfNHXRqlUgEtcQ&oe=6292486A'
		},
		{
			id: 9,
			name: 'Meidan',
			imgUrl:
				'https://www.v5arch.com/Pictures/%D7%9E%D7%99%D7%93%D7%9F%20%D7%97%D7%A4%D7%A8%20%D7%A6_20200119154809.731.jpg'
		},
		{
			id: 10,
			name: 'Michael',
			imgUrl:
				'https://pps.whatsapp.net/v/t61.24694-24/264534593_463252471910232_5364901898963387527_n.jpg?ccb=11-4&oh=01_AVwHj7veH-c14A05Db6J08rR8oEAcHgBYfqWsbcWeFQ7VA&oe=62916744'
		},
		{
			id: 11,
			name: 'Amir L',
			imgUrl:
				'https://pps.whatsapp.net/v/t61.24694-24/119142823_650974769186269_1843393620251278509_n.jpg?ccb=11-4&oh=01_AVyRiZSz8zXiOkxDiDrfwZBK1yeFuzI9ClNjgXOaG3nyUQ&oe=6290BB3C'
		},
		{
			id: 12,
			name: 'Daniel',
			imgUrl:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeCZG2QlXsaARKNY5iePsCIc9q6lGjvvQmOaHrsghJrssgrxNOdS50olNVeG6tMxVYxwQ&usqp=CAU'
		},
		{
			id: 13,
			name: 'Ori',
			imgUrl:
				'https://pps.whatsapp.net/v/t61.24694-24/161009283_330600328526975_6844355476101253970_n.jpg?ccb=11-4&oh=01_AVwNsFaGf-XqF9XsMqnleEfvMcOCFpG6cg8HZzd0JSTbSg&oe=6292FAEB'
		}
	];

	/**
	 * @type {any[]}
	 */
	let players = [];
	const choosePlayers = () => {
		let randomPlayers = playersArray.sort(() => Math.random() - 0.5);
		let chosenPlayers = randomPlayers.slice(0, 3);
		console.log(chosenPlayers);
		return chosenPlayers;
	};
	const onclick = () => {
		players = choosePlayers();
	};
</script>

<svelte:head>
	<title>Picker</title>
</svelte:head>
<div class="grid grid-rows-5 bg-blue">
	<h1 class="text-white text-4xl">Roster</h1>
	<div>
		<div class="flex flex-row ">
			{#each playersArray as player}
				<img alt="" src={player.imgUrl} class="h-12 w-12 rounded-full" />
			{/each}
		</div>
	</div>
	<div>
		<button
			class="mt-8 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-black text-4xl border-4"
			on:click={onclick}>Who plays?</button
		>
		<button class="btn"> Button </button>
	</div>
	<div class="flex flex-row ">
		{#each players as player}
			<img alt="" src={player.imgUrl} class="h-12 w-12 rounded-full" />
		{/each}
	</div>
</div>

<!-- 
		1.present all the players
		2.add border to the img
		3.each avatar has a state of selected or not
		4.when the user clicks on the avatar, it should change the state to sit or play
		5.add input of how many sits 

		-->