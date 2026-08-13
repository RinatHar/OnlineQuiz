import { Center } from '@mantine/core';
import { Form } from './features/form';

import styles from './styles.module.css';



export function AuthPage() {
  return (
    <main>
      <Center className={ styles['main-block'] }>
        <Form />
      </Center>
    </main>
  ); 
}
