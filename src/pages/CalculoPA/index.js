import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import * as Font from 'expo-font';
import { Text, Spinner, Container, Content, Header, Item, Input } from 'native-base';
import _Header from '../../components/Header';

export default function CalculaPA({ navigation }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFont() {
            await Font.loadAsync({
                Roboto: require("../../../node_modules/native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("../../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
            });

            setLoading(false);
        };

        fetchFont();

    }, []);

    if (loading) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Spinner size="large" color={'#AAAAA'} />
                <Text>Carregando...</Text>
            </View>
        );
    } else {
        return (
            //<SafeAreaView style={styles.content}> para devices que tem borda no header
            <View style={styles.content}>
                <_Header />

                <Text style={styles.titulo}>Cálculando Termo Progressão Aritmética</Text>


                <Text style={{ alignSelf: 'center', color: '#444', marginTop: 20 }}>Termos</Text>
                <View style={{ flexDirection: 'row', margin: 15 }}>

                    <Item style={{ width: 100, margin: 3, flex: 1 }}>
                        <Input
                            style={styles.input}
                            placeholder="1º termo"
                            keyboardType="numeric"
                        />
                    </Item>

                    <Item style={{ width: 100, margin: 3, flex: 1 }}>
                        <Input
                            style={styles.input}
                            placeholder="2º termo"
                            keyboardType="numeric"
                        />
                    </Item>

                    <Item style={{ width: 100, margin: 3, flex: 1 }}>
                        <Input
                            style={styles.input}
                            placeholder="3º termo"
                            keyboardType="numeric"
                        />
                    </Item>

                </View>

                


            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 24,
        padding: 1
    },
    titulo: {
        fontSize: 20,
        color: '#444',
        alignSelf: 'center',
        marginTop: 10
    },
    input: {

    }
});