#!/bin/bash

npm install
npx prisma migrate deploy
npx prisma generate
npm run build
npm run start:dev
