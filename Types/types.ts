export interface Goal {
    id: string;
    goal: string;
    date: Date;
    complete: boolean;
}

export type OrNull<T> = T | null;
