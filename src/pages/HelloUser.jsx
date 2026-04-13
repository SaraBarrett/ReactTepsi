import { useParams } from 'react-router-dom'

export const HelloUser = () => {
let {name} = useParams();

  return (
    <div>Hello {name}</div>
  )
}
