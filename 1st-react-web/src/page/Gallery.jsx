import React from 'react'
import { useState } from 'react'
import { BiX } from 'react-icons/bi'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

// img
import picgallery1 from '../img/gallery/picgallery1.jpg'
import picgallery2 from '../img/gallery/picgallery2.jpg'
import picgallery3 from '../img/gallery/picgallery3.jpg'
import picgallery4 from '../img/gallery/picgallery4.jpg'
import picgallery5 from '../img/gallery/picgallery5.jpg'
import picgallery6 from '../img/gallery/picgallery6.jpg'


export default function Gallery() {
  

  // use stast
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // array gallery
  const GalleryItems = [
    { id: 1, pic: picgallery1, name: 'TOUR-DETAILS'},
    { id: 2, pic: picgallery2, name: 'TOUR-DETAILS'},
    { id: 3, pic: picgallery3, name: 'TOUR-DETAILS'},
    { id: 4, pic: picgallery4, name: 'TOUR-DETAILS'},
    { id: 5, pic: picgallery5, name: 'TOUR-DETAILS'},
    { id: 6, pic: picgallery6, name: 'TOUR-DETAILS'},
  ]


  // use stast fucntion
  //open modal
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  }
  // close modal
  const closeModal = () => {
    setSelectedImageIndex(0);
    setModalIsOpen(false);
  }

  //next image
  const navigate = (step) => {
    const newIndex = (selectedImageIndex + step + GalleryItems.length) % GalleryItems.length;
    setSelectedImageIndex(newIndex);
  }

  // map array gallery
  const galleryimg = GalleryItems.map((imgGallery, index) => 
    <div className='items-gallery' key={index}>
      <div className='img-item-gal' alt={`Image ${index}`} onClick={() => openModal(index)}>
        <img src={imgGallery.pic} />
      </div>
      <div className='text-gallery'>
        <h1>{imgGallery.name}</h1>
      </div>


    <div className={modalIsOpen? "custom-modal hide-modal" : "custom-modal"}>
      <div className="modal-content">

        <BiX className='close-button' onClick={closeModal}  />
        <img src={GalleryItems[selectedImageIndex].pic} alt="Popup" className="lightbox-image" />

        <AiOutlineArrowLeft className="nav-button left-button" onClick={() => navigate(-1)}/>

        <AiOutlineArrowRight className="nav-button right-button" onClick={() => navigate(1)}/>
      </div>
    </div>

    </div>
  )

  return (
    <section id='Gallery'>
      <div className='row-gallery'>
        {galleryimg}
      </div>
   
    </section>
  )
}

