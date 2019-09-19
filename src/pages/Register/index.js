import React from 'react';
import { View, TextInput, Image, ImageBackground, StatusBar } from 'react-native';

import {
    Container,
    Header,
    Button,
    Text,
    Body,
    Form,
    Card,
    CardItem,
    Item as FormItem,
    Input,
    Content,
    Label,
    Title,
    Thumbnail
} from 'native-base';

import { withFormik } from 'formik';
import * as Yup from 'yup';


const Register = (props) => (

    <ImageBackground
        source={require('../../assets/images/background_login.jpg')}
        style={{
            //alignItems: 'center',
            flex: 1,
            paddingHorizontal: 20,
        }}
        resizeMode="cover"
    >

        <Container transparent style={{ paddingTop: 10, backgroundColor: 'rgba(255,255,255,0.8)' }}>
            <StatusBar backgroundColor="orange" />
            <Content>

                <Card transparent style={{ alignItems: 'center' }}>
                    <CardItem>
                        <View>
                            {props.touched.name
                                && props.errors.name
                                && <Text>{props.errors.name}</Text>}

                            {props.touched.email
                                && props.errors.email
                                && <Text>{props.errors.email}</Text>}

                            {props.touched.cpf
                                && props.errors.cpf
                                && <Text>{props.errors.cpf}</Text>}

                            {props.touched.password
                                && props.errors.password
                                && <Text>{props.errors.password}</Text>}

                            {props.touched.password2
                                && props.errors.password2
                                && <Text>{props.errors.password2}</Text>}

                            <Image
                                source={require('../../assets/images/icon.png')}
                            />
                        </View>
                    </CardItem>
                </Card>

                <Form>
                    <Card transparent>
                        <CardItem>
                            <Body>
                                <FormItem floatingLabel style={{ marginBottom: 10 }}>
                                    <Label>Nome Completo</Label>
                                    <Input
                                        value={props.values.name}
                                        onChangeText={text => props.setFieldValue('name', text)}
                                    />
                                </FormItem>
                                <FormItem floatingLabel style={{ marginBottom: 10 }}>
                                    <Label>E-mail</Label>
                                    <Input
                                        value={props.values.email}
                                        onChangeText={text => props.setFieldValue('email', text)}
                                    />
                                </FormItem>
                                <FormItem floatingLabel style={{ marginBottom: 10 }}>
                                    <Label>CPF</Label>
                                    <Input
                                        value={props.values.cpf}
                                        onChangeText={text => props.setFieldValue('cpf', text)}
                                    />
                                </FormItem>
                                <FormItem floatingLabel style={{ marginBottom: 10 }}>
                                    <Label>Senha</Label>
                                    <Input
                                        secureTextEntry={true}
                                        value={props.values.password}
                                        onChangeText={text => props.setFieldValue('password', text)}
                                    />
                                </FormItem>
                                <FormItem floatingLabel style={{ marginBottom: 10 }}>
                                    <Label>Confirmar Senha</Label>
                                    <Input
                                        secureTextEntry={true}
                                        value={props.values.password2}
                                        onChangeText={text => props.setFieldValue('password2', text)}
                                    />
                                </FormItem>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button onPress={props.handleSubmit} warning style={{ margin: 15, justifyContent: 'center' }}>
                        <Text> Registrar Nova Conta </Text>
                    </Button>

                </Form>

            </Content>
        </Container>

    </ImageBackground>
);

export default withFormik({
    mapPropsToValues: () => ({ name: '', email: '', cpf: '', password: '', password2: '' }),

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('Preencha o campo nome'),
        email: Yup.string()
            .email('Digite um e-mail válido')
            .required('Preencha o campo de e-mail'),
        cpf: Yup.string()
            .min(11, 'O CPF deve ter no mínimo 11 caracteres')
            .required('Preencha o campo cpf'),
        password: Yup.string()
            .min(6, 'A senha deve ter no mínimo 6 caracteres')
            .required('Preencha o campo senha'),
        password2: Yup.string()
            .min(6, 'A senha deve ter no mínimo 6 caracteres')
            .required('Preencha o campo confirmar senha')
            .test('passwords-match', 'Confirmação de senha diferente', function (value) {
                return this.parent.password === value;
            }),

    }),

    handleSubmit: (values) => {
        alert("Todos os dados estão corretos, vamos registrar sua conta!");
    }
})(Register);