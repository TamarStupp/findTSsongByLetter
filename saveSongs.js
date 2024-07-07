const songs = ["fearless", "teardrops on my guitar", "a place in this world", "cornelia street", "tied together with a smile", "picture to burn", "cold as you", "lover", "shake it off", "wildest dreams", "fifteen", "change", "back to december", "the story of us", "castles crumbling ", "dancing with our hands tied", "come back...be here", "illicit affairs", "midnight rain", "vigilante shit", "bigger than the whole sky", "no body, no crime", "untouchable", "electric touch ", "thats when ", "delicate", "begin again", "nothing new ", "invisible string", "epiphany", "bejeweled", "slut!", "gold rush", "cruel summer", "i think he knows", "miss americana & the heartbreak prince", "you need to calm down", "clean", "superstar", "today was a fairytale", "speak now", "dont blame me", "so it goes...", "dress", "message in a bottle ", "all too well", "my tears ricochet", "hoax", "question...?", "tolerate it","long story short","im only me when im with you","come in with the rain","sparks fly","enchanted" ,"end game","new years day","ronan","mad woman","dorothea","death by a thousand cuts","soon youll get better","i wish you would","new romantics","jump then fall","dear john","foolish one ","timeless ","bye bye baby ","state of grace","forever winter ","anti - hero","sweet nothing","glitch","suburban legends ","is it over now ? ","i forget that you existed","white horse","mine","we were happy ","call it what you want","we are never ever getting back together","sad beautiful tragic","i bet you think about me ","marys song","blank space","you belong with me","never grow up","...ready for it ? ","mirrorball","karma","cowboy like me","stay beautiful","london boy","false god","the outside","how you get the girl","welcome to new york","ours","when emma falls in love ","treacherous","run ","this is me trying","mastermind","paper rings","out of the woods","i know places","dont you ","red","the last time","the very first night ","youre on your own, kid","the great war","this love","king of my heart","this is why we cant have nice things","holy ground","the moment i knew","seven","maroon","paris","dear reader","ivy","our song","afterglow","wonderland","love story","innocent","superman","i can see you ","you all over me ","gorgeous","better man ","babe ","cardigan","betty","willow","happiness","its time to go","time mcgraw","you are in love","youre not sorry","the other side of the door","stay stay stay","everything has changed","starlight","high infidelity","tis the damn season","coney island","evermore","right where you left me","getaway car","all too well","22","the 1","exile","august","snow on the beach","closure","marjorie","me!","its nice to have a friend","long live","mr.perfectly fine ","i did something bad","look what you made me do ","i knew you were trouble","i almost do ","the lucky one","lavender haze","labyrinth","say dont go ","shouldve said no","daylight","invisible","a perfectly good heart","the man","the archer","breathe","the way i loved you","mean","better than revenge","haunted","girl at home","wouldve, couldve, shouldve","hits different","karma","style","all you had to do was stay","bad blood","hey stephen","tell me why","forever & always","the best day","last kiss","the last great american dynasty","peace","now that we dont talk ","champagne problems"];

const ttpd = ["Fortnight",
    "The Tortured Poets Department"	,
    "My Boy Only Breaks His Favorite Toys",
    "Down Bad",
    "So Long, London",
    "But Daddy I Love Him",
    "Fresh Out the Slammer"	,
    "Florida!!!",
    "Guilty as Sin?",
        "Who's Afraid of Little Old Me?",
    "I Can Fix Him (No Really I Can)",
    "Loml",
    "I Can Do It with a Broken Heart",
    "The Smallest Man Who Ever Lived",
    "The Alchemy",
    "Clara Bow",
    "The Black Dog",
    "Imgonnagetyouback",
    "The Albatross"	,
    "Chloe or Sam or Sophia or Marcus",
    "How Did It End?",
    "So High School",
    "I Hate It Here",
    "Thank You Aimee",
    "I Look in People's Windows",
        "The Prophecy",
    "Cassandra",
    "Peter",
    "The Bolter",
    "Robin",
    "The Manuscript"];

    const songList = [];

const doFetch = async (url) => {
    let tries = 0;
    let reponse = await fetch(url);
    // console.log(reponse);
    while (!reponse.ok && reponse.status >= 500 && tries < 5) {
        reponse = await fetch(url);
        tries++;
    }
    console.log(tries);
    // if retriving the song lyrics after five tries is impossible, show error message
    if (!reponse.ok) {
        console.log(`something went wrong. Error code: ${reponse.status}`);
    }
    const result = await reponse.json();
    return result;
}

const saveSongs = async () => {
    // const songs = await doFetch(`https://taylor-swift-api.vercel.app/api/songs`);

    let name = "";
    for (let s = 0; s < ttpd.length; s++) {
        name = ttpd[s].toLowerCase().replaceAll("(from the vault)", "");
        name = name.replaceAll("'", "");
        songList.push(name);
    }
    console.log((JSON.stringify(songList)));
}

saveSongs();



