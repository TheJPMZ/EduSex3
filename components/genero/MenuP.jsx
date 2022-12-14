import * as React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import NavBar from '../NavBar/navbar';

const guiasImg = require('../../assets/guias.png');
const preservativosIMG = require('../../assets/Preservativos.png');
const infoIMG = require('../../assets/infp.png');

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 150,
    marginBottom: 50,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',

  },
  textoTitulo: {
    marginTop: -50,
    fontWeight: 'bold',
    fontSize: 40,

  },
  imagen: {
    marginTop: 10,
    width: '100%',
    height: '55%',
  },

  imagen1: {
    width: '10%',
    height: '25%',
  },

  textdato: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',

  },
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    marginBottom: -50,
    borderRadius: 15,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  containerE: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 330,
    marginTop: 10,
    paddingTop: 5,
    width: '15%',
    height: 35,
    borderRadius: 15,
    backgroundColor: '#000000',
    overflow: 'hidden',

  },
  imagenE: {
    width: '100%',
    height: '43%',
  },
  textdatoE: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  textE: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },

});

function MenuP({ navigation }) {
  return (
    <>
      <View style={styles.container1}>
        <Text style={styles.textoTitulo}>Menu Principal</Text>
      </View>
      <View style={{
        flex: 1, justifyContent: 'center', padding: 15, backgroundColor: '#c2dfe3', width: '95%', marginLeft: 10, borderRadius: 15, marginTop: -30, height: '80%',
      }}
      >

        <TouchableOpacity
          onPress={
              () => navigation.navigate('Guias')
          }
        >
          <View style={styles.container}>
            <Image style={styles.imagen} source={guiasImg} />

            <View style={styles.textdato}>
              <Text style={styles.text}>
                Guias
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={
              () => navigation.navigate('Condoms')
          }
        >
          <View style={styles.container}>
            <Image style={styles.imagen} source={preservativosIMG} />

            <View style={styles.textdato}>
              <Text style={styles.text}>
                Preservativos
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={
             () => navigation.navigate('Questions')
          }
        >
          <View style={styles.container}>
            <Image style={styles.imagen} source={infoIMG} />

            <View style={styles.textdato}>
              <Text style={styles.text}>
                Preguntas
              </Text>
            </View>
          </View>
        </TouchableOpacity>

      </View>
      <NavBar navigation={navigation} />
    </>
  );
}
export default MenuP;
