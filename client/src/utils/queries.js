import { gql } from '@apollo/client';


export const QUERY_USER = gql`
 query users {
     users {
     _id
     userName
     email
     password
     coins {
         _id
         name
     }
     }
 }
`;

export const QUERY_COIN = gql`
 query coins {
     _id
     name
 }
`;

