import { useState } from 'react'
import OurButton from '../components/OurButton'
import { EXAMPLES, CORE_CONCEPTS } from '../data/coreConcepts'
import Card from '../components/card/card'
export const Events = () => {
    const [myContent, setMyContent] = useState('components');

    
    function content(subject){
      setMyContent(subject)
    }

  return (
    <div>  <h5>Eventos</h5>
        <div className='container'>
        {CORE_CONCEPTS.map((item, count) => 
        <Card
        key={count}
        {...item}
        />
        )}
      </div>

    


      <h3>Eventos Dinâmicos</h3>
      <menu>
        <OurButton isActive={myContent =='jsx'} clickFunction={()=>content('jsx')} >JSX</OurButton>
        <OurButton isActive={myContent =='props'}   clickFunction={()=>content('props')}>Props</OurButton>
        <OurButton isActive={myContent =='state'} clickFunction={()=>content('state')}>State</OurButton>
      </menu>
      <div>
        <h5>Título:{EXAMPLES[myContent].title? EXAMPLES[myContent].title :myContent}</h5>
        <p>Descrição:{EXAMPLES[myContent].description}</p>
      </div>
</div>
  )
}
