import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({size}) => {
    // size || 'large' mean we take size prop if given or 'large' prop if not given
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    ); 
};

const styles = { 
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export {Spinner};