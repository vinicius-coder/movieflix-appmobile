import { StyleSheet } from 'react-native';

export const colors = {
    white: "#FFFFFF",
    black: "#000000",
    lightGray: "#F2F2F2",
    mediumGray: "#9E9E9E",
    darkGray: "#263238",
    black30: "#00000033",
    primary: "#FFC700",
    secondary: "#525252",
    borderGray: "#E1E1E1",
}

export const text = StyleSheet.create({

    HeaderText: {
        color: colors.black,
        fontSize: 18,
        fontWeight: "700",
        marginLeft: 45,
    },

    homeTitle: {
        color: colors.white,
        fontSize: 26,
        fontWeight: "700",
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
        fontWeight: "700",
        textTransform: "uppercase",
        color: colors.black,
        marginLeft: 50,
    },

});

export const theme = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
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
        marginTop: 40,
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

});

