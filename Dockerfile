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

# Expose the port
EXPOSE 8080

# Set the command to run the app using serve
CMD ["serve", "-s", "build", "-l", "8080"]