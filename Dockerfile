FROM node:20.12.0

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080
ENV DBKEY=mongodb+srv://asif_azad:3RI8g4Ejw2Q2OPNQ@cluster0.gtd9mvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
ENV KEY=123ui

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
