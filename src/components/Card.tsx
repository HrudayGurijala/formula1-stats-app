import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <TouchableOpacity>
        <View style={styles.cardContainer}>
            <View style={styles.content}>
                <Text style={styles.driver}>Max Verstappen</Text>
                <Text style={styles.teamName}>Red Bull Racing</Text>
                <Text style={styles.points}>Points : 600</Text>
            </View>
            <View>
                <img src="" alt="" style={styles.image} />
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer:{

    },
    content:{

    },
    driver:{

    },
    teamName:{

    },
    image:{

    },
    points:{

    },
})