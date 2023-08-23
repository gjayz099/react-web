import React from 'react'
  // data array
  const coffeeMenu = [
    { id: 1, catogory: 'Hot Coffee', name: 'CAFFE BLACK', price: 'P230', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 2, catogory: 'Cold Coffee', name: 'ICED CAFFE MOCHA', price: 'P240', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 3, catogory: 'Hot Coffee', name: 'ESPRESSO MACCHIATO', price: 'P300', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 4, catogory: 'Cold Coffee', name: 'ICED SMOKED LATTE', price: 'P280', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 5, catogory: 'Hot Coffee', name: 'CAFFE MOCHA', price: 'P320', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 6, catogory: 'Cold Coffee', name: 'ESPRESSO', price: 'P290', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 7, catogory: 'Hot Coffee', name: 'VANILLA LATTE', price: 'P290', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 8, catogory: 'Cold Coffee', name: 'Mocha', price: 'P250', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 9, catogory: 'Hot Coffee', name: 'AMERICANO', price: 'P320', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 10, catogory: 'Cold Coffee', name: 'MACCHIATO ', price: 'P300', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 11, catogory: 'Hot Coffee', name: 'CAFE LATTE', price: 'P280', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
    { id: 12, catogory: 'Hot Coffee', name: 'CAPPUCCINO', price: 'P290', parag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', link: 'Buy Coffee', },
  ]
export default function CoffeeMenu() {

    const [ coffeeData, setcoffeeData ] = React.useState([])
    const [ coffeecollection, setcoffeecollection] = React.useState([])

    React.useEffect(() => {
      setcoffeeData(coffeeMenu) // Deactivate all active
      setcoffeecollection([... new Set(coffeeMenu.map((item) => item.catogory))]) // map Catogory Data
    }, [])

    const coffeeMenuFilter = (itemDataCoffee) => {
      const filterDatacoffee = coffeeMenu.filter((item) => item.catogory == itemDataCoffee) // Declaring Fillter virable
      setcoffeeData(filterDatacoffee) // Deactivate if filter active
    }

  return (
  <section>
    <div className='container-home-coffee-menu'>
        <div className='coffer-menu-title'>
          <h1>Coffee Menu</h1>
        </div>

        <ul className='link-click-coffee'>
            <li>
                <a onClick={ () => setcoffeeData(coffeeMenu)}>All Coffeee</a>
            </li>
            {
                coffeecollection.map((item) => <li><a onClick={() => {coffeeMenuFilter(item)}}>{item}</a></li>)
            }
        </ul>
        <div className='coffee-row'>
            {
            coffeeData.map((item) => 
            <div className='coffee-menu-item'>
                <div key={item.id} className='coffeeItem-img'>
                    <img src='https://img.icons8.com/offices/30/coffee--v2.png' />
                </div>
                <div className='name-coffee-menu'>
                    <h1>{item.name}</h1>
                </div>
                <p>{item.parag}</p>
                <div className='price-coffee-menu'>
                    <h6>{item.price}</h6>
                    <h6>{item.catogory}</h6>
                </div>
            </div>
            )}
        </div>
    </div>



  

  </section>
  )
}
