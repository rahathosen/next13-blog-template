import Head from 'next/head'
import Nav from './nav'
import Card from './card'
import type { GetStaticProps,NextPage } from 'next'
import { GraphQLClient,gql } from 'graphql-request'


export const getStaticProps:GetStaticProps = async ()=>{
  const endpoint = process.env.PREVIEW_ENDPOINT;
  const graphQLClient = new GraphQLClient(endpoint as string)

  const query = gql
  `  
  {
    posts{
      id,
      title
      image
      description
      created
      published
      updated 
    }
  }
  
   `
const data = await graphQLClient.request(query);

  return {
    props:{data}
  };
}
const Home:NextPage =({data}:any)=> {
// console.log(data);
  return (
   <div>
      <div>
      <Nav/>
      </div>
      <div className='p-10'>
        {/* <Card/> */}
        </div> 
        <div>
      <h1 className='mx-5'>Blog Posts</h1>
      <div className='flex flex-wrap'>
      

      {data.posts.map((post:any) => (
        <div key={post.id}>
          <div className='flex flex-col bg-slate-200 p-5 rounded-md  m-5'>
          <h1>{post.id}</h1>
          <h1 className='font-bold'>{post.title}</h1>
         <h1> created: {post.created}</h1>
         {(post.published)? <p>published: true</p>: <p>published: false</p>}
         <h1> updated: {post.updated}</h1>
         <p>Description: {post.description}</p>
         <img src={post.image} alt='' />
         
          </div>
           </div>
      ))}
     
    </div>
    </div> 
   </div>
   
  )
}

export default Home