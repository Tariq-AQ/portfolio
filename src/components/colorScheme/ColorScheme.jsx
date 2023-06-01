import React from 'react'
import './colorScheme.css'

function ColorScheme({setCurrentScheme, schemeCaption, setSchemeCaption}) {
  return (
     
    <div className="color__scheme">
    <div className={schemeCaption?"color__caption":"color__caption-hidden"}>
        <p>{schemeCaption}</p>
       </div>
        <div className="scheme__title">Color Schemes</div>
        <div className="scheme__separator"></div>
        <div className="scheme__content">
            <div className="scheme__group">
               
                <div className="sheme__set" id='summer' onClick={()=>setCurrentScheme('summer')} onMouseOver={()=>setSchemeCaption('Summer')} onMouseLeave={()=>setSchemeCaption('')}>
                    <div style={{'background':'#cd5a24'}} className="primay__color"></div>
                    <div style={{'background':'#f58c3b'}} className="primay__color__varient"></div>
                    <div style={{'background':'#32201e'}} className="bg__color"></div>
                    <div style={{'background':'#a43627'}} className="bg__color__varient"></div>
                </div>
                <div className="sheme__set" id='peacock' onClick={()=>setCurrentScheme('peacock')} onMouseOver={()=>setSchemeCaption('Peacock')} onMouseLeave={()=>setSchemeCaption('')}>
                    <div style={{'background':'#3f002d'}} className="primay__color"></div>
                    <div style={{'background':'#a854aa'}} className="primay__color__varient"></div>
                    <div style={{'background':'#01253b'}} className="bg__color"></div>
                    <div style={{'background':'#006376'}} className="bg__color__varient"></div>
                </div>
                <div className="sheme__set" id='rose' onClick={()=>setCurrentScheme('rose')} onMouseOver={()=>setSchemeCaption('Rose')} onMouseLeave={()=>setSchemeCaption('')}>
                    <div style={{'background':'#8d596f'}} className="primay__color"></div>
                    <div style={{'background':'#cda1ba'}} className="primay__color__varient"></div>
                    <div style={{'background':'#283d3e'}} className="bg__color"></div>
                    <div style={{'background':'#6c6b4c'}} className="bg__color__varient"></div>
                </div>
                <div className="sheme__set" id='default' onClick={()=>setCurrentScheme('default')} onMouseOver={()=>setSchemeCaption('Default')} onMouseLeave={()=>setSchemeCaption('')}>
                    <div style={{'background': '#f8b300'}} className="primay__color"></div>
                    <div style={{'background': '#c77000'}} className="primay__color__varient"></div>
                    <div style={{'background': '#00293b'}} className="bg__color"></div>
                    <div style={{'background': '#006080'}} className="bg__color__varient"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ColorScheme