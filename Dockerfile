FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# --- Production Stage ---
FROM node:22-alpine

WORKDIR /app

# Copy built assets from the builder stage
COPY --from=builder /app/dist ./dist
COPY package.json ./

# We only need production dependencies to run the preview server
# Vite is a dev dependency, but vite preview needs it.
# Let's install all dependencies again, but in a production image this could be optimized
# by separating vite into dependencies if it's truly needed for preview,
# or by using a different static server.
# For simplicity with vite preview, we'll install relevant parts.
# Copying node_modules from builder can be problematic due to native dependencies.
# A leaner approach for a pure static site would be to use nginx or similar.
# However, to use `vite preview`, we need vite and react.

# Copy package.json and package-lock.json again to install only necessary packages for preview
COPY package.json package-lock.json ./
# Install ONLY production dependencies, then add vite specifically if needed
# Vite itself is a devDependency. To use `vite preview`, we need vite.
# A more robust way for production is to serve the /dist folder with a static server like Nginx.
# But if `vite preview` is the desired way:
RUN npm install --omit=dev && npm install vite

# Expose the port Vite preview runs on
EXPOSE 4173

# Command to run the application
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"] 