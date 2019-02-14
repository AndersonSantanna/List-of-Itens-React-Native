import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';


export default class ListItens extends Component {
  render() {
    return (
        <View style={styles.item}>
          <View style={styles.foto}>
            <Image style={{height: 100, width: 100}} source={{uri:this.props.item.foto}}/>
          </View>
          <View style={styles.detalheItens}>
            <Text style={styles.textTitle}>{this.props.item.titulo}</Text>
            <Text style={styles.textvalue} >R$ {this.props.item.valor}</Text>
            <Text >Local: {this.props.item.local_anuncio}</Text>
            <Text >Data: {this.props.item.data_publicacao}</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  item:{
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  foto:{
    width: 102,
    height: 102
  },
  detalheItens:{
    marginLeft: 20,
    flex: 1,
  },
  textTitle:{
    fontSize: 19 ,
    color: 'blue',
    marginBottom: 5,
  },
  textvalue:{
    fontSize: 18,
    fontWeight: 'bold'
  }
})