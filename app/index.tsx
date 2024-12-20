import {generatorRecipe} from "../services/ai/generator"
import styles from "../styles";
import {useState} from "react";
import {Text, TextInput, TouchableOpacity, View, ScrollView, StatusBar} from "react-native";
import {MotiView} from 'moti';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

function MainApp() {
  const [recipe, setRecipe] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { theme, isDark, toggleTheme } = useTheme();

  const generateRecipe = async () => {
    if(recipe.length < 2){
      alert("Desculpe, os ingredientes precisa ter mais de 2 caracteres")
      return
    }

    setIsLoading(true)
    setRecipe("")
    setResponse("")

    try{
      const result = await generatorRecipe(recipe);
      setResponse(result)
    }catch(error){
      alert(error)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: theme.titleColor }]}>CookBot</Text>
        <TouchableOpacity 
          onPress={toggleTheme} 
          style={[
            styles.themeToggle,
            { backgroundColor: theme.iconBackground }
          ]}
        >
          <Ionicons 
            name={isDark ? 'sunny' : 'moon'} 
            size={24} 
            color={isDark ? '#FFD700' : '#1E90FF'}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.subtitle, { color: theme.subtitle }]}>O Gerador de Receitas</Text>
      <Text style={[styles.subtitle, { color: theme.subtitle }]}>O que tem de bom na sua geladeira? 🤤😋</Text>

      <TextInput
        onChangeText={setRecipe}
        value={recipe}
        style={[styles.input, { 
          backgroundColor: theme.cardBackground,
          color: theme.text,
          borderColor: theme.border
        }]}
        placeholder="Arroz, carne de boi, macarrão, leite condensado..."
        placeholderTextColor={theme.placeholder}
      />

      <MotiView
        from={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'timing', duration: 500 }}
      >
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.primary }]} 
          onPress={generateRecipe}
        >
          <Text style={styles.buttonText}>
            {isLoading ? "Preparando sua receita..." : "Gerar Receitas 👨‍🍳"}
          </Text>
        </TouchableOpacity>
      </MotiView>

    {response ? (
      <ScrollView style={{marginTop: 20, width: '100%'}}>
        <MotiView 
          style={[styles.card, { 
            backgroundColor: theme.cardBackground,
            borderColor: theme.border 
          }]}
          from={{opacity: 0, translateY: 50, scale: 0.9}}
          animate={{opacity: 1, translateY: 0, scale: 1}}
          transition={{
            type: 'spring',
            damping: 15,
            stiffness: 200
          }}
        >
          <Text style={[styles.cardTitle, { color: theme.text }]}>Sua receita está pronta:</Text>
          <Text style={[styles.cardText, { color: theme.subtitle }]}>{response}</Text>
        </MotiView>
      </ScrollView>
    ) : null}
    </View>
  );
}

function AppContent() {
  const { isDark, theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar 
        backgroundColor={theme.background}
        barStyle={isDark ? "light-content" : "dark-content"}
      />
      <MainApp />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
