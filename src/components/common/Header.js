 //import libraries for making a component
 import React from 'react';
 import { Text, View } from 'react-native';
 
  //make a component
 const Header = (props) => { //props will be from parent which is index.js
     const { textStyle, viewStyle } = styles;
    return (// use props passed from parent index.js
        <View style={viewStyle}>
        <Text style={textStyle}> {props.headerText} </Text> 
         </View>
     );
 };
 
 const styles = {
     viewStyle: {
         backgroundColor: '#F8F8F8',
         justifyContent: 'center', //manipulate vertically
         alignItems: 'center', // manipulate horizontally
         height: 60,
         paddingTop: 15,
         shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.5,
         elevation: 2,
         position: 'relative'
     },
     textStyle: {
         fontSize: 20
     }
 };
  //make the component available to other parts of the app
  // here we use index.js to reference component so our export will be export {Header};
  export {Header};
