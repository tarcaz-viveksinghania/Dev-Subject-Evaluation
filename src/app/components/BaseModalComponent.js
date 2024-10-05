import React, { Children } from 'react'

const BaseModalComponent = ({isActive, onClose, children}) => {
    
    if (!isActive) return null;
        
    const dismissSelf = (e) => {
        if(e.target.id === "modal"){
            onClose();
        }    
    }
    
    return (
        <div onClick={(e) => dismissSelf(e)}
             className="absolute z-20 insert-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex justify-center items-center"
             id="modal">  
                 {children}
        </div>     
    )

}

      
export default BaseModalComponent
