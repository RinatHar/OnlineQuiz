import { Button, Card, Input, PasswordInput, Stack, Title } from '@mantine/core';
import { useAuthForm } from './model';





export function Form() {
  const { rhf, onSubmit } = useAuthForm();

  return (
    <Card shadow='sm' w={ 400 } withBorder padding={ 'lg' }>
      <form onSubmit={ onSubmit }>
        <Stack>
          <Title order={ 1 } ta={ 'center' } >QWIZ</Title>
          <Input
            { ...rhf.register('login') }
            placeholder='Email'
          />

          <PasswordInput
            { ...rhf.register('password') }
            placeholder='Password'
          />

          <Button type='submit'>Login</Button>
        </Stack>
      </form>
    </Card>
  ); 
}