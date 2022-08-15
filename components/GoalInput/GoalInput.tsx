import { useContext, useState, useRef } from 'react';
import {
    Button,
    Modal,
    StyleSheet,
    TextInput,
    View,
    Image,
} from 'react-native';
import colors from '../../colors';
import { Context } from '../../context/ContextProvider';
import type { OrNull } from '../../Types/types';

const GoalInput = ({
    setShowGoalInput,
}: {
    setShowGoalInput: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const { dispatch } = useContext(Context);
    const [inputText, setInputText] = useState('');
    const textInput = useRef<OrNull<TextInput>>(null);

    const onAddGoal = () => {
        if (inputText.trim() === '') return;
        dispatch({
            type: 'ADD_GOAL',
            goal: inputText,
        });
        textInput.current?.clear();
        setInputText('');
    };
    return (
        <Modal animationType='slide'>
            <View style={styles.goalInput}>
                <Image
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    source={require('../../assets/goal.png')}
                    accessibilityLabel='Goal image'
                    style={styles.image}
                />
                <TextInput
                    placeholder='Enter your goal...'
                    placeholderTextColor={colors.white}
                    style={styles.textInput}
                    onChangeText={(e) => {
                        if (e.trim() === '') return;
                        setInputText(e);
                    }}
                    onEndEditing={onAddGoal}
                    ref={textInput}
                />
                <View style={styles.buttonsContainer}>
                    <Button
                        title='Back'
                        onPress={() => setShowGoalInput(false)}
                        color={colors.red}
                    />
                    <Button
                        title='Add goal'
                        onPress={onAddGoal}
                        color={colors.lightPurple}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    goalInput: {
        flex: 1,
        padding: 25,
        paddingTop: 50,
        backgroundColor: colors.darkPurple,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 30,
        alignSelf: 'center',
    },
    textInput: {
        marginRight: 10,
        padding: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: colors.borderColor,
        color: colors.white,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    },
});

export default GoalInput;
