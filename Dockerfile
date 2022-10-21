FROM node:18

# Create app directory
WORKDIR /usr/src/site

# Copy package files
COPY package*.json ./

# Install packages
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

# Run the app
CMD ["node", "build"]