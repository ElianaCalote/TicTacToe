export function calculateWinner(squares) {
	//all the winning possibilities 
    const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];


	for (let i = 0; i < lines.length; i++) {
        //destruturing the values from the array to a,b,c
		const [a, b, c] = lines[i];
        //using the values as the indexs of the winning moves
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

// const squares = [
//     null, null, null,
//     "X","X","O",
//     null, null, null,
// ];

// console.log(calculateWinner(squares));