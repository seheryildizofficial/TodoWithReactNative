import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.modalBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentWrapper: {
    backgroundColor: colors.white,
    width: '80%',
    padding: 20,
    borderRadius: 4,
  },
  title: {
    color: colors.cherry,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
  closeButtonWrapper: {
    borderWidth: 1,
    borderColor: colors.grey,
    paddingVertical: 6,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  closeButtonText: {
    color: colors.purple,
  },
  confirmButtonWrapper: {
    borderWidth: 1,
    borderColor: colors.grey,
    paddingVertical: 6,
    paddingHorizontal: 30,
    backgroundColor: colors.purple,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: colors.white,
  },
  validationText: {
    color: colors.cherry,
    textAlign: 'center',
  },
});
export default styles;
