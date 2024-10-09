/* Importa as bibliotecas necessárias */

import React, {useState} from 'react'; 
import {View,Button, Image, Alert,  StyleSheet} from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 

/* Define o componente funcional: */
const ImagePickerComponent = () =>{
    //Estado para armazenar a URI da imagem selecionada
    const [imageUri, setImageUri] = useState(null); 

    //Função para solicitar permissão para abrir a galeria
    const selectImage = async ()=>{

        //Solicita permissão para acessar a galeria
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync(); 

        //Verifica se a permissão foi concedida
        if(status !== 'granted'){
            Alert.alert('Permissão Negada', 'Permissão para acessar a galeria foi negada.' );
            return;
        }

        //Abre a galeria para a selecão da imagem
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            quality:1,
        });

        //Verifica se o usuário cancelou a operação 
        if(result.canceled){
            Alert.alert('Operação cancelada','Você cancelou a seleção de imagem.');
            return;
        }
        //Define a URI da imagem selecionada no estado

        setImageUri(result.uri);
    };

    return(
        //Container principal com estilo centralizado:
        <View style={styles.container}>
            {/* Botão para selecionar imagem */}
            <Button title="Selecionar Imagem" onPress={selectImage} />

            {/* Exibe a imagem selecionada, se houver */}
            {imageUri && (
                <Image source={{uri:imageUri}}
                 style={styles.image} />
            )}

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    image:{
        width: 200,
        height:200,
        marginTop: 20,
        borderRadius:10,
    },
});

export default ImagePickerComponent;

