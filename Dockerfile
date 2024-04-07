FROM node:20-alpine

# Set environment variables
ENV NODE_ENV=production
# ENV PORT=
# ENV DBKEY=
# ENV KEY=

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

# Load environment variables from .env file
ARG ENV_FILE
ENV ENV_FILE=${ENV_FILE}
RUN if [ -f "$ENV_FILE" ]; then 
        set -o allexport; 
        source $ENV_FILE; 
        set +o allexport; 
    fi

CMD ["npm","run","prod"]
