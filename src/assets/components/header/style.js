import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants';
const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.turquoise,
  },
});
export default styles;
