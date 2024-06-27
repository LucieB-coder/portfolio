
FROM node:latest

WORKDIR /src

# Serve the build directory on port 8080
CMD ["npm", "run", "preview", "--host"]

# Expose the port
EXPOSE 8080
