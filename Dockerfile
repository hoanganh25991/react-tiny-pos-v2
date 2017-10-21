# Create image based on the official Node 6 image from dockerhub
# FROM indiehosters/git
# FROM node:6-alpine
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /home/vagrant/docker-images

# Change directory so that our commands run inside this new directory
WORKDIR /home/vagrant/docker-images

# Copy dependency definitions
COPY package.json /home/vagrant/docker-images

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /home/vagrant/docker-images

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]