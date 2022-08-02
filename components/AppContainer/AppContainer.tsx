import { View, StyleSheet } from "react-native";
import GoalInput from "../GoalInput/GoalInput";
import Goals from "../Goals/Goals";
import colors from "../../colors";

const AppContainer = () => {
    return (
        <View style={styles.container}>
            <GoalInput />
            <Goals />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 25,
        paddingTop: 50,
    },
});

export default AppContainer;
