## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- PostgreSQL
- pnpm (package manager)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rohitxdd/go-progress.git
    cd go-progress
    ```
2. Install the dependencies using `pnpm`:

    ```bash
    pnpm install
    ```
3. Create a `.env.local` file in the root directory and add your environment variables:

    ```bash
    AUTH_SECRET=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    POSTGRES_URL=
    ADMIN_MAIL=
    ```
4. Run database migrations with `drizzle-kit`:

    ```bash
    pnpm drizzle-kit migrate
    ```
5. Start the development server:

    ```bash
    pnpm dev
    ```
    The application will be running at http://localhost:3000.

## OAuth Setup
To set up Google OAuth:

1. Go to the Google Cloud Console.
2. Create a new project.
3. Enable the Google OAuth API.
3. Create OAuth 2.0 credentials and add your redirect URL (e.g., http://localhost:3000/api/auth/callback/google).
4. Copy the Client ID and Client Secret to your .env file.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.