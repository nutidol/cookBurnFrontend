import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Image , ActivityIndicator} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios'
import AsyncStorage from "@react-native-async-storage/async-storage";


const AddScreen = ({ navigation }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [saveOpen, setSaveOpen] = useState(false);
    // const [addOpen, setAddOpen] = useState(false);
    const [term, setTerm] = useState("");
    const [value, setValue] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const [unit, setUnit] = useState(null);
    const [pic, setPic] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState("");
    const [defaultUnit, setDefaultUnit] = useState("");
    const [defaultQty, setDefaultQty] = useState("");
    const [igdName, setIgdName] = useState("");
    const [click, setClick] = useState({
        unit: [],
        SK: "",
        PK: "",
        name: "",
        url: "",
        ingredientID: 0
    }
    );

    const ingredientDefault = async (ingredientName) => {
        const id = await AsyncStorage.getItem("userID");
        const response1 = await fetch(
          `https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/ingredientsPage/IngredientInfo/${id}/${ingredientName}`
        );
        const data1 = await response1.json();
        setDefaultQty(data1.quantity);
        setDefaultUnit(data1.unit);
        
      }

   

    const [response, setResponse] = useState([]);

    const isSelected = (image) => {
        for (var i in response) {
            if (response[i].url === image)
                return true;
        }
        return false;
    }

    const removeFromSelectedImages = (image) => {
        var newSelected = [];
        for (var i in response) {
            if (response[i].url !== image)
                newSelected.push(response[i]);
        }
        setResponse(newSelected);
    }

    console.log(response);
    
    
    const getSearchItem = async (term) => {
        console.log(term);
        const response = await fetch(`https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/ingredientsPage/searchIngredient?ingredient=${term}`);
        const data = await response.json();
        console.log(data);
        setPic([{ food: data[0], left: 47, top: 184 }]);
        return term;
    }


    async function postData() {

        try {
            const id = await AsyncStorage.getItem("userID");
            console.log(id);
            const article = {
                userID: id,
                ingredients: response
            };
            setLoading(true);
            const res = await axios.post(
                "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/ingredientsPage/yourIngredients",
                article
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
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
            linkValue = "grain"
        }
        else if (value === '5') {
            linkValue = "condiment"
        } else {
            linkValue = "others"
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
            { food: data[10], left: 143, top: 484 },
            { food: data[11], left: 239, top: 484 },
            

        ]);
        return linkValue;
    }

    return (
        <View >
            <Text style={styles.addStyle}>Add Ingredients</Text>
            <View style={styles.serchbarStyle}>
                <TouchableOpacity
                    onPress={() => getSearchItem(term)}>
                    <Icon style={styles.iconStyle} name="ios-search" color='white' size={25} />
                </TouchableOpacity>

                <TextInput
                    style={styles.inputStyle}
                    placeholder="Search"
                    placeholderTextColor="#FF5733"
                    // value={term}
                    onChangeText={newTerm => setTerm(newTerm)}
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
                        setResponse([...response, { ingredientID: click.ingredientID, name: click.name, quantity: quantity, unit: unit, url: click.url }])
                        setModalOpen(false);
                        
                    }}
                >
                    <Text style={styles.AddStyle}>add</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.clearBoxStyle}
                    onPress={() => {
                        setModalOpen(false)
                        removeFromSelectedImages(click.url);
                        setQuantity(0);
                    }}>
                    <Text style={styles.AddStyle}>clear</Text>
                </TouchableOpacity>

                <DropDownPicker
                    items={click.unit}
                    placeholder= {defaultUnit}
                    containerStyle={{ height: 26, width: 100, left: 190, top: 482, position: 'absolute', zIndex:1 }}
                    labelStyle={{ color: "#FF5733" }}
                    onChangeItem={item => setUnit(item)}
                    placeholderStyle ={{ textAlign: 'center'}}
                />

                <TextInput style={styles.numberStyle}
                    color='#FF5733'
                    textAlign='center'
                    defaultValue={defaultQty}
                    onChangeText={newTerm => setQuantity(newTerm)}
                />

            </Modal>
            <TouchableOpacity
                style={styles.saveBoxStyle}
                onPress={() => {
                    postData();
                    setSaveOpen(true)
                }}>
                <Text style={styles.saveStyle}> {isLoading && <ActivityIndicator size="small" />} save</Text>
            </TouchableOpacity>
           
            <Modal visible={saveOpen}>
                <MaterialIcons
                    name='close'
                    size={24}
                    color='#FF5733'
                    onPress={() => setSaveOpen(false)} />
                <Text style={styles.aStyle}>Your Ingredients {'\n'} are Saved!</Text>
                <TouchableOpacity
                    style={styles.seeBoxStyle}
                    onPress= {() => {navigation.navigate('TotalAdd');
                    setSaveOpen(false);
                }
                    }>
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
                            ingredientDefault(food.name);
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
        alignItems: 'center',
        padding: 10,
        paddingLeft: 295,
        zIndex: 10
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
        left: 3,
        top: 6,
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