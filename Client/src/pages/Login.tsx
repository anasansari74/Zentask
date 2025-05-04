import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Using Zod for form validation as it is cleaner, re-usable and type-safe
import * as z from 'zod';

import { TextField, Button, Stack, Typography, Switch, FormControlLabel, Divider } from '@mui/material';
import { GitHub as GitHubIcon, Google as GoogleIcon, Apple as AppleIcon } from '@mui/icons-material';

// Schema remains the same
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string().min(3).optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(
      isLogin 
        ? formSchema.omit({ username: true })  
        : formSchema                           
    ),
  });

  const onSubmit = (data: FormData) => {
    console.log(data); // Replace with your API call
  };

  return (
    <Stack spacing={3} sx={{ maxWidth: 280, margin: 'auto', p: 4, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h4" textAlign="center">
        {isLogin ? 'Login' : 'Sign Up'}
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          {!isLogin && (
            <TextField
              label="Username"
              {...register('username')}
              error={!!errors.username}
              helperText={errors.username?.message}
              fullWidth
            />
          )}
          <TextField
            label="Email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth>
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </Stack>
      </form>

      <FormControlLabel
        control={<Switch checked={!isLogin} onChange={() => setIsLogin(!isLogin)} />}
        label={isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      />

      <Divider>OR</Divider>

      <Stack direction="row" spacing={2} justifyContent="center">
  {/* GitHub */}
  <Button 
    variant="outlined" 
    sx={{ minWidth: 40, px: 1 }} 
    // onClick={() => signInWithGitHub()}
  >
    <GitHubIcon fontSize="small" />
  </Button>

  {/* Google */}
  <Button 
    variant="outlined" 
    sx={{ minWidth: 40, px: 1 }}
    // onClick={() => signInWithGoogle()}
  >
    <GoogleIcon fontSize="small" />
  </Button>

  {/* Apple */}
  <Button 
    variant="outlined" 
    sx={{ minWidth: 40, px: 1 }}
    // onClick={() => signInWithApple()}
  >
    <AppleIcon fontSize="small" />
  </Button>
</Stack>
    </Stack>
  );
}