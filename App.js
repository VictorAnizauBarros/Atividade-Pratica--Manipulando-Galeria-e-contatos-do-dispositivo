import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ImagePickerComponent from './src/components/ImagePickerComponent';
import ContactsComponent from './src/components/ContactsComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Renderiza o componente de seleção de imagem */}
      <ImagePickerComponent/>

      {/* ScrollView para permitir rolagem caso o conteúdo exceda a tela */}
      <ScrollView>
        {/* Renderiza o componente de contatos */}
        <ContactsComponent/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
