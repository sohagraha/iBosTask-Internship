import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import SingleApplication from './SingleApplication/SingleApplication';

const applications = [
    {
        id: 1,
        title: 'Leave',
        icon: require('./../../../assets/icons/leave.png'),
        color: '#D444F1'
    },
    {
        id: 2,
        title: 'Movements',
        icon: require('./../../../assets/icons/movement.png'),
        color: '#2E90FA'
    },
    {
        id: 3,
        title: 'Remote Attendance',
        icon: require('./../../../assets/icons/remote-attendance.png'),
        color: '#F63D68',
    },
    {
        id: 4,
        title: 'IOU',
        icon: require('./../../../assets/icons/iou.png'),
        color: '#F79009',
    },
    {
        id: 5,
        title: 'Loan',
        icon: require('./../../../assets/icons/loan.png'),
        color: '#669F2A',
    },
    {
        id: 6,
        title: 'Overtime',
        icon: require('./../../../assets/icons/overtime.png'),
        color: '#875BF7',
    }
]

const Applications = () => {
    return (
        <View style={styles.applicationContainer}>
            <Text style={styles.applicationHeader}>Employee Application</Text>
            <View style={styles.applications}>
                {
                    applications.map(application => (
                        <SingleApplication key={application.id} application={application} />
                    ))
                }
            </View>
        </View>
    );
};

export default Applications

const styles = StyleSheet.create({
    applicationContainer: {
        marginTop: 8,
        paddingTop: 16,
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
    },
    applicationHeader: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 28,
        color: '#344054',
    },
    applications: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
})