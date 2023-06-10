import Input from '@UI/input';
import Label from '@UI/label';

const TitleInput = () => {
  return (
    <>
      <Label title='Title' />
      <Input name='title' type='text' placeholder='Write quote title' />
    </>
  );
};

export default TitleInput;
