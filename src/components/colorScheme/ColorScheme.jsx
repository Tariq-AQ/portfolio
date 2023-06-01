import React from 'react'
import './colorScheme.css'

function ColorScheme({ schemeCaption, setSchemeCaption}) {
 
    const setDefault =()=>{
        document.querySelector('body').setAttribute('data-theme', 'default')
      }
      
      const setSummer =()=>{
        document.querySelector('body').setAttribute('data-theme', 'summer')
      }
      const setPeacock =()=>{
        document.querySelector('body').setAttribute('data-theme', 'peacock')
      }
      const setRose =()=>{
        document.querySelector('body').setAttribute('data-theme', 'rose')
      }
    
 const toggleScheme = (e)=>{
    if(e==='default'){setDefault()}
    else if(e==='summer'){setSummer()}
    else if(e==='peacock'){setPeacock()}
    else if(e==='rose'){setRose()}
    else{setDefault()}
 }
 
    return (
     
    <div className="color__scheme">
    <div className={schemeCaption?"color__caption":"color__caption-hidden"}>
        <p>{schemeCaption}</p>
       </div>
        <div className="scheme__title">Color Schemes</div>
        <div className="scheme__separator"></div>
        <div className="scheme__content">
            <div className="scheme__group">
               
                <div className="sheme__set" id='summer' onClick={()=>toggleScheme('summer')} onMouseOver={()=>setSchemeCaption('Summer')} onMouseLeave={()=>setSchemeCaption('')}>
                    <div style={{'background':'#cd5a24'}} className="primay__color"></div>
                    <div style={{'background':'#f58c3b'}} className="primay__color__varient"></div>
                    <div style={{'background':'#32201e'}} className="bg__color"></div>
                    <div style={{'background':'#a43627'}} className="bg__color__varient"></div>
                </div>
                <div className="sheme__set" id='peacock' onClick={()=>toggleScheme('peacock')} onMouseOver={()=>setSchemeCaption('Peacock')} onMouseLeave={()=>setSchemeCaption('')}>
                    <div style={{'background':'#3f002d'}} className="primay__color"></div>
                    <div style={{'background':'#a854aa'}} className="primay__color__varient"></div>
                    <div style={{'background':'#01253b'}} className="bg__color"></div>
                    <div style={{'background':'#006376'}} className="bg__color__varient"></div>
                </div>
                <div className="sheme__set" id='rose' onClick={()=>toggleScheme('rose')} onMouseOver={()=>setSchemeCaption('Rose')} onMouseLeave={()=>setSchemeCaption('')}>
                    <div style={{'background':'#8d596f'}} className="primay__color"></div>
                    <div style={{'background':'#cda1ba'}} className="primay__color__varient"></div>
                    <div style={{'background':'#283d3e'}} className="bg__color"></div>
                    <div style={{'background':'#6c6b4c'}} className="bg__color__varient"></div>
                </div>
                <div className="sheme__set" id='default' onClick={()=>toggleScheme('default')} onMouseOver={()=>setSchemeCaption('Default')} onMouseLeave={()=>setSchemeCaption('')}>
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