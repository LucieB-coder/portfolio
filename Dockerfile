
FROM node:latest

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the app
RUN npm run build -- --base=/containers/luciebedouret-portfolio/

# Install serve globally to serve the production build
RUN npm install -g serve

# Serve the build directory on port 8080
CMD ["serve", "-s", "build", "-l", "8080"]

# Expose the port
EXPOSE 8080
