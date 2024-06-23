import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  textDone: {
    fontSize: 16,
  },
  whiteText: {
    fontSize: 16,
    color: '#fff',
  },
  TextInput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 10,
    paddingLeft: 15,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    width: Dimensions.get('screen').width * 0.25,
    backgroundColor: '#5897fb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  scrollContainer: {
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#6f6f6f',
    width: '100%',
  },
  removeButton: {
    width: Dimensions.get('screen').width * 0.25,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default styles;
