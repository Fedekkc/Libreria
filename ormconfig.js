module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "libreria",
    "synchronize": true,
    "entities": [
      "src/entity/*.js"
    ],
    "subscribers": [
      "src/subscriber/*.js"
    ],
    "migrations": [
      "src/migration/*.js"
    ],
    "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
    }
  }