import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PAGE_CONSTANTS, RESOURCE_CONSTANTS } from '../utils/constants';

import {GET_POSTS} from '../redux/actions/applicationActions';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {connect} from 'react-redux'

const {height,width} = Dimensions.get('screen');

class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            pageNo:0,
            showLoader:false
        }
    }

    componentDidMount(){
        this.getPosts();
        setInterval(()=>{
           this.getPosts();
        },10000);
    }

    async getPosts(){
        if(this.state.showLoader == false){
            this.setState({showLoader:true});
        let result = await GET_POSTS(this.state.pageNo);
        this.setState({showLoader:false});
        if(result.status){
            this.setState({pageNo:this.state.pageNo+1});
        }
        else{
            //error or no data found
            alert(result.msg);
        }
        }
    }

    render(){
        return (
            <View style={styles.container}>
               {this.props.posts.length > 0 && <FlatList
                    data={this.props.posts}
                    keyExtractor={(item,index) => index.toString()}
                    renderItem={(itemData) => {
                        return this.renderItem(itemData);
                    }}
                    onEndReached={() => {
                        //increment page and make api call
                        this.getPosts();
                    }}
                    onEndReachedThreshold={.5}
                    numColumns={1}
                />}
               {this.state.showLoader && <ActivityIndicator animating={true} size="large" color="#FF8200" />}
            </View>
        );
    }

    renderItem=(itemData)=>{
        return <LinearGradient key={`${itemData.index}`} style={styles.listItem}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#FF8200', '#FFBB47']}>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate(PAGE_CONSTANTS.DETAILS_PAGE,{rawJSON:JSON.stringify(itemData.item)});
            }}>
            <View style={styles.rowContainer}>
                <Text style={styles.textLeft}>{RESOURCE_CONSTANTS.HOME_PAGE_TITLE_TEXT}</Text>
                <Text numberOfLines={2} style={styles.textRight}>{itemData.item.title}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.textLeft}>{RESOURCE_CONSTANTS.HOME_PAGE_URL_TEXT}</Text>
                <Text numberOfLines={2} style={styles.textRight}>{itemData.item.url}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.textLeft}>{RESOURCE_CONSTANTS.HOME_PAGE_CREATED_AT_TEXT}</Text>
                <Text numberOfLines={2} style={styles.textRight}>{itemData.item.created_at}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Text style={styles.textLeft}>{RESOURCE_CONSTANTS.HOME_PAGE_AUTHOR_TEXT}</Text>
                <Text numberOfLines={2} style={styles.textRight}>{itemData.item.author}</Text>
            </View>
            </TouchableOpacity>
        </LinearGradient>}

}

mapStateToProps =(state)=>{
    return {
        posts : state.app.posts
    }
}

  // upgrade our component to become Redux-aware
export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10,
        paddingTop:10,
    },
    rowContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    textLeft:{
        fontSize:16,
        fontWeight:'bold',
        textAlignVertical:'top',
        textAlign:'left',
        alignSelf:'flex-start',
        paddingRight:5
    },
    textRight:{
        fontSize:16,
        fontWeight:'500',
        fontStyle:'italic',
        alignSelf:'flex-end',
        width:width-60,
        paddingRight:15
    },
    listItem:{
        padding:8,
        borderRadius:10,
        width:width-20,
        marginBottom:10
      }
})