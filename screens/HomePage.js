import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import MenuCard from '../component/MenuCard';
import TextCard from '../component/TextCard';
import FlipCard from 'react-native-flip-card';
//npm i react-native-flip-card

export default function HomePage({ navigation }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainContainer}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}>Preparetion </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <MenuCard menuTitle={"Modules"} iconName={"altimeter"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('Module')} />
                    <MenuCard menuTitle={"Vocabulary"} iconName={"notebook-plus"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('Vocabulary')} />
                    <MenuCard menuTitle={"Exercise"} iconName={"check-network-outline"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('Exercise')} />
                    <MenuCard menuTitle={"WordPlay"} iconName={"outdoor-lamp"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('#')} />
                    <MenuCard menuTitle={"Refference"} iconName={"paperclip"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('#')} />
                    <MenuCard menuTitle={"Exam details"} iconName={"parachute"} iconSize={60}
                        iconColor={"green"} onPress={() => navigation.navigate('#')} />
                </ScrollView>

            </View>

            <FlipCard>
                {/* Face Side */}

                <View style={styles.banner}>
                    <Text> Banner </Text>
                </View>

                {/* Back Side */}

                <View style={styles.banner}>
                    <Text> Banner 3  </Text>
                </View>

            </FlipCard>

            <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}> Module  </Text>
            <View style={styles.module}>
                <MenuCard menuTitle={"Reading"} iconName={"playlist-star"} iconSize={60}
                    iconColor={"red"} onPress={() => navigation.navigate('Reading')} />
                <MenuCard menuTitle={"Speaking"} iconName={"account-voice"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('Speaking')} />

            </View>
            <View style={styles.module}>
                <MenuCard menuTitle={"Listening"} iconName={"surround-sound"} iconSize={60}
                    iconColor={"magenta"} onPress={() => navigation.navigate('Lestining')} />
                <MenuCard menuTitle={"Writing"} iconName={"draw-pen"} iconSize={60}
                    iconColor={"blue"} onPress={() => navigation.navigate('Writing')} />

            </View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}> Book a test   </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TextCard iconColor={"green"} iconSize={25}
                     cardTitle={"IELTS Academic"}
                    textDetails={"For University Student"}
                   
                    onPressDetails={() => navigation.navigate('*')}
                />
                <TextCard iconName={"shuriken"} iconColor={"yellow"} iconSize={25}
                     cardTitle={"IELTS General"}
                    textDetails={"For citizen and their livelihood "}
                   
                    onPressDetails={() => navigation.navigate('*')}
                />
                <TextCard iconName={"shuriken"} iconColor={"blue"} iconSize={25}
                    cardTitle={"IELTS in a test Center"}
                    textDetails={"Computer based or Writing "}
                    
                    onPressDetails={() => navigation.navigate('*')}
                />
                  <TextCard iconName={"shuriken"} iconColor={"blue"} iconSize={25}
                    cardTitle={"IELTS Online"}
                    textDetails={"Own Home or Private space "}
                    
                    onPressDetails={() => navigation.navigate('*')}
                />

            </ScrollView>
            <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}> Reading Section   </Text>
            <View style={styles.module}>
           
                <MenuCard menuTitle={"Passage 1"} iconName={"podium-bronze"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Passage 2"} iconName={"podium-gold"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Passage 3"} iconName={"podium-silver"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
            </View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}> Writing  Section   </Text>
            <View style={styles.module}>
                <MenuCard menuTitle={"Task 1"} iconName={"robot"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Task 2"} iconName={"robot-angry"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
            </View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}> Speaking  Section   </Text>
            <View style={styles.module}>
                <MenuCard menuTitle={"Part 1 "} iconName={"account-tie-voice"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Part 2 "} iconName={"account-voice"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Part 3"} iconName={"account-tie-voice-off"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
            </View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}> Listening   Section   </Text>
            <View style={styles.module}>
                <MenuCard menuTitle={"Section  1 "} iconName={"roman-numeral-1"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Section 2 "} iconName={"roman-numeral-2"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                <MenuCard menuTitle={"Section 3"} iconName={"roman-numeral-3"} iconSize={60}
                    iconColor={"green"} onPress={() => navigation.navigate('#')} />
                     <MenuCard menuTitle={"Section 4"} iconName={"roman-numeral-4"} iconSize={60}
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