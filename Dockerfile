# Use a smaller base image (Alpine is much lighter than the default)
FROM node:20-alpine

WORKDIR /app

# Copy only the dependency files first
COPY package*.json ./

# Run install (Docker caches this layer unless package.json changes)
RUN npm install --production

# Now copy the rest of your source code
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]