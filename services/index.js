import { GraphQLClient, gql } from "graphql-request";

// create a graphql client
const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_ENDPOINT);

// get hero slides

// get offers

// get tour packages
export const getTourPackages = async () => {
  const query = gql`
    query TrendingDestinations {
      tourPackages(first: 10, orderBy: rank_ASC) {
        cover
        title
        slug
        duration
        link
        description {
          html
        }
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.tourPackages;
  } catch (error) {
    console.error("Error fetching tour packages:", error);
    return [];
  }
};

// get trending destinations
export const getTrendingDestinations = async () => {
  const query = gql`
    query TrendingDestinations {
      trendingDestinations(first: 10, orderBy: rank_ASC) {
        cover
        title
        country
        slug
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.trendingDestinations;
  } catch (error) {
    console.error("Error fetching trending destinations:", error);
    return [];
  }
};

// get gallery
export const getGallery = async () => {
  const query = gql`
    query HomeGallery {
      galleries(first: 1) {
        images
      }
    }
  `;

  try {
    const response = await graphQLClient.request(query);
    return response.galleries[0].images;
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return {};
  }
};
