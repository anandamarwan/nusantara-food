# Nusantara Food

Nusantara Food API for listing various food in Indonesia

## Workflow

1. Choose and setup runtime and framework. Try to create simple backend REST API with just a variable, without database.
   - Runtime: Bun / Node.js
   - Framework: Hono / Express
2. Choose and setup database
   - Database: PostgreSQL / MySQL
   - ORM: Prisma / Drizzle
3. Setup and run database, for local and production
   - Docker & Docker Compose
   - Database on any server: VPS / Google Cloud / Amazon Web Services
   - Database as a Service (DBaaS): Neon / Supabase / Tembo
   - Database client: shell/terminal / TablePlus / DataGrip
4. Connect database to ORM
5. Write database schema
6. Create database migration or apply migration
7. Create API endpoints and use ORM functions in the application
8. Deploy to Platform as a Service (PaaS): Render / Railway / Heroku
9. Connect deployment to domain

## REST API Specification

- Production: <https://nusantara-food.anandamarwan.com>
- Local: <http://localhost:3000>

| Endpoint     | HTTP     | Description           | Implemented |
| ------------ | -------- | --------------------- | ----------- |
| `/foods`     | `GET`    | Get all foods         | ✅          |
| `/foods/:id` | `GET`    | Get one food by id    | ✅          |
| `/foods`     | `POST`   | Add new food          | ✅          |
| `/foods`     | `DELETE` | Delete all foods      | ✅          |
| `/foods/:id` | `DELETE` | Delete one food by id | ✅          |
| `/foods/:id` | `PUT`    | Update one food by id | ✅          |

## ERD

![ERD](./assets/erd.svg)

## Getting Started

To install dependencies:

```sh
bun install
```

Generate Prisma Client:

```sh
bun prisma generate
```

```sh
docker compose up
# or
docker compose up -d
```

To run:

```sh
bun run dev
```

Open <http://localhost:3000>
