import React, { Component } from 'react';
import {StyleSheet,TouchableHighlight,Text,View,Dimensions,TextInput, Picker} from 'react-native';
import {MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import RNPickerSelect from 'react-native-picker-select';

export default class AgendarActividad extends Component {

  constructor(props){

    super(props);
    this.state = {
            isVisibleFI:false,
         
            isVisibleHI:false,
        
    
            fechaInicio:moment().format('YYYY-MM-DD'),
            
            horaInicio:moment().format('HH:mm'),
           

            detalle:'',
            mensajeError:'',

            iconName : 'calendar-clock', //down
            textButton:'AGENDAR',
            envioMensaje:true, //lo mismo
    }
  }

  showDatePickerHI ()  {
     
    this.setState({
            isVisibleHI:true
        })
  };
 
 hideDatePickerHI = () => {
     // console.log("A date has been picked: ", moment(date).format('MMMM, Do YYYY HH:mm'));
    this.setState({
            isVisibleHI:false
        })
  };
 
  handleConfirmHI = (date) => {
    this.setState({horaInicio:moment(date).format('HH:mm')})
    this.hideDatePickerHI();
  };

 
  showDatePickerFI ()  {
     
    this.setState({
            isVisibleFI:true
        })
  };
 
 hideDatePickerFI = () => {
     // console.log("A date has been picked: ", moment(date).format('MMMM, Do YYYY HH:mm'));
    this.setState({
            isVisibleFI:false
        })
  };
 
  handleConfirmFI = (date) => {
    console.log(date)
    this.setState({fechaInicio:moment(date).format('YYYY-MM-DD')})
    this.hideDatePickerFI();
  };

 

   
      render(){
          return(
              <View style={{height:Dimensions.get('window').height,flex:1,alignItems:'center'}}>

                    <View style={{flexDirection:'column',marginTop:'45%'}}>

                        <View style={{flexDirection:'row',marginBottom:10,marginTop:5,alignContent:'center',alignItems:'center'}}>                  
                            <Text style={{fontSize:19,marginRight:'15%'}}>Dia de la actividad:</Text>   

                            <TouchableHighlight title="Show Date Picker" onPress={()=>this.showDatePickerFI()}><Text>{this.state.fechaInicio}</Text></TouchableHighlight>
                            <DateTimePickerModal
                            isVisible={this.state.isVisibleFI}
                            mode="date"
                            onConfirm={this.handleConfirmFI}
                            onCancel={this.hideDatePickerFI}
                            is24Hour={true}
                            />

                        </View >

                        <View style={{flexDirection:'row',marginBottom:10,marginTop:25,alignContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:19,marginRight:'15%'}}>Hora de la actividad</Text>

                            <TouchableHighlight title="Show Date Picker" onPress={()=>this.showDatePickerHI()}><Text>{this.state.horaInicio}</Text></TouchableHighlight>
                            
                                    <DateTimePickerModal
                                    isVisible={this.state.isVisibleHI}
                                    mode="time"
                                    onConfirm={this.handleConfirmHI}
                                    onCancel={this.hideDatePickerHI}
                                    is24Hour={true}
                                    />
                        </View>


                         <View style={{ backgroundColor:'white',borderRadius: 5,padding:7, borderWidth: 1,borderColor: '#d6d7da',marginTop:'14%'}}>
                                
                                <TextInput
                                    style={{ height: 35,borderBottomColor: '#1ed796',borderBottomWidth: 1,width: '98%',alignItems: 'center',fontSize: 15}}
                                    placeholder='Ingrese detalle de la tarea'

                                    autoCapitalize="words"
                                    placeholderTextColor='lightgrey'
                                    onChangeText={detalle => this.setState({ detalle })}

                              />
                         
                        </View>

                        <View style={{alignItems:'center',marginTop:'12%',}}>

                        <Text style={{fontSize:15.5,fontStyle:'italic',marginBottom:'5%'}}>Seleccione el tipo de tarea a agendar</Text>

                        <RNPickerSelect
                              onValueChange={(value) => console.log(value)}
                              items={[
                                  { label: 'Deberes', value: 'football' },
                                  { label: 'Ejercicio', value: 'baseball' },
                                  { label: 'Trabajo', value: 'hockey' },
                              ]}
                          />

                        </View>

                        

                        <View style={{alignItems:'center',marginTop:'15%'}}>
                        <TouchableHighlight style={{backgroundColor:'#c7f5d7',width:'50%',alignItems:'center',padding:'2%',borderRadius: 4,borderWidth: 1,borderColor: '#d6d7da',}}onPress={()=>console.log('hola')}><View style={{flexDirection:'row',alignItems:'center'}}><MaterialCommunityIcons name={this.state.iconName} size={30} color={'green'}/><Text style={{marginLeft:'5%'}}>{this.state.textButton}</Text></View></TouchableHighlight>
                        </View>

                    </View>

          
                </View>

          )
      }
}


const styles = StyleSheet.create({

  valores:{
    color:'green',
    fontSize:14,
    alignItems:'center'
  },
  descrip:{
    fontSize:14,
    alignItems:'center',
    padding:2,
    width:'100%',
    marginLeft:'1%'
    
  }
  });
