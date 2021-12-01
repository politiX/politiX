import fetch from 'isomorphic-fetch';
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://politix-strapi.herokuapp.com/graphql',
        fetch: fetch
    })
});

export default client;


//   https://api.spacex.land/graphql/