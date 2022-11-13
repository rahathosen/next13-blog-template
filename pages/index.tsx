import Head from 'next/head'
import Nav from './nav'
import Card from './card'
import Image from 'next/image'
import type { GetStaticProps } from 'next'
import graphQLClient  from '../GraphQL/graphQLClient'
import { blog_data } from '../GraphQL/queris'


export const getStaticProps:GetStaticProps = async ()=>{

const data = await graphQLClient.request(blog_data);
  return {
    props:{data}
  };
}
const Home = ({data}:any)=> {
// console.log(data);
  return (
   <div>
      <div>
      <Nav />
      </div>
      <div className='p-10'>
        <Card {...data}/>
        </div> 
        <div>
    </div> 
   </div>
   
  )
}

export default Home