import shoppingList from '../data/shoppingList'
import { ShoppingItem } from '../components/ShoppingItem'
import { Link } from 'react-router-dom'

export const Shopping = () => {
  return (
    <div>

  {shoppingList.map((item, count) =>
      <ShoppingItem
       key={count}
        {...item}
      />
      )}

    <Link to="/">Home</Link>
    </div>
  )
}
