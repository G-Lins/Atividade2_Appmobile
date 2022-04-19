import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        paddingTop: 45,
        backgroundColor: '#fbfbf8',
        
    },
    HomLabel: {
        color:"#000000",
        fontSize: 20,
        paddingLeft: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width:"90%",
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        backgroundColor: "#ffffff",
        height:30,
        margin:12, 
        paddingLeft:10,
        borderRadius:80,
    },
    ButtonLogin:{
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        width:"90%",
        backgroundColor: '#0000FF',
        paddingTop:12,
        paddingBottom:14,
        marginLeft:12,
        marginTop:20,
    },
    ButtonCadastro:{
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        width:"90%",
        backgroundColor: '#FF0000',
        paddingTop:12,
        paddingBottom:14,
        marginLeft:12,
        marginTop:20,
    },
    textButton:{
        fontSize: 20,
        color: "#ffffff",
    }    
});

export default styles