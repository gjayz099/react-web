import React from 'react'

const galleryItemsdata = [
    [
        {id: 1, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&600x800',  },
        {id: 2, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&800x600',  },
        {id: 3, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?iauto=format&600x800',  },
        {id: 4, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1432107294469-414527cb5c65?&auto=format&800x600',  },
    ],
    [
        {id: 1, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&&800x600',  },
        {id: 2, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&600x800',  },
        {id: 3, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&800x600',  },
        {id: 4, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1542372147193-a7aca54189cd?&auto=format&600x800',  },
    ],
    [
        {id: 1, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1522120573867-e574959f84c8?&auto=format&600x800',  },
        {id: 2, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?&auto=format&800x600',  },
        {id: 3, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1494314671902-399b18174975?&auto=format&600x800',  },
        {id: 4, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?&auto=format&800x600',  },
    ],
    [
        {id: 1, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?=&auto=format&800x600',  },
        {id: 2, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?&auto=format&600x800',  },
        {id: 3, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1562447457-579fc34967fb?&auto=format&600x800',  },
        {id: 4, name: 'Coffee', linkImg: 'https://images.unsplash.com/photo-1475296204602-08d15839e95f?&auto=format&800x600',  },
    ]
]


export default function GalleryItems() {
  return (
    <section>
        <div className='container-galleryItem'>
            <div className='tittle-gallery'>
                <h1>GJ Coffee Gallery</h1>
            </div>
            <div className='gallery-items'>
            { galleryItemsdata.map((data, index) =>
                <div key={index} className='column-data'>
                { data.map(item => 
                    <div className='item-gallery'>
                        <img src={item.linkImg} alt="" />
                        <div className='caption-img-text'>
                            <h1>{item.name}</h1>
                        </div>
                    </div>
                )}
                </div>
            )}
            </div>
        </div>
    </section>
  )
}
