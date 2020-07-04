import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView,TouchableHighlight, Image, ScrollView,TextInput} from 'react-native';
   

import {MaterialCommunityIcons} from '@expo/vector-icons';


export default class RegistroMascota extends Component {


    constructor(props) {
        super(props);
        this.state = {
         
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

    seleccionarMascota(boton){

        if(boton=='boton2'){
            this.setState({boton2:true,boton1:false})
        }
        else{
            this.setState({boton1:true,boton2:false})
        }

    }



    render() {
     
        return (
            <ScrollView style={{marginTop:'45%',flex:1}}   >
                
              
            
                 

                     
                <View style={{alignItems:'center'}}>
                <Text style={{fontSize:25}}>Seleccione su Mascota</Text>
                </View>

                <View style={{flexDirection:'row',marginTop:'25%',alignItems:'center',justifyContent: 'center'}}>

                <TouchableHighlight style={{backgroundColor: this.state.boton1 ? '#AEF9B0':'white'}} onPress={()=>{this.seleccionarMascota('boton1')}}>

                  <Image
                        style={{width: 150, height: 150,marginBottom:10}}
                        source={{uri: 'https://i.pinimg.com/originals/85/bb/b8/85bbb8ae4e3cc51fa653a70044650306.png'}}
                />

                </TouchableHighlight>

                <TouchableHighlight style={{backgroundColor: this.state.boton2 ? '#AEF9B0':'white'}} onPress={()=>this.seleccionarMascota('boton2')}>

                  <Image
                        style={{width: 150, height: 150,marginBottom:10,marginLeft:15}}
                        source={{uri: 'https://www.mariowiki.com/images/b/b4/1-Up_Mushroom_Artwork_-_Super_Mario_3D_World.png'}}
                />

                </TouchableHighlight>


                </View>
                      
                       


            </ScrollView>
            
        )
    }

}



const styles = StyleSheet.create({
   

});