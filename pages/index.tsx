import Head from 'next/head'
import Nav from './nav'
import Card from './card'
export default function Home() {
  return (
   <div>
      <Nav/>
      <div className='p-10'>
        <Card/>
        </div>  
   </div>
  )
}
