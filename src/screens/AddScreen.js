import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { MaterialIcons } from '@expo/vector-icons';

const AddScreen = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [saveOpen, setSaveOpen] = useState(false)
    const [value, onChangeText] = React.useState('');


    return (
        <View >
            <Text style={styles.addStyle}>Add Ingredients</Text>
           
            <SearchBar 
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="Search"
                platform= 'ios'
                cancelButtonProps={{
                    color: 'white'
                }}
                placeholderTextColor="#FF5733"
                containerStyle={{
                    backgroundColor: "#FF5733"
                }}
                inputContainerStyle={{
                    backgroundColor: "white",
                    borderColor: "white",
                    borderWidth: 1,
                    borderRadius: 24
                }}
                searchIcon={{
                    color: "#FF5733",
                    size: 20
                }}
            />
        
            <DropDownPicker
                items={[
                    { label: 'Meat', value: '1' },
                    { label: 'Dairy', value: '2' },
                    { label: 'Veggie and Fruits', value: '3' },
                    { label: 'Grains', value: '4' },
                    { label: 'Condiments', value: '5' },
                    { label: 'Others', value: '6' },
                ]}
                defaultIndex={0}
                placeholder="select ingredients type"
                containerStyle={{ height: 26, width: 200, top: 165, left: 37, position: 'absolute' }}
                labelStyle={{ color: "#FF5733" }}
                onChangeItem={item => console.log(item.label, item.value)}
            />

            <Text onPress={() => navigation.navigate('TotalAdd1')}
                style={styles.igdStyle}>Your Ingredients</Text>
            <View style={styles.BoxStyle}>   </View >

            <TouchableOpacity
                onPress={() => setModalOpen(true)}
                style={styles.PicStyle} >
            </TouchableOpacity>

            <Modal
                visible={modalOpen}
                animationType='slide'
                presentationStyle='fullScreen'>
                <MaterialIcons
                    name='close'
                    size={24}
                    color='#FF5733'
                    onPress={() => setModalOpen(false)} />
                <Text style={styles.textStyle}>Bacon</Text>
                <TouchableOpacity style={styles.foodStyle}> </TouchableOpacity>
                <TouchableOpacity
                    style={styles.addBoxStyle}
                    onPress={() => setModalOpen(false)}>
                    <Text style={styles.AddStyle}> add</Text>
                </TouchableOpacity>
                <DropDownPicker
                    items={[
                        { label: 'Grams', value: '1' },
                        { label: 'Pieces', value: '2' },

                    ]}
                    defaultIndex={0}
                    placeholder="units"
                    containerStyle={{ height: 26, width: 70,left: 190, top: 482, position: 'absolute'}}
                    labelStyle={{ color: "#FF5733" }}
                    onChangeItem={item => console.log(item.label, item.value)}
                />
                <TextInput style={styles.numberStyle}
                    color='#FF5733'
                    textAlign='center'
                    defaultValue={1}
                />
            </Modal>
            <TouchableOpacity
                style={styles.saveBoxStyle}
                onPress={() => setSaveOpen(true)}>
                <Text style={styles.saveStyle}> save</Text>
            </TouchableOpacity>
            <Modal visible={saveOpen}>
                <MaterialIcons
                    name='close'
                    size={24}
                    color='#FF5733'
                    onPress={() => setSaveOpen(false)} />
                <Text style={styles.aStyle}> Your Ingredients {'\n'} are Saved!</Text>
                <TouchableOpacity
                    style={styles.seeBoxStyle}>
                    <Text style={styles.seeStyle}>See your ingredients</Text>
                </TouchableOpacity>
            </Modal>
        </View>


    );


};

const styles = StyleSheet.create({

    addStyle: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 70
    },
    igdStyle: {
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        left: 250,
        top: 170
    },
    BoxStyle: {
        width: 303,
        height: 494,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF5733',
        position: 'absolute',
        left: 35,
        top: 210
    },
    PicStyle: {
        width: 84,
        height: 84,
        borderRadius: 20,
        backgroundColor: '#FF5733',
        position: 'absolute',
        left: 47,
        top: 224
    },
    foodStyle: {
        width: 147,
        height: 147,
        backgroundColor: '#FF5733',
        borderRadius: 20,
        left: 109,
        top: 300
    },
    textStyle: {
        left: 162,
        top: 279,
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
    },
    AddStyle: {
        fontSize: 10,
        color: "white",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold"
    },
    addBoxStyle: {
        width: 120,
        height: 37,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 128,
        top: 521,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#FF5733",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    numberStyle: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF5733',
        height: 30,
        width: 64,
        position: 'absolute',
        left: 109,
        top: 480,
        color: '#FF5733',
        fontSize: 10,
        paddingHorizontal: 30
    },
    saveBoxStyle: {
        width: 120,
        height: 37,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 210,
        top: 718,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#FF5733",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },

    saveStyle: {
        fontSize: 10,
        color: "white",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold"
    },
    seeBoxStyle: {
        width: 141,
        height: 37,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 117,
        top: 421,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#FF5733",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },

    seeStyle: {
        fontSize: 10,
        color: "white",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold"
    },
    aStyle:{
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        fontWeight: "bold",
        top: 355,
        left: 125,
        textAlign: "center",

    },
    
});


export default AddScreen;