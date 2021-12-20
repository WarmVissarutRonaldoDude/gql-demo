import { gql, useQuery } from "@apollo/client";

export const customerFragment = gql`
  fragment CustomerFragment on Customer {
    profile {
      email

      firstName
      lastName
    }

    bookings {
      id
    }
  }
`;

export const tradieFragment = gql`
  fragment TradieFragment on Tradie {
    profile {
      email

      firstName
      lastName
    }

    acceptedBookings {
      id
    }
  }
`;

export const GET_MY_USER_QUERY = gql`
  ${customerFragment}
  ${tradieFragment}

  query getMyUser {
    myUser {
      ...TradieFragment
      ...CustomerFragment
    }
  }
`;

type User = {
  profile: {
    email: string;
    firstName: string;
    lastName: string;
  };
};

export type Tradie = User & { acceptedBookings: unknown[] };
export type Customer = User & { bookings: unknown[] };

export const getMyUser = (): {
  loading: boolean;
  error: Error;
  data: Tradie | Customer;
} => {
  const { loading, data, error } = useQuery(GET_MY_USER_QUERY, {
    variables: {},
    fetchPolicy: "cache-and-network",
  });

  return {
    loading,
    data: data?.myUser,
    error,
  };
};
