import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView,TouchableHighlight, Image, ScrollView,TextInput} from 'react-native';
   

import {MaterialCommunityIcons} from '@expo/vector-icons';


export default class RegistroMascota extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombreMascota: '',
            imagenMascota:'',
         
            boton1:false,
            boton2:false,

 

        }
    }


     mostrarClave =()=>{
        let iconName = (this.state.secureTextEntry)? "eye-off":"eye";
        this.setState({
            secureTextEntry:!this.state.secureTextEntry,
            iconName:iconName
        });

    }

    seleccionarMascota(boton,imagen){

        if(boton=='boton2'){
            this.setState({boton2:true,boton1:false})
        }
        else{
            this.setState({boton1:true,boton2:false})
        }

        this.setState({imagenMascota:imagen})

    }



    render() {
     
        return (
            <ScrollView style={{marginTop:'45%',flex:1}}   >
                
              
            
                 

                     
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:25}}>Seleccione su Mascota</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:'25%',alignItems:'center',justifyContent: 'center'}}>

                <TouchableHighlight style={{backgroundColor: this.state.boton1 ? '#AEF9B0':'white'}} onPress={()=>{this.seleccionarMascota('boton1','https://i.pinimg.com/originals/85/bb/b8/85bbb8ae4e3cc51fa653a70044650306.png')}}>

                  <Image
                        style={{width: 150, height: 150,marginBottom:10}}
                        source={{uri: 'https://i.pinimg.com/originals/85/bb/b8/85bbb8ae4e3cc51fa653a70044650306.png'}}
                />

                </TouchableHighlight>

                <TouchableHighlight style={{backgroundColor: this.state.boton2 ? '#AEF9B0':'white'}} onPress={()=>this.seleccionarMascota('boton2','https://www.mariowiki.com/images/b/b4/1-Up_Mushroom_Artwork_-_Super_Mario_3D_World.png')}>

                  <Image
                        style={{width: 150, height: 150,marginBottom:10,marginLeft:15}}
                        source={{uri: 'https://www.mariowiki.com/images/b/b4/1-Up_Mushroom_Artwork_-_Super_Mario_3D_World.png'}}
                />

                </TouchableHighlight>


                </View>

                <View style={{marginTop:'10%',alignItems:'center'}}>

                <TextInput
                                    style={styles.input}
                                    placeholder='Nombre de la Mascota'
                                    autoCapitalize="none"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={nombreMascota => this.setState({ nombreMascota })}

                />

                <TouchableHighlight style={styles.botonLogin} onPress={()=>this.props.navigation.navigate('AgendarActividad')}>
                    <Text style={{fontWeight: 'bold',color:'white'}}> Siguiente </Text>
                </TouchableHighlight>

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
        paddingRight: 10,
        width: 185,
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
   

});