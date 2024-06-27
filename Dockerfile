# Use a Node.js base image
FROM node:latest

# Create app directory
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
CMD ["serve", "-s", "dist", "-l", "8080", "--mime-type", "application/javascript"]

# Expose the port
EXPOSE 8080
