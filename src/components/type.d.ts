export type CounterState = {
	count: number;
};

export type DerivedCounterType = {
	count: number;
	increment: () => void;
};

export type CounterType = {Component: React.FC<DerivedCounterType>};
