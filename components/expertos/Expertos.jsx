import * as React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, StatusBar 
} from 'react-native';
const Expertos = ( {navigation} ) => {
  return (
    <>
        <View style={styles.containerExperts}>
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Image style={styles.imageInfo} source={ require('../.././assets/edusexInfo.png') } />
                <Text style={styles.details}>EDUSEX{"\n"}Empieza a contestar{"\n"}las dudas de los usuarios  {"\n\n"}¡Responde!</Text>
            </View>
        </View>

        <View style={styles.containerExpertsWel}>
            <Text style={styles.textWelcome}>Bienvenid@</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
                
                <Text style={styles.jobs}>Mensajes{"\n"}</Text>
                
                
        </View>
        <View style={styles.containerJobs}>
            <ScrollView style={styles.scrollViewJobs}>
                <View style={{ flex : 1, justifyContent : 'center', padding : 15 }}>
                    <TouchableOpacity 
                        onPress = {
                        () => navigation.navigate('Login')
                    }>
                        <View style={styles.containerCards}>
                            <Image style={styles.imageProfile} source={ require('../.././assets/Person1.png') } />
                            <Text style={styles.detailsInfo}>@theJPM{"\n"}Duda acerca..: ---{"\n"}Agenda tu consulta</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress = {
                        () => navigation.navigate('Login')
                    }>
                        <View style={styles.containerCards}>
                            <Image style={styles.imageProfile} source={ require('../.././assets/perfil2.png') } />
                            <Text style={styles.detailsInfo}>@prisci08{"\n"}Duda acerca..: ---{"\n"}Agenda tu consulta</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress = {
                        () => navigation.navigate('Login')
                    }>
                        <View style={styles.containerCards}>
                            <Image style={styles.imageProfile} source={ require('../.././assets/Person1.png') } />
                            <Text style={styles.detailsInfo}>@usdfa{"\n"}Duda acerca..: ---{"\n"}Agenda tu consulta</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress = {
                        () => navigation.navigate('Login')
                    }>
                        <View style={styles.containerCards}>
                            <Image style={styles.imageProfile} source={ require('../.././assets/perfil2.png') } />
                            <Text style={styles.detailsInfo}>@estefelvi{"\n"}Duda acerca..: ---{"\n"}Agenda tu consulta</Text>
                        </View>
                    </TouchableOpacity>
                </View>   
            </ScrollView>
        </View>
        <View style={styles.menu}>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <TouchableOpacity
                onPress = {
                    () => navigation.navigate('Guias')
                  }>
                    <Image style={styles.iconsMenu} source={ require('../.././assets/guides.png') } />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {
                    () => navigation.navigate('Condoms')
                }>
                    <Image style={styles.iconsMenu} source={ require('../.././assets/preser.png') } />
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {
                    () => navigation.navigate('MenuP')
                }>
                        
                    <Image style={styles.iconsMenu} source={ require('../.././assets/home.png') } />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {
                        () => navigation.navigate('Experts')
                    }>
                <Image style={styles.iconsMenu} source={ require('../.././assets/questions.png') } />
                    </TouchableOpacity>
                <TouchableOpacity
                    onPress = {
                        () => navigation.navigate('Users')
                    }>
                    <Image style={styles.iconsMenu} source={ require('../.././assets/profile.png') } />
                </TouchableOpacity>
            </View>
        </View>
    </>
  );
}
export default Expertos
const styles = StyleSheet.create({
  containerExperts : {
    width: '90%',
    height: '20%',
    borderRadius: 20,
    marginLeft: 20,
    padding: 20,
    marginTop:20,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  imageInfo : {
    marginTop: 10,
    width : '50%',
    height : '70%',
    resizeMode: 'contain'
  },
  details: {
    marginTop: 10,
    fontWeight : 'bold',
    fontSize: 14,
    marginBottom: 8,
    color: '#fff'
  },
  containerExpertsWel : {
    width: '90%',
    height: '7%',
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 20
  },
  textWelcome : {
    fontWeight : 'bold',
    fontSize : 40,
  },
  containerDiffExperts : {
    width: '90%',
    height: '7%',
    borderRadius: 20,
    marginLeft: 20,
    alignItems: 'center'
  },
  jobs: {
    marginTop: 0,
    fontWeight : 'bold',
    fontSize: 16,
    padding: 12
  },
  containerJobs: {
    width: '90%',
    height: '50%',
    borderRadius: 20,
    marginLeft: 20,
    backgroundColor: 'black', 
    padding: 15,
    paddingBottom: 30,
    paddingTop: 18
  },
  scrollViewJobs: {
    backgroundColor: 'transparent',
    marginHorizontal: 10,
    paddingTop: 10
  },

  containerCards : {
    width: '100%',
    height: '80%',
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#c2dfe3',
    alignItems: 'center',
    marginBottom: 15,
    flex: 1, 
    flexDirection: 'row'
  },

  imageProfile : {
    marginTop: 10,
    width : '50%',
    height : '100%',
    resizeMode: 'contain',
    marginLeft: -25
  },
  
  detailsInfo: {
    fontWeight : 'bold',
    fontSize: 14,
    marginBottom: 8, 
    marginLeft: -15
  },

  menu: {
    width: '100%',
    height: '10%',
    marginTop: 10
  },

  iconsMenu: {
    marginTop: 10,
    width : '50%',
    height : '50%',
    resizeMode: 'contain',
    padding: 18,
    marginLeft: 35
  }
});