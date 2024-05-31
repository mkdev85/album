## Project Setup

1. **Create `.env` file:**
   - Create a `.env` file in the root directory.
   - Add the following content:
     ```
     NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
     ```

2. **Install Dependencies:**
   - Run the following command:
     ```
     npm install
     ```

3. **Run the Application:**
   - Start the development server:
     ```
     npm run dev
     ```
   - The application will run on `http://localhost:3000/`.

## Assumptions

- Landing page has not been created.
- Default route is `/users`.
- The user list page is server-side rendered, with API calls made on the server. For other pages, such as albums and photos, we use client-side rendering, and the API calls are handled by the client.

## Routes

- **`/users`**: Displays a list of users.
- **`/users/:user_id/albums`**: Displays a list of albums for the given user.
- **`/users/:user_id/albums/:album_id/photos`**: Displays photos of the given album and user.

## Major Libraries Used

- **Next.js 14**: React.js framework.
- **React Query**: Managing API calls and server state.
- **Tailwind CSS**: Styling.
- **Jest/React Testing Library**: Writing test cases for components.

## Maintaining Code Consistency

- **ESLint**: For linting code.
  - Run:
    ```
    npm run lint-fix
    ```
- **Prettier**: For code formatting.
  - Run:
    ```
    npm run prettify
    ```
- **Plop.js**: Creating files from templates.
  - Run:
    ```
    npm run generate
    ```
- **Husky Git Hooks**: Ensure code quality before commits and pushes.

  ### Pre-commit

  - Commands run before making a commit:
    ```
    npm run lint-fix
    npm run prettify
    tsc --noEmit
    ```

  ### Pre-push

  - Commands run before pushing:
    ```
    npm run test
    ```

## Custom Scripts

- We have created custom script in `bin/sync-icons` for converting SVG files into React components.
  - Add new SVG file in `src/ui-kit/icons`.
  - Run:
    ```
    npm run sync-icons
    ```
  - Generated components are in `src/ui-kit/iconComponents`.

## Test Cases

- We have write test cases for each components in `src/ui-kit/components`.
  - Run:
    ```
    npm run test
    ```
