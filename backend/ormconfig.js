module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'referrals',
  synchronize: true,
  entities: ['dist/**/entity{.ts,.js}'],
  repositories: ['dist/**/repository{.ts,.js}'],
  schema: 'public',
  cli: {
    entitiesDir: 'dist/**/',
    repositoriesDir: 'dist/**/',
  },
};
