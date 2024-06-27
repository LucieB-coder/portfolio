
FROM node:latest

WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Copy all source files
COPY . .

# Install serve globally to serve the production build
RUN npm install -g serve

# Serve the build directory on port 8080
CMD ["serve", "-s", "dist", "-l", "8080"]

# Expose the port
EXPOSE 8080
