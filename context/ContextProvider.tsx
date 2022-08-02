import { useMemo, createContext, useReducer } from "react";

interface Goal {
    id: number;
    goal: string;
    date: Date;
    complete: boolean;
}

type State = {
    goals: Goal[];
};

type Action = { type: "ADD_GOAL"; goal: string };

type ProviderProps = {
    children: React.ReactNode;
};

const initialState: State = {
    goals: [
        { id: 1, goal: "first todo", date: new Date(), complete: false },
        { id: 2, goal: "second todo", date: new Date(), complete: false },
        { id: 3, goal: "third todo", date: new Date(), complete: false },
    ],
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ADD_GOAL": {
            const newGoal: Goal = {
                id: Math.random(),
                goal: action.goal,
                date: new Date(),
                complete: false,
            };
            return {
                ...state,
                goals: [...state.goals, newGoal],
            };
        }

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
