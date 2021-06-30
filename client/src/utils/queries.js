import { gql } from '@apollo/client';


export const QUERY_ = gql`
 query
`

export const QUERY_USER = gql`
 query users {
     _id
     username
     email
     password
     coins
 }
`;

