
FROM node:latest

WORKDIR /src

# Copy all source files
COPY . .

# Install serve globally to serve the production build
RUN npm install -g serve

# Serve the build directory on port 8080
CMD ["serve", "-s", "build", "-l", "8080"]

# Expose the port
EXPOSE 8080
