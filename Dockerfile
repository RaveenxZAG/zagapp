# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose a port (replace 3000 with the port your app is listening on)
EXPOSE 8080

# Start the application
CMD [ "node", "app.js" ]
