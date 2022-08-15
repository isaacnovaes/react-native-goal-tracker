import { useContext } from 'react';
import { Button, Modal, StyleSheet, Text, View, Image } from 'react-native';
import { Context } from '../../context/ContextProvider';
import { formatDistanceToNow } from 'date-fns';
import colors from '../../colors';

const GoalDetail = () => {
    const {
        state: { selectedId, goals },
        dispatch,
    } = useContext(Context);

    const [selectedGoal] = goals.filter((goal) => goal.id === selectedId);

    return (
        <Modal animationType='slide' visible={selectedId !== null}>
            <View style={styles.container}>
                <Image
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    source={require('../../assets/goal.png')}
                    accessibilityLabel='Goal image'
                    style={styles.image}
                />
                <Text style={styles.heading}>{`Created ${formatDistanceToNow(
                    selectedGoal.date,
                    {
                        includeSeconds: true,
                        addSuffix: true,
                    }
                )}`}</Text>
                <Text style={styles.goalText}>{selectedGoal.goal}</Text>
                <View style={styles.buttonsContainer}>
                    <Button
                        title='Delete'
                        onPress={() =>
                            dispatch({
                                type: 'DELETE_GOAL',
                                id: selectedGoal.id,
                            })
                        }
                        color={colors.red}
                    />
                    <Button
                        title='Back'
                        onPress={() =>
                            dispatch({ type: 'SELECT_GOAL', id: null })
                        }
                        color={colors.lightPurple}
                    />
                </View>
            </View>
        </Modal>
    );
};
export default GoalDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        paddingTop: 50,
        backgroundColor: colors.darkPurple,
    },
    heading: {
        color: colors.white,
        fontSize: 15,
    },
    goalText: {
        padding: 10,
        color: colors.white,
        backgroundColor: colors.violet,
        borderRadius: 6,
        overflow: 'hidden',
        marginTop: 20,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 30,
        alignSelf: 'center',
    },
});
