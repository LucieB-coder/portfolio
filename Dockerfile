FROM node:latest

WORKDIR /src/app

# Install dependencies
COPY package*.json ./

RUN npm install

COPY . .

# Build app
RUN npm run build

# Add nginx hosting

FROM nginx:latest

# Copy the built Next.js application to the NGINX HTML directory
COPY --from=builder /src/app/.next /usr/share/nginx/html/.next
COPY --from=builder /src/app/public /usr/share/nginx/html

# Copy the NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port the app runs on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

