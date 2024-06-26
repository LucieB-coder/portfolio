FROM node:latest

WORKDIR /src/app

# Install dependencies
COPY package*.json ./

RUN npm install

COPY . .

# Build app
RUN npm run build

EXPOSE 3000

# Run the app
CMD ["npm", "start"]
