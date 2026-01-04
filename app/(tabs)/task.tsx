import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const TaskCard = () => {
    return (
        <View style={styles.card}>
            <Pressable style={styles.markButton}>
                <View style={styles.checked}></View>
            </Pressable>
            <Text style={[styles.contentText, styles.completedText]}>
                Demo Task Demo Task Demo Task Demo Task Demo Task Demo Task Demo Task
            </Text>
        </View>
    )
}

const Task = () => {
    const [task, setTask] = useState("");

    return (
        <SafeAreaView>
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Write your task here..."
                    style={styles.input}
                    onChangeText={(text) => { setTask(text) }}
                    value={task}
                />
                <TouchableOpacity style={styles.buttonBg}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>

            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
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
    }
})
export default Task;