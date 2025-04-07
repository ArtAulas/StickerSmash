import { Text, View, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { useState } from "react";
import { type ImageSource } from "expo-image";

import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceholderImage= require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage]= useState<string|undefined>(undefined);
  const [showAppOptions, setShowAppOptions]=useState<boolean>(false);
  const [isModalVisible,setIsModalVisible]=useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji]=useState<ImageSource|undefined>(undefined);

  const pickImageAsync=async ()=>{
    let result=await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing:true,
      quality:1
    });

    if (!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    }else{
      alert('Não Selecionou Imagem :(')
    }
  }

  const onReset=()=>{
    setShowAppOptions(false);
  }

  const onAddSticker=()=>{
    setIsModalVisible(true);
  }

  const onModalClose=()=>{
    setIsModalVisible(false);
  }

  const onSaveImageAsync=async()=>{
    //
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Resetar" onPress={onReset}/>
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon="save-alt" label="Salvar" onPress={onSaveImageAsync}/>
          </View>
        </View>
      ):(
        <View style={styles.footerContainer}>
          <Button label="Escolher Foto" theme="primary" onpress={pickImageAsync}/>
          <Button label='Usar essa Foto' onpress={()=>{setShowAppOptions(true)}}/>
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji}  onCloseModal={onModalClose}/>
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25292e',
    flex: 1,
    alignItems: "center",
  },
  imageContainer:{
    flex:1
  },
  footerContainer:{
    flex:1/3,
    alignItems:'center'
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

