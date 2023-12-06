## Installation

Clone dulu repo nya

## install dependency

```bash
$ npm install
```

## buat file .env

```
DATABASE_URL="mysql://USERNAME:PASSWORD@HOSTNAME:PORT/DATABASE"
```

## Running the app

```bash
npm run start:dev
```

## Migrasi database

```
npx prisma migrate dev
```

## jika migrasi gagal

```
npx prisma db push
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
