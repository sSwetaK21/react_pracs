import React, { useState } from "react"

function ShareBtn() {
    const dummyData =[
        {email:"shweta@gmail.com"},
        {email:"shwetakodam@gmail.com"},
        {email:"amit@gmail.com"},
        {email:"ketan@gmail.com"},
        {email:"pawan@gmail.com"},
    ]

    const [modal, setmodal] = useState(false);
    const [input, setinput] = useState('')

    const toggleModal = () => {
        setmodal(!modal)
    }

    return (
        <div className="container">
            <button type="button" className="share" onClick={toggleModal}>Share</button>

            {modal && (
                <div className="shareModal" >
                        <div>
                        <input type="text" placeholder="Enter here..." value={input} onChange={(e)=> setinput(e.target.value)}></input>
                        <button type="submit" className="blueBtn">Invite</button>
                            </div>
                        <textarea ></textarea>
                        <div>
                        <button type="submit " className="Btn">Submit</button>
                        <button type="button "  className="Btn redbtn" onClick={toggleModal}>Close</button>
                            </div>
                </div>
            )}


        </div>
    )
}
export default ShareBtn;