import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Text, Spinner, Item, Input } from 'native-base';
import Header from '../../components/Header';

export default function CalculaPA({ navigation }) {

    const [loading, setLoading] = useState(true);

    const [a1, setA1] = useState('');
    const [a2, setA2] = useState('');
    const [a3, setA3] = useState('');
    const [n, setN] = useState('');
    const [aN, setAN] = useState('');
    const [telaResult, setTelaResult] = useState(false);
    const [disabledViewTermos, setDisabledViewTermos] = useState();

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


    async function limparCampos() {

        function limparCamposs() {
            setLoading(true);
            setA1('');
            setA2('');
            setA3('');
            setN('');
            setAN('');
            setTelaResult(false);
            setLoading(false);
            setDisabledViewTermos('');
        }

        await limparCamposs();
    }

    async function calcTermoPA() {

        function calcTermoPAA() {

            let aa1 = parseInt(a1);
            let aa2 = parseInt(a2);
            let nn = parseInt(n);

            let r = (aa2 - aa1);

            setAN(aa1 + (nn - 1) * r);

            setDisabledViewTermos(true);

            setTelaResult(true);
        }

        await calcTermoPAA();
    }

    if (loading) {
        return (
            <View style={styles.content}>
                <Header voltar="Principal" limparTela={limparCampos} />
                <View style={styles.viewLoading}>
                    <Spinner size="large" color={'#AAAAA'} />
                    <Text>Carregando...</Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.content}>
                <Header voltar="Principal" limparTela={limparCampos} />

                <Text style={styles.titulo}>Calculando Termo Progressão Aritmética</Text>

                {disabledViewTermos ?
                    <Text style={{ marginTop: 20 }} />
                    :
                    <View>
                        <Text style={styles.tituloTermos}>Termos</Text>
                        <View style={styles.viewTermos}>

                            <Item style={styles.itemTermo}>
                                <Input
                                    style={styles.input}
                                    placeholder="1º termo"
                                    keyboardType="numeric"
                                    value={`${a1}`}
                                    onChangeText={(a1) => setA1(a1)}
                                />
                            </Item>

                            <Item style={styles.itemTermo}>
                                <Input
                                    disabled={a1 ? false : true}
                                    style={styles.input}
                                    placeholder="2º termo"
                                    keyboardType="numeric"
                                    value={`${a2}`}
                                    onChangeText={(a2) => {
                                        setA2(a2);

                                        let aa1 = parseInt(a1);
                                        let aa2 = parseInt(a2);

                                        let aa3 = aa2 + (aa2 - aa1);

                                        setA3(aa3);

                                    }}
                                />
                            </Item>

                            <Item style={styles.itemTermo}>
                                <Input
                                    style={styles.input}
                                    placeholder="3º termo"
                                    keyboardType="numeric"
                                    value={`${a2 ? a3 : ''}`}
                                    onChangeText={(a3) => setA3(a3)}
                                    disabled
                                />
                            </Item>

                        </View>

                    </View>
                }

                <Text style={styles.textoPA}>{a3 ? `P.A(${a1},${a2},${a3})` : ''}</Text>

                {telaResult ? null :
                    <View>
                        {a3 ?
                            <View>
                                <Text style={styles.textoTermoCalc}>Termo à ser calculado ?</Text>
                                <Item style={styles.inputTermoCalc}>
                                    <Input
                                        placeholder="Ex: 100"
                                        keyboardType="numeric"
                                        value={`${n}`}
                                        onChangeText={(n) => { setN(n) }}
                                    />
                                </Item>

                                <View>
                                    {n ?
                                        <TouchableOpacity style={styles.btnCalcTermoPA} onPress={calcTermoPA}>
                                            <Text style={styles.textoCalc}>Calcular</Text>
                                        </TouchableOpacity>
                                        : null}
                                </View>
                            </View>
                            : null}
                    </View>
                }

                {telaResult ?
                    <View style={styles.content}>
                        <Text style={styles.textoTermoCalc}>Resultado:</Text>
                        <Text style={styles.textoResultAN}>{`${aN ? aN : ''}`}</Text>
                    </View>
                    : null}


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
    viewLoading: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    titulo: {
        fontSize: 18,
        color: '#444',
        alignSelf: 'center',
        marginTop: 10
    },
    itemTermo: {
        width: 100,
        margin: 3,
        flex: 1
    },
    tituloTermos: {
        alignSelf: 'center',
        color: '#444',
        marginTop: 25
    },
    viewTermos: {
        flexDirection: 'row',
        margin: 15
    },
    textoPA: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        color: '#444'
    },
    textoTermoCalc: {
        alignSelf: 'center',
        color: '#444',
        marginTop: 20
    },
    inputTermoCalc: {
        marginTop: 15,
        width: 80,
        alignSelf: 'center'
    },
    textoResultAN: {
        alignSelf: 'center',
        color: '#46C230',
        fontSize: 50,
        marginTop: 20
    },
    btnCalcTermoPA: {
        height: 35,
        width: 100,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#444444',
        marginTop: 20
    },
    textoCalc: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        color: '#444444'
    },
});