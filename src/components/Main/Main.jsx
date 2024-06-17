import React, { useContext } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { context } from '../../context/context'
//AIzaSyCnc9hFIvviA4wib5h4xVbgViXEarmtM-U
const Main = () => {




    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input} =useContext(context)





  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src ={assets.user_icon} alt=''/>
        </div>
     <div className="main-container">
        {!showResult ?
        <>
         <div className="greet">
            <p><span>Hello,Dev.</span></p>
            <p>How can i help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>suggest beautiful places to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt='' />
            </div>
            <div className="card">
                <p>briefly summarize this concept:urban planning</p>
                <img src={assets.bulb_icon} alt='' />
            </div>
            <div className="card">
                <p>Brainstrom team bonding activities for work retreat</p>
                <img src={assets.message_icon} alt='' />
            </div>
            <div className="card">
                <p>Improve the readability of following code</p>
                <img src={assets.code_icon} alt='' />
            </div>
        </div>
        
        </>
         : 
        <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt=''/>
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt=''/>
                {loading
                ?
                <div className='loader'>
                <hr />
                <hr />
                <hr />
                </div>
                :
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                
            </div>


        </div>
        }
      
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type='text ' placeholder='Enter a prompt here'/>
                <div>
                    <img src={assets.gallery_icon} alt=''/>
                    <img src={assets.mic_icon} alt=''/>
                    {input
                    ?
                    <img onClick={()=> onSent()} src={assets.send_icon}  alt=''/>
                    : 
                    null}
                </div>
            </div>
            <p className='bottom-info'>
                Gemini may display inaccurate info,including about people,so double-chech its
            </p>
        </div>
     </div>
    </div>
  )
}

export default Main
