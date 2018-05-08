import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    // Card get props from other components and will style it

    return (
        // props.children is the props that it get from
        // the components that import and use Card
        // Note: whatever components pass a prop to Card will 
        // be its children that you can reference by props.children
        <View style={styles.containerStyle}>
        {props.children}
        </View>
    );
};

const styles = {
    //we named styles and containerStyle are completely 
    //random, meaning we can name them other ways
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5, 
        marginRight: 5,
        marginTop: 10
    }
};

export {Card};