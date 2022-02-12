import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { useCardsStore } from '../../hooks/useCardsStore';
import { Card } from './components';
import { useQuery } from '@apollo/client';

import { Box } from '@mui/material';
import { Form } from '../Form';
import { GET_ALL_USERS, GET_ONE_USER } from '../../query/user';

export const Cards: React.FC = observer(() => {
  const { cards } = useCardsStore();

  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const { data: oneUser, loading: oneLoading } = useQuery(GET_ONE_USER, {
    variables: {
      id: 1,
    },
  });
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    if (!loading) {
      console.log(data);
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <>
      <Form />
      <Box display="flex" gap={10} pt={10} pl={10} flexWrap="wrap">
        {cards.map((el, i) => (
          <Box key={i}>
            <Card
              title={el.title}
              text={el.text}
              picture={el.picture}
              author={el.author}
              _id={el._id}
            />
          </Box>
        ))}
      </Box>
      {loading ? (
        <div>Loading...</div>
      ) : (
        users.map((el: any) => (
          <div key={el.id}>
            {el.id}. {el.username}
          </div>
        ))
      )}
      {error && <div>{JSON.stringify(error)}</div>}
    </>
  );
});
