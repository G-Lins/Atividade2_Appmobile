import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './style';

const lista = [ 
  {
    name: 'Beatriz Martinez - UFPE',
    avatar_url: "https://img.freepik.com/fotos-gratis/o-retrato-do-modelo-louro-de-sorriso-bonito-vestiu-se-na-roupa-do-moderno-do-verao_158538-5482.jpg?w=740&t=st=1650338893~exp=1650339493~hmac=68a7f63847577143c900d1364cdbed00f0a1f33491f5261f90efffd6507d22f3",
    SubTitle: '88 963258569'
  },
  {
    name: 'Fernanda Silveira - IFPE',
    avatar_url: "https://img.freepik.com/fotos-gratis/modelo-moreno-em-roupas-de-camisola-quente-bege-casual-em-cinza_158538-10733.jpg?w=740&t=st=1650338829~exp=1650339429~hmac=fcada1d357e49231ba3a8c3bcdd1ddd58762bac86ae3bf029c0400d74f21b2d3",
    SubTitle: '81 988625414'
  },
  {
    name: 'Cathia Ribeiro - Trabalho',
    avatar_url: "https://img.freepik.com/fotos-gratis/jovem-mulher-bonita-olhando-menina-na-moda-em-roupas-de-verao-casual-macacao-e-chapeu-fazendo-cara-de-pato_158538-1362.jpg?t=st=1650305842~exp=1650306442~hmac=10fe8e562b85881adf745cdadf7c81a8fc51949f711cbf80f92085b7674670d5&w=740",
    SubTitle: '81 999863211'
  },
  
]

export default function L_contato({navigation, route}){
  return (
    <View>
        <View>
          {
            lista.map((l, i) => (
              <ListItem key={i} bottomDivider >
                <Avatar rounded size='medium' source={{uri: l.avatar_url}}/>
                <ListItem.Content style={styles.list}>
                  <ListItem.Title style={styles.textList}>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.SubTitle}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))
          }
          
          <TouchableOpacity onPress={()=>navigation.navigate("Usuario")}
          style={styles.ButtonNovo}>
            <Text style={styles.textButton}> Novo Contato</Text>
          </TouchableOpacity>
        </View>      
    </View>
  );
}    