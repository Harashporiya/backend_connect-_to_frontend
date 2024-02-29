import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import './index.css'
function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 
  return (
    <div>
    
       <div id="jokes_add">
      {Array.isArray(jokes) &&
        jokes.map((joke, index) => (
          <div id="jokes_text" key={joke.joke_id}>
            <h1>{joke.joke_category}</h1>
            <h3>{joke.joke_text}</h3>
            <h3 id>Author: {joke.joke_author}</h3>
            <h3>Date: {joke.joke_date}</h3>
            <h3 id="likes"> <FaRegThumbsUp />  {joke.joke_likes}  </h3>
           <h3 id="dislike"> <FaRegThumbsDown /> {joke.joke_dislikes}</h3>
           <h3>Rating: <CiStar /> {joke.joke_rating}</h3>
            
           
          </div>
        ))}
        
        </div>
    </div>
  );
}

export default App;
