export type CounterState = {
	count: number;
};

export type DerivedCounterType = {
	count: number;
	increment: () => void;
};

export type CounterType = {Component: React.FC<DerivedCounterType>};
export type ParentType = {
	name: string;
};
export type LifecycleState = {
	count: number;
};
export type FormState = {
	name: string; comment: string; select: string;
};
