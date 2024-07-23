# cjis-prototype

A prototype project for building CJIS microfrontends using `Node.js`, `React`, `vite` and `module-federation`.

## Project Setup

1. **Clone the repository**:

   ```sh
   git clone https://github.com/your-username/cjis-prototype.git
   cd cjis-prototype
   ```

2. **Navigate to the appropriate project**:

   Needles:

   ```sh
   cd needles
   ```

   Shell:

   ```sh
   cd shell
   ```

3. **Install dependencies**:
   ```sh
   npm install
   ```

## Development

- **Start the development server**:

  Needles:

  1. To package and expose using module federation:
     ```sh
     npm run deploy
     ```
  2. To run the project individually:
     `sh
npm run dev
`
     Shell:

  ```sh
  npm run dev
  ```

## Build

- **Build the project for production**:
  ```sh
  npm run build
  ```

## Linting and Formatting

- **Run linting**:

  ```sh
  npm run lint
  ```

- **Run formatting**:
  ```sh
  npm run format
  ```

## Testing

- **Run tests**:
  ```sh
  npm test
  ```

## References:

- [Setting up React Micro Frontends with Vite Module Federation using @originjs/vite-plugin-federation](https://adeesh.hashnode.dev/vite-module-federation)
