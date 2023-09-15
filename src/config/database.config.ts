export default {
    host: process.env.DB_HOST || 'localhost',
    dbPort: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER || 'username',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'mydb',
  };

  console.log({"DB_HOST":process.env.DB_HOST})