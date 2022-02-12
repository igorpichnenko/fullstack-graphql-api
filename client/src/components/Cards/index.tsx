import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { useCardsStore } from '../../hooks/useCardsStore';
import { Card } from './components';
import { useQuery } from '@apollo/client';

import { Box } from '@mui/material';
import { Form } from '../Form';
import { GET_ALL_POST, GET_ONE_POST } from '../../query/post';

export const Cards: React.FC = observer(() => {
  const { data, loading, error } = useQuery(GET_ALL_POST);
  /*  const { data: oneUser, loading: oneLoading } = useQuery( GET_ONE_POST, {
    variables: {
      id: 1,
    },
  }); */
  const [cards, setCards] = useState<any>([]);

  useEffect(() => {
    console.log(data);
    if (!loading) {
      setCards(data.getAllPost);
    }
  }, [data]);

  return (
    <>
      <Form />
      <Box display="flex" gap={10} pt={10} pl={10} flexWrap="wrap">
        {cards.map((el: any, i: any) => (
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
    </>
  );
});
