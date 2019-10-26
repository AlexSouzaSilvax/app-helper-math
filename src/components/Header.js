import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Header({ titulo }) {

    const [t, setT] = useState(titulo);

    useEffect(() => {
        if (!t) {
            setT('helper math');
        }
    });

    return (
        <View style={styles.header}>

            <View style={{ flex: 1 }}></View>

            <View style={{ flex: 1 }}>
                <Text style={styles.titulo}>{t}</Text>
            </View>

            <View style={{ flex: 1 }}></View>

        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#f05a5b',
        height: 42,
        marginTop: 24
    },
    titulo: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 5

    },
});

export default Header;