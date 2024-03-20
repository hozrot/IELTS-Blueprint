import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import MenuCard from '../component/MenuCard';
import TextCard from '../component/TextCard';

export default function HomePage({navigation}) {
    return (
        <ScrollView >
            <View style={styles.mainContainer}>
                <Text>Preparetion </Text>
                <ScrollView horizontal={true}>
                    <MenuCard menuTitle={"Vocabulary"} iconName={"book"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('ReadingPage')} />
                    <MenuCard menuTitle={"Reading"} iconName={"webpack"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('#')} />
                    <MenuCard menuTitle={"Reading"} iconName={"webpack"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('#')} />
                    <MenuCard menuTitle={"Reading"} iconName={"webpack"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('#')} />
                    <MenuCard menuTitle={"Reading"} iconName={"webpack"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('#')} />
                </ScrollView>

            </View>
            <View style={styles.banner}>
                <Text> Banner </Text>
            </View>
            <Text> Module  </Text>
            <View style={styles.module}>
                <MenuCard menuTitle={"Reading"} iconName={"read"} iconSize={60}
                    iconColor={"red"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Speaking"} iconName={"speaking"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('ModulePage')} />

            </View>
            <View style={styles.module}>
                <MenuCard menuTitle={"Listening"} iconName={"hear"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Writing"} iconName={"write"} iconSize={60}
                    iconColor={"blue"} onPress={() => navigation.navigate('#')} />

            </View>

            <ScrollView horizontal={true} style={styles.score}>
                <TextCard iconColor={"green"} iconSize={25}
                    textDetails={"Give a details OverView"}
                    cardTitle={"Beautiful Name"}
                    onPressDetails={() => navigation.navigate('ReadingPage')}
                />
                <TextCard iconName={"shuriken"} iconColor={"yellow"} iconSize={25}
                    textDetails={"Give a details OverView"}
                    cardTitle={"Beautiful Name"}
                    onPressDetails={() => navigation.navigate('ReadingPage')}
                />
                <TextCard iconName={"shuriken"} iconColor={"blue"} iconSize={25}
                    textDetails={"Give a details OverView"}
                    cardTitle={"Beautiful Name"}
                    onPressDetails={() => navigation.navigate('ReadingPage')}
                />

            </ScrollView>
            <View style={styles.module}>
                <MenuCard menuTitle={"Listening"} iconName={"hear"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Listening"} iconName={"hear"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                      <MenuCard menuTitle={"Listening"} iconName={"hear"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
            </View>
            <View style={styles.module}>
                <MenuCard menuTitle={"Listening"} iconName={"hear"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Listening"} iconName={"hear"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
            </View>
            <View style={styles.module}>
                <MenuCard menuTitle={"Listening"} iconName={"hear"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Listening"} iconName={"hear"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                      <MenuCard menuTitle={"Listening"} iconName={"hear"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        height: 130,
    },
    banner: {
        height: 100,
        backgroundColor: "#fc5c65",
        justifyContent: "center",
        alignItems: 'center',
        margin: 20,
        borderRadius: 30
    },
    module: {
        height: 100,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row'
    },
    score: {


    }

})