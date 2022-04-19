import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fbfbf8',
        paddingTop: 80,
    },
    CadLabel: {
        color:"#000000",
        fontSize: 25,
        paddingLeft: 20,
        borderRadius: 10
       
    },
    input: {
        width:"90%",
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        backgroundColor: "#ffffff",
        height:30,
        margin:12, 
        paddingLeft:10,
        borderRadius:25,
    },
    ButtonSalvar:{
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        width:"90%",
        backgroundColor: '#FFFF00',
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
    },
    textButton:{
        fontSize: 20,
        color: "#000000",
    },
});

export default styles