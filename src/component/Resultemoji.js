import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';


function Resultemoji({ elemList }) {
    return (
        <CopyToClipboard text={elemList.emoji}>
            <div className='item'>
                <p className='emoji' >   {elemList.emoji}  </p><br />
                <p>{elemList.description}</p>
            </div>
        </CopyToClipboard >
    )
}

export default Resultemoji