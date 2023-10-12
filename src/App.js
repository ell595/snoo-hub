import React, { useState, useEffect } from 'react';
import './App.css';
import Article from './Components/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState(['all']);

  useEffect(() => {
    const getData = setTimeout(() => {
      let tempSubreddit = subreddit === "" ? 'all' : subreddit;

      fetch("https://www.reddit.com/r/" + tempSubreddit + ".json").then(res => {
        if (res.status != 200) {
          console.log("ERROR!");
          return;
        }
  
        res.json().then(data => {
          if (data != null) {
            setArticles(data.data.children);
          }
        })
      })
    }, 2000);

    return () => clearTimeout(getData);
  }, [subreddit]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Snoo Surf</p>
        <input type="text" className="input" value={subreddit} onChange={ (e) => setSubreddit(e.target.value)} />
      </header>
      <div className="articles">
        {
          (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
        }
      </div>
    </div>
  );
}

export default App;
