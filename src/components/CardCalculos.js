import React, { useState, useEffect } from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Card, CardItem, Text, Left, Body, Spinner } from 'native-base';
import { withNavigation } from 'react-navigation';// para usar a navegacao de routes por components

function CardCalculos({ navigation, calculo }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchFont() {
            await Font.loadAsync({
                Roboto: require("../../node_modules/native-base/Fonts/Roboto.ttf"),
                Roboto_medium: require("../../node_modules/native-base/Fonts/Roboto_medium.ttf"),
            });

            setLoading(false);
        };

        fetchFont();

    }, []);

    if (loading) {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Spinner size="large" color={'#AAAAA'} />
                <Text>Carregando...</Text>
            </View>
        );
    } else {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(calculo.tela)}>
                <Card>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text style={{ fontWeight: 'bold' }}>{calculo.apelido}</Text>
                                <Text note>{calculo.nome}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{ uri: calculo.formula }} style={{ height: 100, width: null, flex: 1 }} />
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(CardCalculos);