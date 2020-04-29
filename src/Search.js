import React, {useState} from 'react';
import axios from 'axios';

function Search() {

    const [poster, setPoster] = useState('');

    function posterImage(e) {
        e.preventDefault();

        axios.get('https://www.omdbapi.com/?apikey=f9ab0f40&t=' + poster)
            .then(response => {
                document.getElementById("myImg").src = response.data.Poster;
                document.getElementById('myTitle').innerText = response.data.Title;
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <h1 className='texto'>Film Poster Viewer</h1>
            <form action="" onSubmit={posterImage}>
                <input type="text" placeholder="Name" value={poster} onChange={e => setPoster(e.target.value)}/>
                <button type='submit'>Find</button>

            </form>
            <h3 id='myTitle'className='texto'> </h3>
            <img id="myImg" src="" alt="Poster"/>
        </div>
    )
}

export default Search;