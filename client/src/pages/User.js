// import React from 'react';
// import { Redirect, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// // import { QUERY_USER } from '../utils/queries';


// // import ThoughtForm from '../components/ThoughtForm';
// // import ThoughtList from '../components/ThoughtList';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';

// import Auth from '../utils/auth';

// // const User = () => {
// //   const { username: userParam } = useParams();


// //   const { loading, data, error } = useQuery(QUERY_USER)

// //   const user = data?.users || [];

// //   console.log(data)
//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { username: userParam },
//   });

//   const user = data?.me || data?.user || {};
//   // redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
//     return <Redirect to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }

//   return (
//     <div>

//       {/* {
//         loading?<p>Loading</p> : data?<p>{JSON.stringify(data.users)}</p>: error?<p>{JSON.stringify(error)}</p> : null


//       } */}

//       {/* <div className="flex-row justify-center mb-3">
//         <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
//           Viewing {userParam ? `${user.username}'s` : 'your'} CryptoCurrency Page.
//         </h2>

//         <div className="col-12 col-md-10 mb-5">
//           <ThoughtList
//             thoughts={user.thoughts}
//             title={`${user.username}'s thoughts...`}
//             showTitle={false}
//             showUsername={false}
//           />
//         </div>
//         {!userParam && (
//           <div
//             className="col-12 col-md-10 mb-3 p-3"
//             style={{ border: '1px dotted #1a1a1a' }}
//           >
//             <ThoughtForm />
//           </div>
//         )}
//       </div> */}
//     </div>
//   );
    

// export default User;