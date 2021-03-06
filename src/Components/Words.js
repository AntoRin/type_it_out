import { useState, useEffect } from "react";
import Word from "./Word";
import Type from "./Type";

function Words({ wordList, endGame, speed })
{
    let words = wordList;

    const [word, setWord] = useState({
        theWord: words[0],
        index: 0
    });

    // let done = false;
    const [done, setdone] = useState(false);

    function isDone() {
        // done = true;
        setdone(true);
    }

    let status = false;

    function setStatus() {
        status = true;
    }

    useEffect(() => {
        if(done) {
            let update = {
                theWord: words[word.index + 1],
                index: word.index + 1
            };

            setWord(update);
            return (setdone(false));
        }
        
        let x = setTimeout(() => {
            
            let update = {
                theWord: words[word.index + 1],
                index: word.index + 1
            };
            // console.log(done);
            if(done) {
                clearTimeout(x);
                setWord(update);
                return;
            }
           
            if(!status)
                endGame();
            return (setWord(update));
        }, speed);

        
        return () => clearTimeout(x);
    }, [done, words, word.index, status, endGame, speed]);



    return(
        <div>
            <Type speed={speed} setStatus={setStatus} isDone={isDone}  word={word.theWord} />
            <Word word={word.theWord} />
        </div>
    )
}

export default Words;