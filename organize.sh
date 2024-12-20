#!/bin/bash

# Create new directory structure
mkdir -p src/{screens,components,contexts,services/ai,theme,config,hooks,utils}

# Move files to their new locations
mv app/index.tsx src/screens/HomeScreen.tsx
mv styles/theme.ts src/theme/
mv styles/index.ts src/theme/styles.ts
mv contexts/ThemeContext.tsx src/contexts/
mv services/ai/generator.ts src/services/ai/

# Update imports in package.json
echo '{
  "main": "src/App.tsx",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@react-native-async-storage/async-storage": "^1.18.2",
    "expo": "~49.0.15",
    "expo-status-bar": "~1.6.0",
    "react": "18.2.0",
    "react-native": "0.72.6",
    "moti": "^0.26.0",
    "openai": "^3.3.0",
    "@expo/vector-icons": "^13.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.14",
    "typescript": "^5.1.3"
  },
  "private": true
}' > package.json

# Clean up old directories
rm -rf app styles contexts services

echo "Project structure has been reorganized!"
