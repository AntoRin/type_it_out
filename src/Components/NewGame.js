import Header from "./Header";

function NewGame({ newGame, changeSpeed }) {

    function handleOptions(event) {
        let difficulty = event.target.id;
        switch (difficulty) {
            case "Easy":
                changeSpeed(5000);
                break;
            case "Medium":
                changeSpeed(3000);
                break;
            case "Impossible":
                changeSpeed(1000);
                break;
            default:
                changeSpeed(5000);
        }
    }
    return (
        <div>
        <Header title="Can You Type?" />
            <div className="flex-center flex-column">
                <button onClick={newGame} className="btn-std" type="button">Start</button>
                <div className="flex-center">
                    <div className="options">
                        <input type="radio" name="options" id="Easy" onChange={handleOptions} />
                        <label className="margin" htmlFor="Easy">Easy</label>
                    </div>
                    <div className="options">
                        <input type="radio" name="options" id="Medium" onChange={handleOptions} />
                        <label className="margin" htmlFor="Medium">Medium</label>
                    </div>
                    <div className="options">
                        <input type="radio" name="options" id="Impossible" onChange={handleOptions} />
                        <label className="margin" htmlFor="Impossible">Impossible</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewGame;