import React from 'react'
import './Program.css'
import Prog1 from '../../assets/praying-children.jpg'
import Prog2 from '../../assets/married.jpg'
import Prog3 from '../../assets/youthBulindo.jpg'

const Programs = () => {
    return (
        <div className='programs' id='events'>
            <div className="program">
                <img src={Prog1} alt="" />
                <div className="caption">
                    <p>Children's Service</p>
                </div>
            </div>
            <div className="program">
                <img src={Prog2} alt="" />
                <div className="caption">
                    <p>Couples Fireplace</p>
                </div>
            </div>
            <div className="program">
                <img src={Prog3} alt="" />
                <div className="caption">
                    <p>Project Generations</p>
                </div>
            </div>
        </div>
    )
}

export default Programs