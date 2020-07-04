import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight,Image, TextInput} from 'react-native';


export default class Login extends Component{


    constructor(props){

        
        super(props);

        this.state = {
          username : '',
          password : '',
         
        }
      
    }
  


    render() {
        return ( 
            <SafeAreaView >
                <View style = {{alignItems: 'center',justifyContent: 'center',margin:10, marginTop:'50%'}}>
      
   
      
                
                <Image
                        style={{width: 150, height: 150,marginBottom:10}}
                        source={{uri: 'https://pa1.narvii.com/6292/4b83dfdd0eab7111c035cab836e718ea04072127_hq.gif'}}
                />

                
                <TextInput
                                    style={styles.input}
                                    placeholder='Usuario'
                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={username => this.setState({ username })}

                />
                        
                <TextInput
                                    style={styles.input}
                                    placeholder='Contraseña'
                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={password => this.setState({ password})}

                />
                         

                <TouchableHighlight style={styles.botonLogin}>
                    <Text style={{fontWeight: 'bold',color:'white'}}> Iniciar Sesion </Text>
                </TouchableHighlight>


                </View>

                
                    
                <View style = {styles.abajo}>
             
                   
                        <Text 
                            onPress={()=>this.props.navigation.navigate('RegistroDatos')}
                            style={{color: 'black',marginTop:'2.5%',marginBottom:'3.5%',fontWeight:'bold',fontStyle:'italic',fontSize:15}}>
                            Crear Mascota</Text>
                    
                </View>
            </SafeAreaView>
            )
        }

   
}






const styles = StyleSheet.create({

    input: {
        height: 35,
        borderBottomColor: '#1ed796',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        width: 150,
        alignItems: 'center',
        margin:5, 
        padding:5,
        fontSize: 15.5,
        marginTop:7
    },

    botonLogin:{
        alignItems: 'center',
        backgroundColor: '#35E119',
        padding: 10,
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginTop:25
        
   

    },
    default:{
        backgroundColor:'blue'
    },
    abajo: {    
        alignItems: 'center',
        marginTop:10,


      justifyContent: 'center',
        
        
      
    },
    contentContainer:{
        backgroundColor: '#98FF7A',
        borderColor: '#fff',
        borderRadius: 18,
            padding: 9,
            marginVertical:9,
            flexDirection: "row",
            alignItems: 'center',
            width:'100%'
    }
  });
