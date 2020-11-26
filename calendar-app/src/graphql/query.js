import { gql } from '@apollo/client';

export const EVENT_LIST = gql`
  query EventListQuery {
    events {
      id
      title
      date
    }
  }
`;

export const EVENT_GET = gql`
  query EventGetQuery($id: ID!) {
    event(id: $id) {
      id
      title
      date
    }
  }
`;