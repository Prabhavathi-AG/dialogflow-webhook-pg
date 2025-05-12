# 1. Pick an official Node.js LTS image
FROM node:20

# 2. Set your working directory
WORKDIR /usr/src/app

# 3. Copy package.json & package-lock.json (if present)
COPY package*.json ./

# 4. Install only production deps
RUN npm install --only=production

# 5. Copy the rest of your code
COPY . .

# 6. Tell Docker how to start your app
CMD ["node", "index.js"]
