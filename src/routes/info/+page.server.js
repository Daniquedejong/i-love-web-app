import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';
 
export async function load() {
    let query = gql`
    query MyQuery {
        infos {
          infoInfo {
            html
          }
          infoTitle
        }
      }   
    `;
 
    const result = await hygraph.request(query);
    // console.log('Opgehaalde data:', result); // Console.log om de opgehaalde data te zien
    return result;
}
