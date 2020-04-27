module.exports = {
    client: "sqlite3",
	useNullAsDefault: true,
    connection: {
      filename: "./data/car-dealer.db",
    },
    migrations: {
      directory: "./data/migrations",
      tableName: "knex_migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
};
