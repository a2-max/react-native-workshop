import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const TaskCard = () => {
    return (
        <View style={styles.card}>
            <Pressable style={styles.markButton}>
                <View style={styles.checked}></View>
            </Pressable>
            <Text>Demo Task</Text>
            <Entypo name="trash" />
        </View>
    )
}
const Task = () => {
    return (
        <SafeAreaView>
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Write your task here..."
                    style={styles.input}
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
    }
})
export default Task;