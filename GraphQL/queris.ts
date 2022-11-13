
import {gql} from 'graphql-request'

 export const blog_data = gql
  `  
  {
    categories{
      name
    }

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