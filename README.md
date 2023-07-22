# Express Sequelize Boilerplate

Boilerplate application for express with Sequelize

## Pre requisites

- Node 16.0

## Install dependencies

```
npm install or npm i
```

## Start Server

```
npm start
```

Or

```
npm run start:dev (hot reloading)
```

## Tail Logs

```
npm run logs
```

## Stop app

```
npm run stop
```

## Lint

```
> npm run lint
> npm run prettier
```

## Config

- For development, define required variables in `config/environments/development.json`
- For production, define required variables as environment variable in remote setup.

## Create Migration

```
npm run db:migrate:create migration-name
```

## Run Migration

```
npm run db:migrate
```

## Undo Migration

```
npm run db:migrate:undo
```

## Step by step procedure

- Clone the repo in your local machine
- Install dependencies by running `npm i` command and then `npm prepare`
- Create a `.env` file in the root folder, paste the contents of `.env.example` and modify the values as per your requirements
- Run migrations by running `npm run db:migrate` command
- Run the server using `npm start` or `npm run start:dev` commands

