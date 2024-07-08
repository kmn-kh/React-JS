import { useState } from 'react'
import './App.css'
import Section_1 from './components/Section_1'
import Section_2 from './components/Section_2'
import Section_3 from './components/Section_3'
import Section_4 from './components/Section_4'
import Section_5 from './components/Section_5'
import Section_6 from './components/Section_6'
import Section_7 from './components/Section_7'
import Section_8 from './components/Section_8'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='w-full h-auto min-h-screen'>
      {/* Section 1 */}
      <Section_1/>
      {/* /Section 1 */}
      
      {/* Section 2 */}
      <Section_2/>
      {/* /Section 2 */}
      
      {/* Section 3 */}
      <Section_3/>
      {/* /Section 3 */}
      
      {/* Section 4 */}
      <Section_4/>
      {/* /Section 4 */}
      
      {/* Section 5 */}
      <Section_5/>
      {/* /Section 5 */}
      
      {/* Section 6 */}
      <Section_6/>
      {/* /Section 6 */}
      
      {/* Section 7 */}
      <Section_7/>
      {/* /Section 7 */}
      
      {/* Section 8 */}
      <Section_8/>
      {/* /Section 8 */}
    </div>
  )
}

export default App
