import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import Header from '../../components/Header';
import CardCalculos from '../../components/CardCalculos';

export default function Principal({ navigation }) {

    const [calculos] = useState([
        {
            id: '0', apelido: 'Calc P.A', nome: 'Calculo Progressão Aritmética', formula: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7P3xjmlG2rSsb270Qs0n68IyDZ9VRQAY2NPx4E6wyCEeSFNNpAQ&s', tela: 'CalculoPA'
        },
        {
            id: '1', apelido: 'Calc P.G', nome: 'Calculo Progressão Geométrica', formula: 'https://pbs.twimg.com/media/EH05LfxWwAEN1I5?format=png&name=240x240', tela: 'CalculoPG'
        },
    ]);

    return (
        //<SafeAreaView style={styles.content}> para devices que tem borda no header
        <View style={styles.content}>
            <Header titulo="helper math" />

            <FlatList
                data={calculos}
                keyExtractor={(calc) => calc.id}
                renderItem={({ item }) => (
                    <CardCalculos calculo={item} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        padding: 1
    },
    cardCalc: {
        flex: 1,
        marginTop: 10
    }
});