
FROM node:latest

WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the app
RUN npm run build

# Install serve globally to serve the production build
RUN npm install -g serve

# Serve the build directory on port 8080
CMD ["npm", "run", "preview", "--host"]

# Expose the port
EXPOSE 8080
