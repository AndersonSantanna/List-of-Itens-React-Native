import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import axios from 'axios'
import Itens from './Itens'

export default class ListItens extends Component {
  
  constructor(props){
    super(props)
    this.state = {listItens:[]}
  }

  componentWillMount(){
    //requisiçao HTTP
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then((res)=>{
      this.setState({listItens: res.data})
    }).catch(()=>{
      console.log('erro ao passar os dados')
    })
  }

  render() {
    return (
        <ScrollView style={{backgroundColor:'#ddd'}} showsVerticalScrollIndicator={false}>
            {
              this.state.listItens.map((item)=>{
                return(<Itens key={item.titulo} item={item}/>)
              })
            }
        </ScrollView>
    );
  }
}
