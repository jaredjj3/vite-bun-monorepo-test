# syntax=docker/dockerfile:1.7-labs
FROM oven/bun:1.2.2

WORKDIR /app

# Install dependencies
COPY package.json .
COPY bun.lock .
COPY --parents apps/*/package.json ./
COPY --parents packages/*/package.json ./
RUN bun install

# Copy the rest of the files
COPY apps/ apps/
COPY packages/ packages/

WORKDIR /app/apps/web

CMD [ "bun", "run", "dev" ]
