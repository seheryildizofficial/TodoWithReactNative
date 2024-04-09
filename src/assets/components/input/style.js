import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    borderColor: colors.grey,
    borderRadius: 5,
    color: colors.pink,
    flex: 1,
  },
  icon: {
    fontSize: 30,
    color: colors.green,
    marginLeft: 10,
  },
});
export default styles;
