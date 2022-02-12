import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Label } from './styles';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../mutations/user';

export const Form = observer(() => {
  const [newUser] = useMutation(CREATE_USER);

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [age, setAge] = useState(0);
  const [image, setPicture] = useState<Blob>();

  const handleSubmit = () => {
    console.log(author, age);
    /* createCard({ author, title, text, image }); */
    newUser({
      variables: {
        input: {
          username: author,
          age,
        },
      },
    }).then(({ data }) => {
      console.log(data);
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    if (file) {
      const blobFile = new Blob([file], { type: file.type });
      setPicture(blobFile);
    }
  };

  return (
    <form>
      <Box ml={10} mt={10}>
        <Box display="flex" flexDirection="column" gap={2} width={300}>
          <Label>
            Author
            <input
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
              value={author}
            />
          </Label>
          <Label>
            Title
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </Label>
          <Label>
            Age
            <input
              type="number"
              onChange={(e) => setAge(Number(e.target.value))}
              value={age}
            />
          </Label>
          <Label>
            Content
            <textarea
              rows={5}
              cols={25}
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </Label>
          <Label>
            Picture
            <input name="picture" type="file" onChange={handleFileChange} />
          </Label>
        </Box>
        <Box mt={3}>
          <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Добавить карточку
          </Button>
        </Box>
      </Box>
    </form>
  );
});
