import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView,TouchableHighlight, Image, ScrollView,TextInput} from 'react-native';
   

import {MaterialCommunityIcons} from '@expo/vector-icons';


export default class RegistroDatos extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            password: '',
            email: '',
            usuario: '',
            mensajeError:'',
            iconName : 'eye',
            secureTextEntry:true,

            loading: false,

        }
    }


     mostrarClave =()=>{
        let iconName = (this.state.secureTextEntry)? "eye-off":"eye";
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
            iconName:iconName
        });

    }



    render() {
     
        return (
            <ScrollView style={{marginTop:'45%',flex:1}}>
                
              
            
                 

                     
                        <View style={{alignItems: 'center',justifyContent: 'center',alignContent:'center'}}>
        
        
                            <View>

                                <View style={{alignItems: 'center',justifyContent: 'center',alignContent:'center',marginBottom:25}}>

                                <Text style={{fontSize:25}}>Ingrese sus datos</Text>

                                </View>


                                <TextInput

                                    style={styles.input}
                                    placeholder='Usuario'
                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={usuario => this.setState({ usuario })}
                                />

                                <TextInput
                                    style={styles.input} placeholder='Nombre'
                                    autoCapitalize="words"
                                    placeholderTextColor='lightgrey'
                                    name="nombre"
                                    onChangeText={nombre => this.setState({ nombre })}
                                />


                                <TextInput
                                    style={styles.input}
                                    placeholder='Apellido'

                                    autoCapitalize="words"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={apellido => this.setState({ apellido })}

                                />
                                <TextInput

                                    style={styles.input}
                                    placeholder='E-mail'
                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={email => this.setState({ email })}
                                />

                        </View>

        

                                
                                <View style={{flexDirection:'row',alignItems:'center',marginLeft:'7%'}}>

                                <View >
                                
                                <TextInput
                                    style={styles.input}
                                    placeholder='Clave'

                                    autoCapitalize="none"
                                    secureTextEntry={this.state.secureTextEntry}
                                    placeholderTextColor='lightgrey'
                                    minLength={2}
                                    onChangeText={password => this.setState({ password})}

                                />
                
                                </View>
                                <View style={{marginLeft:'2%',marginTop:14}}>
                                <TouchableHighlight onPress={this.mostrarClave}>
                                <MaterialCommunityIcons name = {this.state.iconName} size={19}/>
                                </TouchableHighlight>
                                </View>
                        </View>
                                

                             
                        <View style={{alignContent:'center',alignItems:'center',justifyContent:'center'}}>
                        <Text style={{color:'red',marginTop:'2%'}}>{this.state.mensajeError}</Text>
                        </View>

                    

                </View>
                      
                        <View style={{alignItems: 'center',justifyContent: 'center',alignContent:'center'}}>
                            <TouchableOpacity style={styles.botonRegister} onPress={()=>this.props.navigation.navigate('RegistroMascota')}>
                                <Text style={{ fontWeight: 'bold', color: '#515254', fontSize:15.5 }}> Seleccionar Mascota </Text>
                            </TouchableOpacity>

                           

                        </View>


            </ScrollView>
            
        )
    }

}



const styles = StyleSheet.create({
  
  
    input: {
        height: 35,
        borderBottomColor: '#1ed796',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 15,
        width: 185,
        alignItems: 'flex-start',
        marginTop:15
    },
    botonRegister: {
        alignItems: 'center',
        backgroundColor: '#b4f2ca',
        padding: 10,
        width: 185,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#c7f5d7',
        marginBottom: 2,
        marginTop:15



    },

  


});