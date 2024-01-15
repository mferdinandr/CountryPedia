// import { defineConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({

//   plugins: [react()],
//   define: {
//     VITE_APP_API: JSON.stringify(env.VITE_APP_API),
//   },
// });

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      VITE_APP_API: JSON.stringify(env.VITE_APP_API),
    },
  };
});
