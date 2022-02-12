import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Label } from './styles';
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../mutations/post';

export const Form = observer(() => {
  const [newPost] = useMutation(CREATE_POST);

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setPicture] = useState<Blob>();

  const handleSubmit = () => {
    /* createCard({ author, title, text, image }); */
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
