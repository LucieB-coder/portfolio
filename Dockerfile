FROM node:latest

WORKDIR /src

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Start NGINX
CMD ["npm", "run", "preview"]
