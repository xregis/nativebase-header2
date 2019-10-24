import { Container, Header, Content, Footer, Title, Text, View  } from 'native-base';
import React, { Component } from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
        <View style={{height: getStatusBarHeight()}}>
        </View>
        
        <Header>
          <Title>Header</Title>
        </Header>

        <Content>
          <Text>Este é o corpo do texto</Text>
        </Content>

        <Footer>
          <Title>Footer</Title>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
  },
});