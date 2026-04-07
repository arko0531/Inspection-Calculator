import theme from '@/styles';
import { StyleSheet, Text, View } from 'react-native';

interface ICalcResultItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const CalcResultItem = ({ icon, title, value }: ICalcResultItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default CalcResultItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20
  },

  title: {
    color: theme.colors.Sub.Black[400],

    ...theme.typo.Body1_13_Regular
  },

  value: {
    color: theme.colors.Sub.Black[700],

    ...theme.typo.Body1_13_Bold
  }
});
