FROM node:18

# Create app directory
WORKDIR /usr/src/observer

# Copy package files
COPY package*.json ./

# Install packages
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

# Build the app
CMD ["CI=", "npm", "run", "build" ]

# Run the app
CMD [ "node", "build" ]