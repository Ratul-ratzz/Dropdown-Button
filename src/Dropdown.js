import { useState } from 'react';



function Dropdown({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);  //hooks
    const options = ["Yes", "Probaly Not", "Somewhat"]; //options
    return (
        <div className="dropdown">
            <div className='dropdown-btn' onClick={(e) =>
                setIsActive(!isActive)}>
                <h4>Choose from dropdown</h4>
                {selected}

                {/* //From font awesome */}
                <span><i class="fa-solid fa-circle-chevron-down"></i> </span> 
            </div>
            {isActive && (
                <div className="dropdown-content">     
                    {options.map((option) => (  //Fetching the data
                        <div onClick={(e) => {
                            setSelected(option)
                            setIsActive(false)
                        }}
                            className='dropdown-item'>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}


export default Dropdown