import { SyntheticEvent } from 'react';
import { LoginData } from '../../../model/user';
import { useUsers } from '../../hooks/use.users';
import styles from '../registerUser/registerForm.module.scss';
export function LoginForm() {
  const { login } = useUsers();
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const loginForm = ev.target as HTMLFormElement;

    const data: LoginData = {
      userName: (loginForm.elements.namedItem('userName') as HTMLInputElement)
        .value,
      password: (loginForm.elements.namedItem('password') as HTMLInputElement)
        .value,
    };
    login(data);
  };
  return (
    <>
      <form
        className={styles.loginForm}
        aria-label="login"
        onSubmit={handleSubmit}
      >
        <legend>SI YA ESTÁS REGISTRADO</legend>
        <input type="text" name="userName" placeholder="Nombre" required />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
