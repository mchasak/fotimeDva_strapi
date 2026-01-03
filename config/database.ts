export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env.bool('DATABASE_SSL', false) && {
        rejectUnauthorized: false,
      },
    },
  },
});

// export default ({ env }) => ({
//   connection: {
//     client: env('DATABASE_CLIENT', 'sqlite'),
//     connection:
//       env('DATABASE_CLIENT') === 'sqlite' ? { filename: env('DATABASE_FILENAME', '.tmp/data.db')} : {connectionString: env('DATABASE_URL'), ssl: env.bool('DATABASE_SSL', false) && {rejectUnauthorised: false},}, 
//   }
// })
