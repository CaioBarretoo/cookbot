/**
 * Configurações de tema do aplicativo
 */

/**
 * Cores do tema claro
 */
export const lightTheme = {
    background: '#F8F9FD',      // Cor de fundo principal
    primary: '#00B894',         // Cor principal (verde)
    text: '#2D3436',           // Cor do texto principal
    border: '#E5E9F2',         // Cor da borda
    cardBackground: '#FFFFFF',  // Cor de fundo dos cards
    placeholder: 'rgba(0, 0, 0, 0.4)',  // Cor do texto placeholder
    iconBackground: '#F0F0F0'   // Cor de fundo dos ícones
};
     
/**
 * Cores do tema escuro
 */
export const darkTheme = {
    background: '#1A1B1E',      // Cor de fundo principal
    primary: '#00B894',         // Cor principal (verde)
    text: '#FFFFFF',           // Cor do texto principal
    border: '#2D3436',         // Cor da borda
    cardBackground: '#242526',  // Cor de fundo dos cards
    placeholder: 'rgba(255, 255, 255, 0.5)',  // Cor do texto placeholder
    iconBackground: '#2A2B2E'   // Cor de fundo dos ícones
};
     
export type Theme = typeof lightTheme;
