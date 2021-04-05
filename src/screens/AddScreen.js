import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios'

const AddScreen = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [saveOpen, setSaveOpen] = useState(false);
    // const [addOpen, setAddOpen] = useState(false);
    const [term, onTermChange] = React.useState('');
    const [value, setValue] = useState(null);
    let controller;
    const [unit, setUnit] = useState(null);
    const [pic, setPic] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);
    const [click, setClick] = useState({
        unit: [],
        SK: "",
        PK: "",
        name: "",
        url: "",
        ingredientID: 0
    }

    );

    const isSelected = (image) => {
        for (var i in selectedImages) {
            if (selectedImages[i] === image)
                return true;
        }
        return false;
    }

    const removeFromSelectedImages = (image) => {
        var newSelected = [];
        for (var i in selectedImages) {
            if (selectedImages[i] !== image)
                newSelected.push(selectedImages[i]);
        }
        setSelectedImages(newSelected);
    }

    console.log(selectedImages);

    console.log(unit);

    const getItem = async (value) => {
        let linkValue = ""
        if (value === '1') {
            linkValue = "meat"
        } else if (value === '2') {
            linkValue = "dairy"
        }
        else if (value === '3') {
            linkValue = "veggie"
        }
        else if (value === '4') {
            linkValue = "grains"
        }
        else if (value === '5') {
            linkValue = "dairy"
        } else {
            linkValue = ""
        }
        console.log(value);
        console.log(linkValue);


        const response = await fetch(`https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/ingredientsPage/ingredientLists/${linkValue}`);
        const data = await response.json();
        console.log(data);
        setPic([
            { food: data[0], left: 47, top: 184 },
            { food: data[1], left: 143, top: 184 },
            { food: data[2], left: 239, top: 184 },
            { food: data[3], left: 47, top: 284 },
            { food: data[4], left: 143, top: 284 },
            { food: data[5], left: 239, top: 284 },
            { food: data[6], left: 47, top: 384 },
            { food: data[7], left: 143, top: 384 },
            { food: data[8], left: 239, top: 384 },
            { food: data[9], left: 47, top: 484 },

        ]);
        return linkValue;
    }

    return (
        <View >
            <Text style={styles.addStyle}>Add Ingredients</Text>
            <View style={styles.serchbarStyle}>
                <Icon style={styles.iconStyle} name="ios-search" color='white' size={25} alignItems='center' />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Search"
                    placeholderTextColor="#FF5733"
                    value={term}
                    onChangeText={newTerm => onTermChange(newTerm)}
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
                containerStyle={{ height: 26, width: 200, top: 125, left: 23, position: 'absolute' }}
                labelStyle={{ color: "#FF5733" }}
                onChangeItem={item => getItem(item.value)}
            />

            <Text onPress={() => navigation.navigate('TotalAdd')}
                style={styles.igdStyle}>Your Ingredients &gt;</Text>
            <View style={styles.BoxStyle}></View >

            <Modal
                visible={modalOpen}
                animationType='slide'
                presentationStyle='fullScreen'>

                <MaterialIcons
                    name='close'
                    size={24}
                    color='#FF5733'
                    onPress={() => setModalOpen(false)} />


                <Text style={styles.textStyle}>{click.name}</Text>
                <Image
                    source={{ uri: click.url }}
                    style={{
                        width: 147,
                        height: 147,
                        left: 109,
                        top: 300,
                        position: "absolute",
                    }}
                />
                <TouchableOpacity
                    style={styles.addBoxStyle}
                    onPress={() => {
                        setModalOpen(false);
                        setSelectedImages([...selectedImages, click.url])
                    }}
                >
                    <Text style={styles.AddStyle}>add</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.clearBoxStyle}
                    onPress={() => {
                        setModalOpen(false)
                        removeFromSelectedImages(click.url);
                    }}>
                    <Text style={styles.AddStyle}>clear</Text>
                </TouchableOpacity>

                <DropDownPicker
                    items={click.unit}
                    defaultIndex={0}
                    placeholder="units"
                    containerStyle={{ height: 26, width: 100, left: 190, top: 482, position: 'absolute' }}
                    labelStyle={{ color: "#FF5733" }}
                    onChangeItem={item => setUnit(item)}
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
                <Text style={styles.saveStyle}>save</Text>
            </TouchableOpacity>
            <Modal visible={saveOpen}>
                <MaterialIcons
                    name='close'
                    size={24}
                    color='#FF5733'
                    onPress={() => setSaveOpen(false)} />
                <Text style={styles.aStyle}>Your Ingredients {'\n'} are Saved!</Text>
                <TouchableOpacity
                    style={styles.seeBoxStyle}>
                    <Text style={styles.seeStyle}>See your ingredients</Text>
                </TouchableOpacity>
            </Modal>

            {pic && pic.map(({ food, left, top }) => {
                return (

                    <TouchableOpacity
                        key={food.SK}
                        onPress={() => {
                            setClick(food);
                            setModalOpen(true);

                        }}
                    >
                        <Image
                            source={{ uri: food.url }}
                            style={{
                                width: 84,
                                height: 84,
                                left,
                                top,
                                position: "absolute",
                                opacity: isSelected(food.url) ? 1 : 0.3,
                            }}
                        />
                    </TouchableOpacity>

                );
            })}
        </View>


    );


};

const styles = StyleSheet.create({
    iconStyle: {

        alignSelf: 'center'
    },
    serchbarStyle: {
        backgroundColor: '#FF5733',
        height: 49,
        width: 321,
        marginHorizontal: 15,
        flexDirection: 'row',
        position: 'absolute',
        top: 62,
        left: 15

    },
    inputStyle: {
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
        left: 236,
        top: 130
    },
    BoxStyle: {
        width: 303,
        height: 440,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF5733',
        //backgroundColor: 'white',
        position: 'absolute',
        left: 35,
        top: 170,
    },

    textStyle: {
        left: 160,
        top: 260,
        fontSize: 25,
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
        width: 68,
        height: 24,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 200,
        top: 521,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#FF5733",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
    },

    clearBoxStyle: {
        width: 68,
        height: 24,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 111,
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
        textAlign: 'center'
    },
    saveBoxStyle: {
        width: 120,
        height: 37,
        backgroundColor: "#FF5733",
        position: "absolute",
        left: 228,
        top: 630,
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
    aStyle: {
        fontSize: 15,
        color: "#FF5733",
        position: 'absolute',
        fontWeight: "bold",
        top: 315,
        left: 125,
        textAlign: "center",
    },
    barStyle: {
        top: 36,
        left: 62,
    }

});


export default AddScreen;