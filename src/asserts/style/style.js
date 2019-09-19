const React = require("react-native");

const { StyleSheet } = React;

export default {

headerContainer: {
  backgroundColor: '#CA5D09',
  height:50,
},

footerContainer: {
  backgroundColor: '#CA5D09',
  height:50,
  flexDirection: 'row',
  justifyContent: 'space-around'
},
headerBack: {
  height:50,
  width:50
},

headerMenu: {
 height:50,
  width:50,
  marginTop:26
},

headerTextContainer: {
  justifyContent: 'center',
  alignItems: 'center',

},

headerText: {
 fontWeight:'700',
 fontSize:16,
 color:'#fff',
 textAlign: 'center',
 alignItems: 'center',
 paddingTop:15
},
 
 flex09 : {
  flex : 0.9
 },
 flex01 : {
  flex : 0.1
 }, 
't-center': {
  textAlign: 'center',
},
't-left': {
  textAlign: 'left',
},
't-right': {
  textAlign: 'right',
},
footerNaV : {
  alignItems: 'flex-end',
  justifyContent: 'flex-start'
},

  fRow: {
    flexDirection: 'row',
  },
  fColumn: {
    flexDirection: 'column',
  },
  'f-center': {
    alignItems: 'center',
  },
  'f-middle': {
    justifyContent: 'center',
  },
  'f-end': {
    alignItems: 'flex-end',
  },
  fBoth: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  'f-stretch': {
    alignItems: 'stretch',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  'j-end': {
    justifyContent: 'flex-end',
  },
  'j-start': {
    justifyContent: 'flex-start',
  },
  expand: {
    alignSelf: 'stretch',
  },
  'self-end': {
    alignSelf: 'flex-end',
  },
  'bg-transparent': {
    backgroundColor: 'transparent',
  },
  coverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  pullLeft: {
    position: 'absolute',
    left: 0,
  },
  pullRight: {
    position: 'absolute',
    right: 0,
  },

  topRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
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
  },

  profileImage: {
    height:150,
    width:150,
    backgroundColor:'#FAB819',
    borderRadius:150/2,
    marginBottom:20
  }
};