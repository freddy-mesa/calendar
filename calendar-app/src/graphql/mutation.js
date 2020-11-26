import { gql } from '@apollo/client';

export const EVENT_CREATE = gql`
  mutation EventCreateMutation($data: InputEvent!) {
    createEvent(data: $data) {
      id
      title
      date
    }
  }
`;

export const EVENT_UPDATE = gql`
  mutation EventUpdateMutation($data: InputEvent!) {
    updateEvent(data: $data) {
      id
      title
      date
    }
  }
`;

export const EVENT_DELETE = gql`
  mutation EventDeleteMutation($id: ID!) {
    id : deleteEvent(id: $id)
  }
`;