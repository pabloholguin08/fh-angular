interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details{
    author:string;
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "I'm a mess",
    details: {
        author: 'Ed Sheeran',
        year: 2005
    }
}


const { song:anotherSong, songDuration:duration, details:{author}} = audioPlayer;

//console.log('Song: ',anotherSong);
//console.log('Duration: ',duration );
//console.log('Author: ', author);


const [ , , p3]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3:', p3);

export{}