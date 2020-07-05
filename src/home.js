import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView,TouchableHighlight, Image, ScrollView,ImageBackground} from 'react-native';
   

import {MaterialCommunityIcons,Ionicons,MaterialIcons} from '@expo/vector-icons';


export default class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nombreMascota: '',
            imagenMascota:'https://i.pinimg.com/originals/0e/ee/7d/0eee7d69be9b612a10323a4707fdf34f.png',
         
            boton1:false,
            boton2:false,

 

        }
    }

    cambiarImagen(){
        this.setState({imagenMascota:'https://www.gifss.com/comics/dragon_ball/images/dragon-ball-08.gif'});

        setTimeout(this.volverImagen,
            1500
        )
    }

    volverImagen=()=>{
        
        this.setState({imagenMascota:'https://i.pinimg.com/originals/0e/ee/7d/0eee7d69be9b612a10323a4707fdf34f.png'});
    }






    render() {
        
     
        return (
            <View style={{flex:1,height:'100%'}}>
            <View style={{flexDireccion:'row',height:'10.5%',marginTop:'10%'}}>

            <MaterialIcons name='add-alarm' size={45} color={'green'}/>

            </View>


            <ImageBackground source={{uri:'https://k60.kn3.net/taringa/B/5/2/D/F/5/telametoyque/6E1.jpg'}} style={{flex: 1,height:'90%',resizeMode: "cover",justifyContent: "center"}}>
    
    
                
            
                <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this.cambiarImagen()}>

                <Image
                        style={{width: 185, height: 225,marginBottom:10}}
                        source={{uri: this.state.imagenMascota}}
                />
                </TouchableOpacity>


               

                </View>


           
            </ImageBackground>

            
                
              
            
                 

             

            

                      
                       


            </View>



            
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
        backgroundColor: 'blue',
        padding: 10,
        width:142,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        marginTop:25
        
   

    },
   

});