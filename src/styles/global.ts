import { StyleSheet } from 'react-native';
import fonts from './fonts';

export const colors = {
    white: "#FFFFFF",
    black: "#000000",
    lightGray: "#F2F2F2",
    mediumGray: "#515151",
    darkGray: "#263238",
    black30: "#00000033",
    primary: "#FFC700",
    card: "#6C6C6C",
    secondary: "#515151",
    borderGray: "#E1E1E1",
    textColor: "#CDCDCD",
}

export const text = StyleSheet.create({

    HeaderText: {
        color: colors.black,
        fontSize: 18,
        fontFamily: fonts.bold,
        marginLeft: 50,
    },

    homeTitle: {
        color: colors.white,
        fontSize: 26,
        fontFamily: fonts.bold,
    },

    homeSubtitle: {
        color: colors.white,
        fontSize: 16,
        marginTop: 50,
        marginBottom: 55,
        textAlign: "center",
    },

    primaryText: {
        fontSize: 16,
        fontFamily: fonts.bold,
        textTransform: "uppercase",
        color: colors.black,
        marginLeft: 65,
    },

    loginTitle: {
        textTransform: "uppercase",
        fontSize: 30,
        fontWeight: "400",
        marginTop: 90,
        marginBottom: 50,
        color: colors.white,
    }

});

export const theme = StyleSheet.create({

    authContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        fontFamily: fonts.text,
        paddingBottom: 150,
        backgroundColor: colors.secondary,
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: colors.secondary,
    },

    card: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        alignItems: "center",
    },

    draw: {
        width: 313,
        height: 225,
        marginTop: 50,
        marginBottom: 40,
    },

    primaryButton: {
        width: 290,
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: colors.primary,
    },

    buttonText: {
        width: "60%",
        alignItems: "center"
    },

    arrowContainer: {
        height: 50,
        width: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#26323850",
    },

    form: {
        marginVertical: 10,
    },

    passwordGroup: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25,
    },

    textInput: {
        width: 290,
        height: 50,
        borderWidth: 1,
        borderColor: colors.mediumGray,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
    },

    toggle: {
        margin: -40
    },
    
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },

});

