# Boilerplate Node with TypeScript

This is a Node project based on Rocketseat GoStack 11 bootcamp setted up with:
  **Code design pattern:**
  - Eslint
  - Prettier
  **Development tools:**
  - TypeScript;
  - ts-node-dev (watch and transpile TypeScript files);
  - TypeORM (an ORM to use with TypeScriot, setted up with postgres and mongo);
  - Jest;
  - VSCode debug;
  - JWT;
  - Redis;
  - Ethereal (for sending e-mail in development mode);
  - Multer (for local file upload);

  I'll be using it for creating Node projects based on Express as framework. Here you'll find just a main structure to not start a project from scratch. The directories architecture is based on DDD, so all you need it's just install the dependencies with `yarn` command and code your own routes, models, controllers, services and repository stuff. And remember it's just to get as reference and not start from scratch, you can allways remove what you won't use and / or add new stuff.

## Attention

  - Postgres is configured on `ormconfig.json` file in a non default port (5433), so if you want to use the default port (5432), remember to change this configuration.

  - Mongo was added into `ormconfig.json` file just to be used as cache, so if you won't use it, just remove it from the config file.
