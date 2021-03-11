<script>
	import _ from 'lodash'
	export let title;
	let announcement = ""
	let scores = [0,0]
	let en_map_scores = ['Love', 'Fifteen', 'Thirty', 'Forty']
	let game_ended = false
	function get_announcement(scores) {
		if (_.max(scores) >= 4 && Math.abs(scores[0] - scores[1]) > 1) {
			// Win
			return `Player${scores[0] > scores[1] ? 1 : 2} has won the game!`
		}
		else if (_.max(scores) >= 3 && scores[0] != scores[1]) {
			// Advantage
			return `Player${scores[0] > scores[1] ? 1 : 2} Advantage!`
		}
		else if (_.max(scores) >= 3 && scores[0] == scores[1]) {
			// Deuce
			return 'Deuce'
		}
		else {
			// Just Scores
			return `${en_map_scores[scores[0]]} to ${en_map_scores[scores[1]]}`
		}
	}
	function update() {
		announcement = get_announcement(scores)
		if (_.max(scores) >= 4 && Math.abs(scores[0] - scores[1]) > 1)
			game_ended = true
	}
	/**
	 * Return score function for the player.
	 * @param playerIdx - 0-based index of player
	 */
	function get_score_fn(playerIdx) {
		function score() {
			scores[playerIdx] += 1
			update()
		}
		return score
	}
	update()
</script>

<main>
	<h1>{title}</h1>
	<h2>Announcement: {announcement}</h2>
	<button on:click={get_score_fn(0)} disabled = {game_ended}>Player1 scored!</button>
	<button on:click={get_score_fn(1)} disabled = {game_ended}>Player2 scored!</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>