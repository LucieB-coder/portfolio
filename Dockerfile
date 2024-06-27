
FROM node:latest

WORKDIR /src

# Copy build files
COPY . .

# Serve the build directory on port 8080
CMD ["npm", "run", "preview", "--host"]

# Expose the port
EXPOSE 8080
