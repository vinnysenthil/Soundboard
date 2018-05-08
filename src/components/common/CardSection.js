import React from 'react';
import { View } from 'react-native';

//this component is not about fetching data or 
// need a life cycle event with state so we 
// will use functional component


const CardSection = (props) => {
    // props.children is the props that it get from
        // the components that import and use CardSection
        // Note: whatever components pass a prop to CardSection will 
        // be its children that you can reference by props.children
        //{[styles.containerStyle, props.style]} - props on the right will overwrite one on the left if it is being passed
    return (
        <View style={[styles.containerStyle, props.style]}>
        {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5, 
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export {CardSection};
