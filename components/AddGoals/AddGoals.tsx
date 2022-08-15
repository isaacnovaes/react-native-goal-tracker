import { Button } from 'react-native';
import Goals from '../Goals/Goals';
import colors from '../../colors';

const AddGoals = ({
    setShowGoalInput,
}: {
    setShowGoalInput: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <>
            <Button
                title='Add new goal'
                onPress={() => setShowGoalInput(true)}
                color={colors.lightPurple}
            />
            <Goals />
        </>
    );
};
export default AddGoals;
