import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileInfo = () => {
    return (
        <View style={styles.profileContainer}>
            <View style={styles.profileInfo}>
                <Image source={require('../../../assets/images/Avatar.png')} style={styles.profileIcon} />
                <View style={styles.profileDetails}>
                    <Text style={styles.profileName}>
                        Darlene Robertson
                    </Text>
                    <Text style={styles.profilePosition}>
                        Senior UX Designer
                    </Text>
                    <View style={styles.profileInfoBottom}>
                        <Text style={styles.profileId}>
                            ID43178
                        </Text>
                        <View>
                            <Text style={styles.profileActions}>
                                Active
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.aboutContainer}>
                <View style={styles.about}>
                    <Image source={require('../../../assets/icons/Job.png')} style={styles.profileIcons} />
                    <View style={styles.aboutTextContainer}>
                        <Text style={styles.aboutText}>
                            Human Resource
                        </Text>
                        <Text style={styles.aboutTextSmall}>
                            Department
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.aboutContainer}>
                <View style={styles.about}>
                    <Image source={require('../../../assets/icons/birthday.png')} style={styles.profileIcons} />
                    <View style={styles.aboutTextContainer}>
                        <Text style={styles.aboutText}>
                            28 September, 1990
                        </Text>
                        <Text style={styles.aboutTextSmall}>
                            Date of Birth
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.aboutContainer}>
                <View style={styles.about}>
                    <Image source={require('../../../assets/icons/avatar.png')} style={styles.profileIcons} />
                    <View style={styles.aboutTextContainers}>
                        <Text style={styles.aboutText}>
                            Female
                        </Text>
                        <Text style={styles.aboutTextSmall}>
                            Gender
                        </Text>
                    </View>
                    <View style={styles.aboutTextContainerSecond}>
                        <Text style={styles.aboutText}>
                            Islam
                        </Text>
                        <Text style={styles.aboutTextSmall}>
                            Religion
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileInfo;

const styles = StyleSheet.create({
    profileContainer: {
        paddingTop: 22,
        paddingLeft: 16,
        paddingBottom: 16,
        paddingRight: 16,
        backgroundColor: '#fff',
    },
    profileInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    profileIcon: {
        width: 72,
        height: 72,
    },
    profileDetails: {
        marginLeft: 19,
        flex: 1,
    },
    profileName: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 30,
        color: '#344054',
    },
    profilePosition: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        marginTop: 4,
        color: '#344054',
    },
    profileInfoBottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileId: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 20,
        marginTop: 4,
        color: '#344054',
        fontStyle: 'uppercase',
    },
    profileActions: {
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 18,
        backgroundColor: '#E6F9E9',
        borderRadius: 99,
        paddingVertical: 1,
        paddingHorizontal: 8,
        color: '#299647',
    },
    aboutContainer: {
        borderTopColor: '#F2F2F7',
        borderTopWidth: 1,
    },
    about: {
        marginTop: 8,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'row',
    },
    profileIcons: {
        width: 18,
        height: 18,
        marginLeft: 2,
        marginTop: 3,
    },
    aboutTextContainer: {
        marginLeft: 18,
        flex: 1,
    },
    aboutText: {
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
    },
    aboutTextSmall: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        marginTop: 4,
    },
    aboutTextContainers: {
        marginLeft: 18,
        paddingRight: 24,
        borderRightWidth: 1,
        borderRightColor: '#F2F2F7',
    },
    aboutTextContainerSecond: {
        marginLeft: 24,
    },
});
