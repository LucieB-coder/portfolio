# Stage 1: Build the Next.js application
FROM node:latest AS builder

WORKDIR /src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Serve the Next.js application with NGINX
FROM nginx:latest

# Copy the built Next.js application to the NGINX HTML directory
COPY --from=builder /src/app/.next /usr/share/nginx/html/.next
COPY --from=builder /src/app/public /usr/share/nginx/html

# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the port the app runs on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
