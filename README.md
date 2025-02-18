# Sup-Mart

Sup-Mart is a mobile e-commerce application built with React Native, Expo Router, and Supabase. It features a user-friendly interface with theme support, authentication, and a categorized product browsing experience.

## Features

- **Authentication:** User registration and login using Supabase.
- **Theming:** Dynamic theme switching between light and dark modes using Zustand for state management and NativeWind for styling.
- **Navigation:** Expo Router for file-based routing and navigation.
- **UI Components:** Reusable UI components such as buttons, input fields, and category cards.
- **Product Browsing:** Categorized product display using a grid layout.
- **Asynchronous Storage:** Utilizes `@react-native-async-storage/async-storage` for persistent authentication sessions.
- **Tailwind CSS:** Styling with Tailwind CSS through NativeWind.

## Technologies Used

- React Native
- Expo
- Expo Router
- Supabase
- Zustand
- NativeWind (Tailwind CSS)
- @react-native-async-storage/async-storage

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd sup-mart
    ```

3.  Install dependencies using Bun:

    ```bash
    bun install
    ```

4.  Set up your Supabase project and environment variables:

    - Create a [.env](http://_vscodecontentref_/0) file in the root directory.
    - Add your Supabase URL and Anon Key to the [.env](http://_vscodecontentref_/1) file:

      ```
      EXPO_PUBLIC_SUPABASE_URL=<your_supabase_url>
      EXPO_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
      ```

5.  Start the Expo development server:

    ```bash
    bun start
    ```

## Project Structure

The project structure is organized as follows:

```
sup-mart/
├── app/                      # Expo Router entry point
│   ├── (auth)/               # Authentication routes
│   │   ├── login.tsx         # Login screen
│   │   ├── register.tsx      # Registration screen
│   │   └── _layout.tsx       # Layout for authentication routes
│   ├── (tabs)/               # Tab navigation routes
│   │   ├── home.tsx          # Home screen
│   │   ├── search.tsx        # Search screen
│   │   ├── favorites.tsx     # Favorites screen
│   │   ├── profile.tsx       # Profile screen
│   │   └── _layout.tsx       # Layout for tab navigation
│   ├── _layout.tsx          # Root layout
│   ├── index.tsx             # Entry point, redirects to login
│   └── details.tsx           # Details screen
├── components/             # Reusable React components
│   ├── Button.tsx          # Custom button component
│   ├── Container.tsx       # SafeAreaView container
│   ├── ThemeInput.tsx      # Input component with theme support
│   ├── ThemeText.tsx       # Text component with theme support
│   ├── ThemeView.tsx       # View component with theme support
│   └── ...
├── constants/              # Constant values and mock data
│   └── mock_data.ts        # Mock data for categories
├── utils/                  # Utility functions and configurations
│   ├── colors.ts           # Color definitions for theming
│   └── supabase.ts         # Supabase client setup
├── store/                  # Zustand store for state management
│   └── store.ts            # Theme store and other global state
├── assets/                 # Static assets
│   ├── icon.png            # App icon
│   ├── splash.png          # Splash screen image
│   └── fonts/              # Custom fonts
├── .env                    # Environment variables
├── app.json                # Expo app configuration
├── babel.config.js         # Babel configuration
├── package.json            # Project dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is open source and available under the [MIT License](LICENSE).
