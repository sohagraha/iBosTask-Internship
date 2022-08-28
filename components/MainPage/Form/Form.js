import { Button, Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker'


const Form = () => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.formHead}>Please input your information</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Leave type</Text>
                    <Picker>
                        <Picker.Item label=" " value="select" />
                        <Picker.Item label="2" value="selects" />
                    </Picker>
                    <View style={styles.line} />
                </View>
                <View style={styles.dates}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Location</Text>
                        <View style={styles.flex} onPress={() => setOpen(true)} >
                            <TextInput editable={false} value={date} />
                            <TouchableOpacity onPress={() => setOpen(true)} >
                                <Image source={require("../../../assets/icons/calender.png")} style={styles.calendar} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputLabel}>Location</Text>
                        <View style={styles.flex}>
                            <TextInput editable={false} />
                            <TouchableOpacity onPress={() => setOpen(true)} >
                                <Image source={require("../../../assets/icons/calender.png")} style={styles.calendar} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Location</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Reason</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.upload}>
                    <Image source={require("../../../assets/icons/upload.png")} style={styles.uploadicon} />
                    <Text style={styles.uploadtext}>File Upload</Text>
                </View>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Apply</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginTop: 8,
    },
    formContainer: {
        paddingTop: 28,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 24,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#e6e6e6",
    },
    formHead: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 28,
        color: '#344054',
    },
    inputContainer: {
        marginTop: 16,
        paddingHorizontal: 24,
        flex: 1,
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
        color: '#299647',
        marginLeft: 0,
    },
    dates: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    input: {
        height: 40,
        borderColor: 'red',
        borderBottomColor: '#D0D5DD',
        borderBottomWidth: 1,
    },
    line: {
        height: 1,
        backgroundColor: '#D0D5DD',
    },
    upload: {
        paddingVertical: 34,
        paddingHorizontal: 29,
        display: 'flex',
        flexDirection: 'row',
    },
    uploadtext: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        color: '#34A853',
        paddingLeft: 13,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 31,

    },
    btn: {
        backgroundColor: '#299647',
        borderRadius: 100,
    },
    btnText: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 20,
        color: '#FFF',
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 24,
    },
});
