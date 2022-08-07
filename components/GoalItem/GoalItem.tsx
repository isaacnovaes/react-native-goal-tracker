import { StyleSheet, Text } from 'react-native';
import colors from '../../colors';
import type { Goal } from '../../Types/types';

const GoalItem = ({ goal }: { goal: Goal }) => {
    return <Text style={styles.goal}>{goal.goal}</Text>;
};

const styles = StyleSheet.create({
    goal: {
        borderWidth: 1,
        padding: 8,
        marginBottom: 8,
        borderRadius: 6,
        backgroundColor: colors.violet,
        color: colors.white,
        overflow: 'hidden',
    },
});

export default GoalItem;
