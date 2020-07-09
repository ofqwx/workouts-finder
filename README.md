## Gymondo Fullstack - Frontend Engineer

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Deployed version

You can take a look at the demo here: https://workouts-finder.vercel.app/

### Running locally

By default this project will try to use a mongodb database from [mongo lab](https://mlab.com/), you can create one for free for development purpuse. So make sure you have your `.env.local` with the next data:
```
DB_USERNAME=<your_db_username_here>
DB_PASSWORD=<your_password_here>
DB_NAME=<db_name>
```

If you want to use a different mongodb server, just need to edit the connection chain in [Data Source](data/DataSource.ts)

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
