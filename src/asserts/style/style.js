const React = require("react-native");

const { StyleSheet } = React;

export default {

  image: {
    height: 100,
    width: 100
  },

  logo: {
    marginTop: 20
  },
  marginTop20: {
    marginTop: 20
  },
  loginFormView: {
    flex: 1
  },
  registerFormView: {
    flex: 1,
    marginTop: 20
  },
  containerView: {
    flex: 1,
    backgroundColor: '#006A71',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    padding:15,
    backgroundColor: '#CA5D09',
    borderColor: '#eaeaea',
    width : '90%',
    alignItems: 'center',
    borderRadius : 5
  },
  btnText : {
    fontSize : 16,
    color : '#fff',
    fontWeight : '700'
  },
  textInput: {
    height: 50,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    width:'90%'
  }
};