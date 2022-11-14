
import {gql} from 'graphql-request'

 export const blog_data = gql
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
      slug
    }
  }
  
   `