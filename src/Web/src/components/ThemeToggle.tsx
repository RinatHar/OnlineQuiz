import { useMantineColorScheme, Button } from '@mantine/core';

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <Button onClick={ () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark') }>
      {colorScheme === 'dark' ? 'Тёмная' : 'Светлая'}
    </Button>
  );
}