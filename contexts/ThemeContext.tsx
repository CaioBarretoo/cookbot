import React, { createContext, useContext, useState, useEffect } from 'react';
import { LayoutAnimation, Platform, UIManager, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme, Theme } from '../styles/theme';

// Ativa LayoutAnimation para o Android
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

type ThemeContextType = {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
};

const THEME_PREFERENCE_KEY = '@theme_preference';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const theme = isDark ? darkTheme : lightTheme;

    // Load saved theme preference
    useEffect(() => {
        loadThemePreference();
    }, []);

    const loadThemePreference = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem(THEME_PREFERENCE_KEY);
            if (savedTheme !== null) {
                setIsDark(savedTheme === 'dark');
            }
        } catch (error) {
            console.error('Error loading theme preference:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleTheme = async () => {
        try {
            const newTheme = !isDark;
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setIsDark(newTheme);
            // Salva o ultimo tema
            await AsyncStorage.setItem(THEME_PREFERENCE_KEY, newTheme ? 'dark' : 'light');
        } catch (error) {
            console.error('Erro ao salvar ultimo tema:', error);
        }
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color={lightTheme.primary} />
            </View>
        );
    }

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
    }
    return context;
};
