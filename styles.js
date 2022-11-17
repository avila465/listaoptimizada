import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    inputContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      margin:20
    },
    input:{
      width:'80%',
      borderBottomWidth:1,
      borderBottomColor:'#92bfb1',
      
    },
    listContainer:{
      marginHorizontal:20,
    },
    listItemContainer:{
      paddingVertical:10,
      backgroundColor:'#92bfb1',
      borderRadius:5,
      marginVertical:5
    },
    listItem:{
      fontSize:15,
      color:'#ffffff',
      paddingHorizontal:15,
    },
    modalContainer:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:50,
      paddingVertical:20
    },
    modalTitle:{
      fontSize:18
    },
    modalDetailContainer:{
      paddingVertical:20,
    },
    modalDetailText:{
      fontSize:14
    },
    selectedTask:{
      fontSize:14,
      fontWeight:'bold',
      textAlign:'center'
    },
    modalButtonContainer:{
      width:'80%',
      flexDirection:'row',
      justifyContent:'space-around',
      marginHorizontal:20
    }
  });