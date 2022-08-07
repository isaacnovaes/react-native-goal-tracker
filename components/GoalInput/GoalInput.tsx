import { useContext, useState, useRef } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import colors from '../../colors';
import { Context } from '../../context/ContextProvider';

const GoalInput = () => {
    const { dispatch } = useContext(Context);
    const [inputText, setInputText] = useState('');
    const textInput = useRef<TextInput>(null);

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
        <View style={styles.goalInput}>
            <TextInput
                placeholder='Enter your goal...'
                style={styles.textInput}
                onChangeText={(e) => {
                    if (e.trim() === '') return;
                    setInputText(e);
                }}
                onEndEditing={onAddGoal}
                ref={textInput}
            />
            <Button title='Add goal' onPress={onAddGoal} />
        </View>
    );
};

const styles = StyleSheet.create({
    goalInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        flexGrow: 1,
        marginRight: 10,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: colors.borderColor,
    },
});

export default GoalInput;
