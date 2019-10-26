import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Header from '../../components/Header';

export default function CalculaPG({ navigation }) {

    return (
        <SafeAreaView style={styles.content}>
            <Header />

            <Text>TELA CALCULO PG</Text>
            <Button title='Voltar' onPress={() => {
                navigation.navigate('Principal');
            }} />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        padding: 1
    }
});