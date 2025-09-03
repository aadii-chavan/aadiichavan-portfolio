# Firebase Configuration Setup

This guide will help you set up Firebase configuration for your project.

## Prerequisites

1. **Firebase Project**: Create a new project at [Firebase Console](https://console.firebase.google.com/)
2. **Firebase CLI**: Install Firebase CLI globally
   ```bash
   npm install -g firebase-tools
   ```

## Setup Steps

### 1. Copy Environment Template

Copy the `env.example` file to `.env`:
```bash
cp env.example .env
```

### 2. Get Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click on the gear icon (⚙️) next to "Project Overview"
4. Select "Project settings"
5. Scroll down to "Your apps" section
6. Click on the web app icon (</>) or create a new web app
7. Copy the configuration object

### 3. Fill Environment Variables

Edit your `.env` file and replace the placeholder values:

```env
# Required Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyC_YourActualApiKeyHere
VITE_FIREBASE_AUTH_DOMAIN=your-project-name.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-name
VITE_FIREBASE_STORAGE_BUCKET=your-project-name.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890

# Optional: Analytics (if enabled)
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4. Enable Firebase Services

In Firebase Console, enable the services you need:

- **Authentication**: For user login/signup
- **Firestore Database**: For data storage
- **Storage**: For file uploads
- **Hosting**: For deploying your app
- **Analytics**: For user behavior tracking

### 5. Firebase Hosting Setup

1. Initialize Firebase in your project:
   ```bash
   firebase login
   firebase init
   ```

2. Select the following options:
   - **Hosting**: Configure files for Firebase Hosting
   - **Public directory**: `dist` (Vite build output)
   - **Single-page app**: Yes
   - **Overwrite index.html**: No

3. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## Environment Variables Reference

### Required Variables
- `VITE_FIREBASE_API_KEY`: Your Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN`: Your Firebase auth domain
- `VITE_FIREBASE_PROJECT_ID`: Your Firebase project ID
- `VITE_FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID
- `VITE_FIREBASE_APP_ID`: Your Firebase app ID

### Optional Variables
- `VITE_FIREBASE_MEASUREMENT_ID`: Google Analytics measurement ID
- `VITE_FIREBASE_HOSTING_SITE`: Custom hosting site name
- `VITE_APP_NAME`: Your application name
- `VITE_APP_VERSION`: Your application version
- `VITE_APP_ENVIRONMENT`: Environment (development/production)

### Development Variables
- `VITE_FIREBASE_USE_EMULATOR`: Enable Firebase emulators
- `VITE_FIREBASE_AUTH_EMULATOR_HOST`: Auth emulator host
- `VITE_FIREBASE_FIRESTORE_EMULATOR_HOST`: Firestore emulator host
- `VITE_FIREBASE_STORAGE_EMULATOR_HOST`: Storage emulator host

## Security Rules

Make sure to set up proper security rules in Firebase Console:

- **Firestore**: Set up read/write rules
- **Storage**: Configure upload/download permissions
- **Authentication**: Set up sign-in methods

## Usage in Code

Import Firebase services from the config file:

```typescript
import { auth, db, storage } from '../config/firebase';

// Use authentication
import { signInWithEmailAndPassword } from 'firebase/auth';
const user = await signInWithEmailAndPassword(auth, email, password);

// Use Firestore
import { collection, getDocs } from 'firebase/firestore';
const querySnapshot = await getDocs(collection(db, 'users'));

// Use Storage
import { ref, uploadBytes } from 'firebase/storage';
const storageRef = ref(storage, 'images/photo.jpg');
```

## Troubleshooting

### Common Issues

1. **Environment variables not loading**: Make sure to restart your dev server after adding `.env`
2. **Firebase not initialized**: Check that all required environment variables are set
3. **CORS errors**: Configure Firebase security rules properly
4. **Build errors**: Ensure all Firebase dependencies are installed

### Dependencies

Make sure these packages are installed:
```bash
npm install firebase
```

## Support

For Firebase-specific issues, refer to:
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Support](https://firebase.google.com/support)
