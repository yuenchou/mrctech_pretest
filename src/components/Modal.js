import React from 'react'
import { MdClose } from 'react-icons/md'

function Modal({showModal, setShowModal, currentImg}) {
    return (
        <>
            {showModal && 
                <div className="modalbg">
                    <img src={currentImg} alt="product"/>
                    <MdClose className="closeIcon" onClick={() => setShowModal(prev => !prev)}/>
                </div>
            }
        </>
    )
}

export default Modal
