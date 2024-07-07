let songs = ["fearless", "teardrops on my guitar", "a place in this world", "cornelia street", "tied together with a smile", "picture to burn", "cold as you", "lover", "shake it off", "wildest dreams", "fifteen", "change", "back to december", "the story of us", "castles crumbling ", "dancing with our hands tied", "come back...be here", "illicit affairs", "midnight rain", "vigilante shit", "bigger than the whole sky", "no body, no crime", "untouchable", "electric touch ", "thats when ", "delicate", "begin again", "nothing new ", "invisible string", "epiphany", "bejeweled", "slut!", "gold rush", "cruel summer", "i think he knows", "miss americana & the heartbreak prince", "you need to calm down", "clean", "superstar", "today was a fairytale", "speak now", "dont blame me", "so it goes...", "dress", "message in a bottle ", "all too well", "my tears ricochet", "hoax", "question...?", "tolerate it", "long story short", "im only me when im with you", "come in with the rain", "sparks fly", "enchanted", "end game", "new years day", "ronan", "mad woman", "dorothea", "death by a thousand cuts", "soon youll get better", "i wish you would", "new romantics", "jump then fall", "dear john", "foolish one ", "timeless ", "bye bye baby ", "state of grace", "forever winter ", "anti - hero", "sweet nothing", "glitch", "suburban legends ", "is it over now ? ", "i forget that you existed", "white horse", "mine", "we were happy ", "call it what you want", "we are never ever getting back together", "sad beautiful tragic", "i bet you think about me ", "marys song", "blank space", "you belong with me", "never grow up", "...ready for it ? ", "mirrorball", "karma", "cowboy like me", "stay beautiful", "london boy", "false god", "the outside", "how you get the girl", "welcome to new york", "ours", "when emma falls in love ", "treacherous", "run ", "this is me trying", "mastermind", "paper rings", "out of the woods", "i know places", "dont you ", "red", "the last time", "the very first night ", "youre on your own, kid", "the great war", "this love", "king of my heart", "this is why we cant have nice things", "holy ground", "the moment i knew", "seven", "maroon", "paris", "dear reader", "ivy", "our song", "afterglow", "wonderland", "love story", "innocent", "superman", "i can see you ", "you all over me ", "gorgeous", "better man ", "babe ", "cardigan", "betty", "willow", "happiness", "its time to go", "time mcgraw", "you are in love", "youre not sorry", "the other side of the door", "stay stay stay", "everything has changed", "starlight", "high infidelity", "tis the damn season", "coney island", "evermore", "right where you left me", "getaway car", "all too well", "22", "the 1", "exile", "august", "snow on the beach", "closure", "marjorie", "me!", "its nice to have a friend", "long live", "mr.perfectly fine ", "i did something bad", "look what you made me do ", "i knew you were trouble", "i almost do ", "the lucky one", "lavender haze", "labyrinth", "say dont go ", "shouldve said no", "daylight", "invisible", "a perfectly good heart", "the man", "the archer", "breathe", "the way i loved you", "mean", "better than revenge", "haunted", "girl at home", "wouldve, couldve, shouldve", "hits different", "karma", "style", "all you had to do was stay", "bad blood", "hey stephen", "tell me why", "forever & always", "the best day", "last kiss", "the last great american dynasty", "peace", "now that we dont talk ", "champagne problems", "fortnight", "the tortured poets department", "my boy only breaks his favorite toys", "down bad", "so long, london", "but daddy i love him", "fresh out the slammer", "florida!!!", "guilty as sin?", "whos afraid of little old me?", "i can fix him (no really i can)", "loml", "i can do it with a broken heart", "the smallest man who ever lived", "the alchemy", "clara bow", "the black dog", "imgonnagetyouback", "the albatross", "chloe or sam or sophia or marcus", "how did it end?", "so high school", "i hate it here", "thank you aimee", "i look in peoples windows", "the prophecy", "cassandra", "peter", "the bolter", "robin", "the manuscript"];

const texts = [{
    label: "Did you run out of letters? Which ones are missing?",
    
}, {}]

// state could be MissingLetters or ExistingLetters
let state = "MissingLetters";

window.addEventListener('load', () => {
    // adding event listeners to inputs
    document.querySelectorAll('.generate').forEach(el => el.addEventListener('click', onGenerate));

    // add event listener for enter
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") { console.log('enter') }
        if (document.activeElement.classList.contains('input') && event.key === "Enter") {
            onGenerate();
        }
    });

    // add event listener to goto buttons
    document.querySelectorAll(".goto").forEach(el => el.addEventListener("click", goto))
})

const onGenerate = () => {
    console.log('generate');
    if (document.querySelector(`#${state} .input`).checkValidity()) {
        let letters = document.querySelector(`#${state} .input`).value.toLowerCase().replace(/[, ]/, '');
        // new set to remove duplicates
        letters = [...new Set(letters.split(""))];
        const songlist = window[`find${state}`](letters);

        if (songlist.length > 0) {
            document.querySelector(`#${state} .output`).innerText = "";
            let newLi;
            songlist.forEach(song => {
                console.log(song);
                newLi = document.createElement("li");
                newLi.innerText = song;
                document.querySelector(`#${state} .output`).append(newLi);
            });
        } else {
            document.querySelector(`#${state} .output`).innerText = "no songs were found :("
        }
    }
}

var findMissingLetters = (missingLetters) => {
    return filteredList = songs.filter(word => !missingLetters.some(letter => word.includes(letter)));
}

var findExistingLetters = (existingLetters) => {
    return filteredList = songs.filter(word => {
        for (letter of word) {
            if (!existingLetters.includes(letter) && letter !== " ") {
                return false;
            }
        }
        return true
    })
}

const goto = (event) => {
    document.querySelector(`#${state} .input`).value = "";
    document.querySelector(`#${state} .output`).innerText = "";
    if (state === "MissingLetters") {
        state = "ExistingLetters";
        document.getElementById("bg").classList.add("high-bg");
        document.querySelector(".title").classList.add("disappear-margin")
        document.getElementById("ExistingLetters").classList.remove("none");
        document.getElementById("MissingLetters").classList.add("none");
    } else {
        state = "MissingLetters";
        document.getElementById("bg").classList.remove("high-bg");
        document.querySelector(".title").classList.remove("disappear-margin");
        document.getElementById("ExistingLetters").classList.add("none");
        document.getElementById("MissingLetters").classList.remove("none");
    }
}