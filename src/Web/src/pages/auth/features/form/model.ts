import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const scheme = z.object({
  login   : z.string().min(1),
  password: z.string().min(8),
});

export type AuthFormType = z.infer<typeof scheme>;

export function useAuthForm() {
  const rhf = useForm({
    resolver     : zodResolver(scheme),
    defaultValues: {
      login   : '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = rhf.handleSubmit((data) => {
    console.log(data);
    
  });

  return ({ rhf, onSubmit });
}