/**
 * Importação das dependências necessárias
 */
import styles from "../styles";
import {useState} from "react";
import {Text, TextInput, TouchableOpacity, View, ScrollView, ActivityIndicator} from "react-native";
import {MotiView} from 'moti';
import { Ionicons } from '@expo/vector-icons';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { generatorRecipe } from '../services/ai/generator';

/**
 * Componente principal do aplicativo
 */
function MainApp() {
  const [recipe, setRecipe] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { theme, isDark, toggleTheme } = useTheme();

  /**
   * Função para gerar uma nova receita
   */
  const generateRecipe = async () => {
    try {
      if(recipe.length < 2){
        alert("Desculpe, os ingredientes precisam ter mais de 2 caracteres")
        return;
      }

      setIsLoading(true);
      const result = await generatorRecipe(recipe);
      if (result) {
        setResponse(result);
      }
    } catch (error) {
      console.error('Erro ao gerar receita:', error);
      alert('Ocorreu um erro ao gerar a receita. Por favor, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Cabeçalho com título e botão de tema */}
      <MotiView 
        style={styles.headerContainer}
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
      >
        <Text style={[styles.title, { color: theme.primary }]}>CookBot</Text>
        <TouchableOpacity 
          onPress={toggleTheme} 
          style={[styles.themeToggle, { backgroundColor: theme.iconBackground }]}
        >
          <Ionicons 
            name={isDark ? 'sunny' : 'moon'} 
            size={24} 
            color={theme.text} 
          />
        </TouchableOpacity>
      </MotiView>

      {/* Subtítulos */}
      <MotiView
        from={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Text style={[styles.subtitle, { color: theme.text }]}>
          O Gerador de Receitas Inteligente
        </Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          O que tem de bom na sua geladeira? 🤤😋
        </Text>
      </MotiView>

      {/* Campo de entrada e botão */}
      <MotiView
        from={{ opacity: 0, translateX: -50 }}
        animate={{ opacity: 1, translateX: 0 }}
        style={{ width: '100%' }}
      >
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

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.primary }]} 
          onPress={generateRecipe}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>Gerar Receitas 🧑‍🍳</Text>
          )}
        </TouchableOpacity>
      </MotiView>

      {/* Card da receita gerada */}
      {response && (
        <ScrollView style={{ width: '100%', marginTop: 20 }}>
          <MotiView 
            style={[styles.card, { backgroundColor: theme.cardBackground }]}
            from={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
          >
            <Text style={[styles.cardTitle, { color: theme.primary }]}>
              Sua receita está pronta:
            </Text>
            <Text style={[styles.cardText, { color: theme.text }]}>
              {response}
            </Text>
          </MotiView>
        </ScrollView>
      )}
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
