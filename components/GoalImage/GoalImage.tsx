import { Image } from 'react-native';

const GoalImage = () => {
    return (
        <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            source={require('../../assets/goal.png')}
            accessibilityLabel='Gaol image'
        />
    );
};
export default GoalImage;
