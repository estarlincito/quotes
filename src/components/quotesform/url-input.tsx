import Input from '@UI/input';
import Label from '@UI/label';

const UrlInput = () => {
  return (
    <>
      <Label title='Url' />
      <Input name='url' type='text' placeholder='Write quote url' />
    </>
  );
};

export default UrlInput;
