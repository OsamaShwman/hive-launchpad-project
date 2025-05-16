FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code (this includes vite.config.ts)
COPY . .

# Build the application (this uses vite.config.ts from the context)
RUN npm run build

# --- Production Stage ---
FROM node:22-alpine

WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app/dist ./dist

# Copy package.json and package-lock.json for installing Vite
COPY package.json package-lock.json ./

# --- ADD THIS LINE ---
# Copy the Vite configuration file to the final stage
# so `vite preview` can read its `preview` settings.
COPY vite.config.ts ./
# --- END ADD THIS LINE ---

# Install Vite for the preview server.
# npm install --omit=dev will remove vite if it's only in devDependencies.
# So we install vite specifically.
RUN npm install vite

# Expose the port Vite preview runs on
EXPOSE 4173

# Command to run the application using vite preview
# The "--" separates npm arguments from arguments passed to the script.
# Your existing CMD looks fine for passing --host and --port to vite preview.
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]