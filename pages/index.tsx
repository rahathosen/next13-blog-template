import Head from 'next/head'
import Nav from './nav'
import Image from 'next/image'
import type { GetStaticProps } from 'next'
import graphQLClient  from '../GraphQL/graphQLClient'
import { blog_data } from '../GraphQL/queris'
import Card from './Components/Card'


export const getStaticProps:GetStaticProps = async ()=>{

const data = await graphQLClient.request(blog_data);
  return {
    props:{
      data,
    },
    // revalidate: 10,

  };
}
const Home = ({data}:any)=> {
  // console.log(data);
  return (
   <div>    
      <Nav />
      <div className='p-10'>

        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {data.posts.map((post:any)=>(
          <Card key={post.id} title={post.title} slug={post.slug} image={post.image} description={post.description.slice(0,30)} /> 
        ))}
       </div>
        </main>
        </div> 
        <div>
    </div> 
   </div>
   
  )
}

export default Home