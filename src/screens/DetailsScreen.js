import { StyleSheet, Text, View } from 'react-native';

import React from 'react'

class DetailsScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            rawJSON : this.props.route.params.rawJSON,
        }
    }

    render(){
        return(
        <View style={styles.container}>
            <Text style={styles.jsonText}>{this.state.rawJSON}</Text>
        </View>
        )
    
    }
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        padding:10
    },
    jsonText: {
        fontSize:16,
    }
});