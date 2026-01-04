import { completeTask, createTask, getTasks, Task as TaskType } from "@/src/utils/taskStorage";
import React, { useState } from "react";
import { Alert, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type taskCardType = {
    task: TaskType[],
    onCompletedAt: (id: string) => void;
}

export const TaskCard = ({ task, onCompletedAt }: taskCardType) => {
    const isCompleted = task.completedAt ? true : false;

    return (
        <View style={styles.card}>
            <Pressable style={styles.markButton} onPress={() => onCompletedAt(task.id)}>
                {isCompleted && <View style={styles.checked}></View>}
            </Pressable>
            <Text style={[styles.contentText, isCompleted && styles.completedText]}>
                {task.content}
            </Text>
        </View>
    )
}

const Task = () => {
    const [task, setTask] = useState<string>("");
    const [taskList, setTaskList] = useState<TaskType[]>([]);

    const handleSave = async () => {
        const result = await createTask(task);
        if (result) {
            Alert.alert("Task created.");
            setTask("");
            fetchTask();
        }
    }

    const fetchTask = async () => {
        const result = await getTasks();

        if (result) {
            setTaskList(result);
        }
    }

    const handleCompleted = async (id: string) => {
        const result = await completeTask(id);
        if (result) {
            Alert.alert("Wooho!", "You've completed this task.");
            fetchTask();
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Write your task here..."
                    style={styles.input}
                    onChangeText={(text) => { setTask(text) }}
                    value={task}
                />

                <TouchableOpacity style={styles.buttonBg} onPress={handleSave}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={taskList}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listWrapper}
                renderItem={(item) => (
                    <TaskCard
                        task={item.item}
                        onCompletedAt={(id) => { handleCompleted(id) }}
                    />
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 16,
        marginTop: 30,
    },
    input: {
        borderWidth: 1,
        flex: 1,
        borderColor: '#999',
        paddingHorizontal: 8,
        borderRadius: 8
    },
    buttonBg: {
        backgroundColor: 'green',
        height: 50,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 700
    },
    card: {
        borderWidth: 1,
        borderColor: "#999",
        paddingVertical: 8,
        paddingHorizontal: 12,
        elevation: 5, // for shadow
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 4
    },
    markButton: {
        height: 20,
        width: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#666",
        justifyContent: 'center',
        alignItems: 'center'
    },
    checked: {
        height: 10,
        width: 10,
        backgroundColor: 'green',
        borderRadius: 50
    },
    contentText: {
        fontSize: 16,
        fontWeight: 400,
        color: "#444",
        flex: 1
    },
    completedText: {
        textDecorationLine: 'line-through'
    },
    listWrapper: {
        paddingHorizontal: 16,
        marginTop: 30,
        gap: 12
    }
})
export default Task;