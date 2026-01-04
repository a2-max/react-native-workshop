import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@TASKS_STORAGE';

export type Task = {
    id: string;
    content: string;
    createdAt: string;
    completedAt?: string | null;
};


const generateId = (): string => {
    return (
        Date.now().toString()
    );
};

export const getTasks = async (): Promise<Task[]> => {
    try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error loading tasks:', error);
        return [];
    }
};

export const createTask = async (content: string): Promise<Task[]> => {
    try {
        const newTask: Task = {
            id: generateId(),
            content,
            createdAt: new Date().toISOString(),
            completedAt: null,
        };

        const tasks = await getTasks();
        const updatedTasks = [newTask, ...tasks];

        await AsyncStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(updatedTasks)
        );

        return updatedTasks;
    } catch (error) {
        console.error('Error creating task:', error);
        return [];
    }
};

export const completeTask = async (id: string): Promise<Task[]> => {
    try {
        const tasks = await getTasks();

        const updatedTasks = tasks.map(task =>
            task.id === id
                ? { ...task, completedAt: new Date().toISOString() }
                : task
        );

        await AsyncStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(updatedTasks)
        );

        return updatedTasks;
    } catch (error) {
        console.error('Error completing task:', error);
        return [];
    }
};
