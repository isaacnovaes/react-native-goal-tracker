import { View, StyleSheet } from 'react-native';
import GoalInput from '../GoalInput/GoalInput';
import GoalDetail from '../GoalDetail/GoalDetail';
import colors from '../../colors';
import type { ReactNode } from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useContext, useState } from 'react';
import { Context } from '../../context/ContextProvider';
import AddGoals from '../AddGoals/AddGoals';

const AppContainer = () => {
    const showComponent = (
        condition: boolean | string | null,
        component: ReactNode
    ) => (condition ? component : null);

    const {
        state: { selectedId },
    } = useContext(Context);

    const [showGoalInput, setShowGoalInput] = useState(false);
    return (
        <View style={styles.container}>
            <AddGoals setShowGoalInput={setShowGoalInput} />
            {showComponent(
                showGoalInput,
                <GoalInput setShowGoalInput={setShowGoalInput} />
            )}
            {showComponent(selectedId, <GoalDetail />)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        paddingTop: 50,
        backgroundColor: colors.darkPurple,
    },
});

export default AppContainer;
