import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ReviewProps } from '../../../@types/ReviewProps';
import fonts from '../../../styles/fonts';

import imgStar from '../../../core/assets/star.png';

import { colors } from '../../../styles/global';

const Review: React.FC<ReviewProps> = ({ text, user }) => {

    return (
        <>
            <View style={styles.reviewUser}>
                <Image source={imgStar} />
                <Text style={styles.reviewUserName}>{user.name}</Text>
            </View>
            <View style={styles.reviewUserContainer}>
                <Text style={styles.reviewUserText}>
                    {text}
                </Text>
            </View>
        </>
    );

}

const styles = StyleSheet.create({

    card: {
        width: 374,
        minHeight: 193,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: colors.card,
    },

    content: {
        width: "100%",
        padding: 20,
    },

    reviewTitle: {
        fontSize: 22,
        fontFamily: fonts.bold,
        color: colors.white,
    },

    reviewUser: {
        marginTop: 15,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: "center",
        paddingLeft: 15,
    },

    reviewUserName: {
        marginLeft: 15,
        fontSize: 16,
        fontFamily: fonts.bold,
        color: colors.white
    },

    reviewUserContainer: {
        minHeight: 66,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 13
    },

    reviewUserText: {
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.textColor,
    }

})

export default Review;