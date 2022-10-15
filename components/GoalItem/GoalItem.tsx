import { useContext } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '../../colors';
import { Context } from '../../context/ContextProvider';
import type { Goal } from '../../Types/types';

const styles = StyleSheet.create({
    goal: {
        padding: 8,
        marginBottom: 8,
        borderRadius: 6,
        backgroundColor: colors.violet,
        color: colors.white,
        overflow: 'hidden',
    },
});

const GoalItem = ({ goal }: { goal: Goal }) => {
    const { dispatch } = useContext(Context);
    return (
        <Pressable
            onPress={() => dispatch({ type: 'SELECT_GOAL', id: goal.id })}
        >
            <Text style={styles.goal}>{goal.goal}</Text>
        </Pressable>
    );
};

export default GoalItem;
