import Goals from '../Goals';
import { ContextProvider } from '../../../context/ContextProvider';
import { render } from '@testing-library/react-native';

test('should render GoalItem', () => {
    render(
        <ContextProvider>
            <Goals />
        </ContextProvider>
    );
});
