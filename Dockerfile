# Use the official Node.js 16 image as the base image
FROM node:21

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port your Nest.js application is listening on
EXPOSE 3005

# Command to start your Nest.js application
CMD [ "npm", "run", "start:prod" ]
