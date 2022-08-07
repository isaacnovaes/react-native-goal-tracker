import GoalItem from '../GoalItem';
import type { Goal } from '../../../Types/types';
import { render } from '@testing-library/react-native';

test('should render GoalItem', () => {
    const goal: Goal = {
        goal: 'first goal',
        id: 'fsgsgs656',
        complete: false,
        date: new Date(),
    };

    const { getByText } = render(<GoalItem goal={goal} />);

    const item = getByText(/goal/);

    expect(item).toBeDefined();
});
