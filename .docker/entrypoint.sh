#!/bin/bash

npm install
npx prisma migrate deploy
npm run build
npm run start:dev
