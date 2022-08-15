import { View, StyleSheet, FlatList } from 'react-native';
import { useContext } from 'react';
import { Context } from '../../context/ContextProvider';
import GoalItem from '../GoalItem/GoalItem';

const Goals = () => {
    const {
        state: { goals },
    } = useContext(Context);

    return (
        <View style={styles.goals}>
            <FlatList
                data={goals}
                renderItem={({ item }) => <GoalItem goal={item} />}
                keyExtractor={({ id }) => id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    goals: {
        marginTop: 50,
        marginBottom: 40,
    },
});

export default Goals;
