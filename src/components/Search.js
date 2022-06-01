import React, {useEffect} from "react";
import {useState} from "react";
import wikipedia from "../api/wikipedia";
import './Search.css';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebounced] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerID = setTimeout(() => {setDebounced(term)}, 1000);
        return () => {
            if (timerID) clearTimeout(timerID);
        }
    }, [term]);

    useEffect(() => {
        if (debouncedTerm) {
            (async () => {
                const payload = await wikipedia.get('', {params: {srsearch: debouncedTerm}});
                if (payload.data.query) {
                    console.log(payload.data);
                    setResults(payload.data.query.search);
                }
            })();
        }
    }, [debouncedTerm]);

    return (
        <div>
      <form>
          <div className="ui input wide">
            <input type="text"
                value={term} onChange={(e) => setTerm(e.target.value)}
            />
          </div>
      </form>
      <div className="ui relaxed divided list">
          {results.map((item) => {return (
              <a href={`https://en.wikipedia.org/wiki/${item.title}`} key={item.pageid}>
                  <div className="item" dangerouslySetInnerHTML={{__html: item.snippet}}></div>
              </a>
          )})}
      </div>
        </div>


    );
}

export default Search;