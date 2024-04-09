import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants';

const styles = StyleSheet.create({
  todoWrapper: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  completedTitle: {
    color: colors.cherry,
    textDecorationLine: 'line-through',
  },
  title: {
    fontWeight: 'bold',
    color: colors.pink,
    fontSize: 25,
  },
  date: {
    color: colors.grey,
    marginTop: 20,
  },
  textWrapper: {
    flex: 1,
  },
  iconsWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
});
export default styles;
