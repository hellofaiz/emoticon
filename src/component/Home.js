import React, { useEffect } from 'react'
import { useState } from 'react';
import emojiList from '../emojiList'
import Emojicontainer from './Emojicontainer';

function Home() {
  const [list, setList] = useState(emojiList)
  const [keyword, setkeyword] = useState("")


  const inputword = (e) => {

    setkeyword(e.target.value.toLowerCase())
  }
  // let count = 1;  to be continue number against bullet

  useEffect((_) => {
    const filteredList = emojiList.filter(list => {
      if (list.emoji === keyword) {
        return true;
      } if (list.description.startsWith(keyword)) {
        return true;
      } if (list.aliases.some(e => e.startsWith(keyword))) {
        return true
      } else {
        return false
      }
    })
    setList(filteredList)

  }, [keyword])

  return (
    <div>

      <div className="input-container">

        <input id="box" type="search" autoFocus onKeyUp={inputword} placeholder="Search..." />
        {keyword === "" ? false : (<p>Your result for :-{keyword}</p>)}


      </div>
      <div className='result-container'>

        {list.length === 0 ? (
          <h3 className='no_result'>No Emoji Found 🥺</h3>
        ) : (
          <Emojicontainer list={list} />
        )}

      </div>
    </div>
  )
}

export default Home