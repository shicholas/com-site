# Neon Law Website

## Getting Started

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This app is deployed on CloudFlare upon pushes to the `main` branch.

## Pulling the schema

This app uses Hygraph a headless GraphQL API to speak with the application. You will only need to run this command if
the Hygraph schema itself changes.

```bash
yarn run get-graphql-schema https://api-us-west-2.hygraph.com/v2/cleh5w2581mb901t6boooai0m/master > schema.graphql
```
