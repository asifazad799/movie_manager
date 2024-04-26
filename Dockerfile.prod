FROM node:20-alpine

ARG PORT

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8081

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Expose the port specified in the PORT environment variable
EXPOSE $PORT

CMD ["npm","run","prod"]
