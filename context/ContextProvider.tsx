import { useMemo, createContext, useReducer } from 'react';
import type { Goal, OrNull } from '../Types/types';

type State = {
    goals: Goal[];
    selectedId: OrNull<string>;
};

type Action =
    | { type: 'ADD_GOAL'; goal: string }
    | { type: 'DELETE_GOAL'; id: string }
    | { type: 'SELECT_GOAL'; id: OrNull<string> };

type ProviderProps = {
    children: React.ReactNode;
};

const initialState: State = {
    goals: [],
    selectedId: null,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_GOAL': {
            const newGoal: Goal = {
                id: Math.random().toString(),
                goal: action.goal,
                date: new Date(),
                complete: false,
            };
            state.goals.push(newGoal);
            return {
                ...state,
            };
        }
        case 'DELETE_GOAL':
            return {
                ...state,
                goals: state.goals.filter((goal) => goal.id !== action.id),
                selectedId: null,
            };
        case 'SELECT_GOAL':
            return { ...state, selectedId: action.id };
        default:
            return state;
    }
};

const Context = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ state: initialState, dispatch: () => {} });

function ContextProvider({ children }: ProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const data = useMemo(() => {
        return { state, dispatch };
    }, [state]);

    return <Context.Provider value={data}>{children}</Context.Provider>;
}

export { Context, ContextProvider };
