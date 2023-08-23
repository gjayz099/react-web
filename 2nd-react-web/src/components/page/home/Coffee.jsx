import React from 'react'
import axios from 'axios'

    const BestCoffe = [ /// Array Best coffee
        {  id : 1, catogory : 'Hot Coffee', name : 'CAFFE BLACK', pirce: 'P230', },
        {  id : 2, catogory : 'Hot Coffee', name : 'AMERICANO', pirce: 'P320', },
        {  id : 3, catogory : 'Hot Coffee', name : 'VANILLA LATTE', pirce: 'P290', },
        {  id : 4, catogory : 'Hot Coffee', name : 'ESPRESSO MACCHIATO', pirce: 'P300', },
        {  id : 5, catogory : 'Cold Coffee', name : 'ICED CAFFE MOCHA', pirce: 'P240', },
        {  id : 6, catogory : 'Cold Coffee', name : 'ICED SMOKED LATTE', pirce: 'P280', }
    ]
export default function Coffee() {
    
    const [ quotesdata, setquotesdata ] = React.useState([]);    //  Use State Declering Array

    React.useEffect(() => {
        const randomNum = Math.floor(Math.random() * 100) //Ramdon nuber up 1 to 100
        axios.get('https://dummyjson.com/quotes/' + randomNum)  // Url API  And Random Value
        .then(respone => { //Respone data
        setquotesdata(respone.data) //Declerinf Data Respone Api
        })
        .catch(error => { //error
        console.error('Error fetching data:', error) //Console Erroo
        })
    }, []);
    
    return (

    <section>
    <div className='container-best-coffee'>


        <div className='best-coffer-row'>
            <div className='item-best-coffee'>
                <div className='title-best-coffee'>
                    <h1>Best Coffee</h1>
                </div>
                <div className='allitems-coffee-best'>
                    {BestCoffe.map((item) => 
                    <div className='item-coffee-best'>
                        <div className='item-coffee-best-pic'>
                            <img src="https://img.icons8.com/offices/30/coffee--v2.png" alt="" />
                        </div>
                         
                        <div className='item-coffee-best-name'>
                            <h1>{item.name}</h1>
                        </div>
            
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className='item-coffee-best-price'>
                            <h6>{item.pirce}</h6>
                            <h6>{item.catogory}</h6>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            <div className='item-best-coffee'>
                <div className='quotesdata-title'>
                    <h1>Quotes</h1>
                </div>
                <div className='quotesdata'>
                    <h1>{quotesdata.quote}</h1>
                </div>

            </div>
        </div>
    </div>


    {/* */}
    </section>
  )
}
