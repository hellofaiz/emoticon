
import Resultemoji from './Resultemoji'

function Emojicontainer({list}) {
    return (
        <div className='emoji-container'>{
            list.map((elemList, idx) => {
                return (
                    <Resultemoji elemList={elemList} key={idx} />
                )
            })
        }
        </div>
    )
}

export default Emojicontainer
