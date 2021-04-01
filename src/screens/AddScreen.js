import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons' ;
import axios from 'axios'

const AddScreen = ({ navigation } ) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [saveOpen, setSaveOpen] = useState(false)
    const [term, onTermChange] = React.useState('');

    return (
        <View >
            <Text style={styles.addStyle}>Add Ingredients</Text>
                    <View  style={styles.serchbarStyle}>
                        <Icon style={styles.iconStyle} name="ios-search" color='white'size={25} alignItems= 'center'/>
                        <TextInput 
                           style={styles.inputStyle} 
                           placeholder ="Search"
                           placeholderTextColor="#FF5733"
                           value ={term}
                           onChangeText = {newTerm =>onTermChange(newTerm)}
                           />
                         </View>
                        
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
                containerStyle={{ height: 26, width: 200, top: 125, left: 27, position: 'absolute' }}
                labelStyle={{ color: "#FF5733" }}
                onChangeItem={item => console.log(item.label, item.value)}
            />

            <Text onPress={() => navigation.navigate('TotalAdd')}
                style={styles.igdStyle}>Your Ingredients &gt;</Text>
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
    iconStyle:{

        alignSelf: 'center'
    },
    serchbarStyle:{
        backgroundColor: '#FF5733',
        height: 49,
        width: 321,
        marginHorizontal: 15,
        flexDirection: 'row',
        position: 'absolute',
        top: 62,
        left: 15

    },
    inputStyle:{
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 24,
        height: 37,
        width: 290,
        position: 'absolute',
        left: 25,
        top: 7,
        padding: 7,
        color: "#FF5733",
       
        
    },

    addStyle: {
        fontSize: 20,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        fontWeight: "bold",
        left: 36,
        top: 30
    },
    igdStyle: {
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        textAlign: "center",
        left: 240,
        top: 130
    },
    BoxStyle: {
        width: 303,
        height: 494,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF5733',
        position: 'absolute',
        left: 35,
        top: 170
    },
    PicStyle: {
        width: 84,
        height: 84,
        borderRadius: 20,
        backgroundColor: '#FF5733',
        position: 'absolute',
        left: 47,
        top: 184
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
        left: 228,
        top: 678,
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
        top: 381,
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
        top: 315,
        left: 125,
        textAlign: "center",
    },
    barStyle:{
        top: 36,
        left: 62,
    }
    
});


export default AddScreen;