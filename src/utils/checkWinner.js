const checkWinner = (cells, winCombination, info, gameBoard) => {
    const allTurns = cells;
    const turnsId = new Set(Array.from(allTurns).map((element) => element.id));

    for (const item of winCombination) {
        if (item.every((num) => turnsId.has(`${num}`))) {
            return `${info} won!`;
        }
    }

    if (gameBoard.every((cell) => cell !== '')) {
        return 'Draw!';
    }

    return null;
};

export default checkWinner;

