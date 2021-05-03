import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, ActivityIndicator, Modal } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { MaterialIcons } from '@expo/vector-icons';



const MenuInformation = ({ navigation }) => {
    const [igd, setIgd] = useState([]);
    const [lackIgd, setLackIgd] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [nutrition, setNutrition] = useState([]);
    const [header, setheader] = useState([]);
    const [top, setTop] = useState(0);
    const [top1, setTop1] = useState(0);
    const [top2, setTop2] = useState(0);
    const [top3, setTop3] = useState(0);
    const [url, setUrl] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [dt, setDt] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);



    let data = [];

    useEffect(async () => {
        const id = await AsyncStorage.getItem("userID");
        const sk = await AsyncStorage.getItem("sk")
        const response = await fetch(`https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/menuPage/menu/${id}/${sk}`);
        //const response = await fetch("https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/menuPage/menu/123/gen_1618473042624_416792");
        data = await response.json();
        setDt(data)
        addDataToArray(data);
        console.log(data[0].totalLackIngredient)
    }, []);


    const checkEmpty = (array) => {
        
        if (array.length === 0) {
            let blank = ["none"];
             return blank;
        } else {
            return array
        }
    }
    

    useEffect(() => {
        if (!url) return;
    }, [url]);


    async function postData() {
        if (isLoading) {
            return;
        }
        try {
            const id = await AsyncStorage.getItem("userID");
            console.log(dt[0]);
            console.log(dt);
            const article = {
                userID: id,
                cookedMenu: dt

            };
            console.log(article);
            setLoading(true);
            const res = await axios.post(
                "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/menuPage/menu",
                article
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    const addDataToArray = (data) => {
        var array = [];
        var dataWithPosition = { title: data[0].title, url: data[0].url }
        array.push(dataWithPosition)
        setheader(array);


        var igdArray = [];
        var positionIgdTop = 240;
        for (var i in data[0].ingredientData) {
            var positionIgdLeft = 44;
            var positionAmountLeft = 250;
            var positionUnitLeft = 280;
            positionIgdTop += 25
            var igdWithPosition = {
                igdname: data[0].ingredientData[i].name, leftIgd: positionIgdLeft, topIgd: positionIgdTop,
                amount: data[0].ingredientData[i].amount, leftAmount: positionAmountLeft, unit: data[0].ingredientData[i].unit,
                leftUnit: positionUnitLeft
            }
            igdArray.push(igdWithPosition);

        }
        setTop(positionIgdTop);
        setIgd(igdArray);
        var positionLackTop = positionIgdTop + 40;
        var lackArray = [];
            let ans = checkEmpty(data[0].totalLackIngredient)
            for (var i in ans){
                positionLackTop +=25;
                var lackWithPosition = { lack: ans[i], topLack: positionLackTop }
                lackArray.push(lackWithPosition);
            }
        setTop1(positionLackTop);
        setLackIgd(lackArray);


        var recipeArray = [];
        var positionInstructionTop = positionLackTop + 10;
        for (var k in data[0].recipe) {
            var positionInstructionLeft = 50;
            positionInstructionTop += 60;
            var recipeWithPosition = { recipeInstruction: data[0].recipe[k].instruction, step: data[0].recipe[k].step, leftInstruction: positionInstructionLeft, topInstruction: positionInstructionTop }
            recipeArray.push(recipeWithPosition);
        }
        setRecipe(recipeArray);
        console.log(recipeArray)
        setTop2(positionInstructionTop);


        var nutritionArray = [];
        var positionNutritionTop = positionInstructionTop + 70;
        for (var l in data[0].nutrition) {

            positionNutritionTop += 25;
            var nutritionWithPosition = { menuInfo: data[0].nutrition[l], topNutrition: positionNutritionTop }
            nutritionArray.push(nutritionWithPosition)

        }
        setNutrition(nutritionArray)
        setTop3(positionNutritionTop);
        console.log(nutritionArray);
    }


    return (
        <ScrollView>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Generated Menus")
                }}>
                <Text style={styles.backStyle}> &lt;&lt;back</Text>
            </TouchableOpacity>

            {header && header.map(({ title,url}) => {
                return (

                    <TouchableOpacity
                        key={title}>
                        <Text style={styles.headerStyle}>{title}</Text>
                        <Image
                            source={url}
                            style={{
                                width: 129,
                                height: 129,
                                left: 123,
                                top: 80,
                                position: 'absolute',
                            }} />
                    </TouchableOpacity>

                );
            })}


            {igd && igd.map(({ leftIgd, topIgd, igdname, leftAmount, amount, unit, leftUnit, }) => {
                return (

                    <TouchableOpacity>
                        <Text style={styles.igdStyle}>Ingredients</Text>
                        <Text style={{
                            left: leftIgd,
                            top: topIgd,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute'
                        }}>{igdname}</Text>

                        <Text style={{
                            left: leftAmount,
                            top: topIgd,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute'
                        }}>{amount}</Text>

                        <Text style={{
                            left: leftUnit,
                            top: topIgd,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute'
                        }}>{unit}</Text>

                    </TouchableOpacity>

                );
            })}

            {lackIgd && lackIgd.map(({ lack, topLack }) => {
                return (
                    <TouchableOpacity key={lack}>
                        <Text style={{
                            left: 44,
                            top: topLack,
                            color: 'black',
                            fontSize: 7,
                            position: 'absolute'
                        }}>{lack}</Text>
                    </TouchableOpacity>
                );
            })}

            <Text style={{
                left: 36,
                top: top+35,
                color: 'black',
                fontSize: 10,
                fontWeight: 'bold',
                position: 'absolute'
            }}>Lack Ingredients*</Text>


            {recipe && recipe.map(({ recipeInstruction, topInstruction, step }) => {
                return (

                    <TouchableOpacity
                        key={recipeInstruction}>

                        <Text style={{
                            left: 36,
                            top: top1 + 35,
                            color: '#FF5733',
                            fontSize: 15,
                            position: 'absolute',
                            fontWeight: "bold",
                        }}>Recipe</Text>

                        <Text style={{
                            left: 54,
                            top: topInstruction,
                            color: '#FF5733',
                            paddingRight: 35,
                            fontSize: 10,
                            position: 'absolute',
                        }}>{recipeInstruction}</Text>

                        <Text style={{
                            left: 44,
                            top: topInstruction,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute',
                            fontWeight: 'bold'
                        }}>{step}.</Text>

                    </TouchableOpacity>

                );
            })}

            {nutrition && nutrition.map(({ topNutrition, menuInfo }) => {
                return (

                    <TouchableOpacity >
                        <Text style={{
                            left: 36,
                            top: top2 + 55,
                            color: '#FF5733',
                            fontSize: 15,
                            position: 'absolute',
                            fontWeight: "bold",
                        }}>Menu Nutritions</Text>
                        <Text style={{
                            left: 270,
                            top: topNutrition,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute',
                        }}>{menuInfo}</Text>

                        <Text style={{ left: 44, top: top2 + 90, color: '#FF5733', fontSize: 10, position: 'absolute' }}>carb(g)</Text>
                        <Text style={{ left: 44, top: top2 + 115, color: '#FF5733', fontSize: 10, position: 'absolute' }}>Energy(kcal)</Text>
                        <Text style={{ left: 44, top: top2 + 140, color: '#FF5733', fontSize: 10, position: 'absolute' }}>fat(g)</Text>
                        <Text style={{ left: 44, top: top2 + 165, color: '#FF5733', fontSize: 10, position: 'absolute' }}>fiber(g)</Text>
                        <Text style={{ left: 44, top: top2 + 190, color: '#FF5733', fontSize: 10, position: 'absolute' }}>protein(g)</Text>
                        <Text style={{ left: 44, top: top2 + 215, color: '#FF5733', fontSize: 10, position: 'absolute' }}>sodium(g)</Text>
                        <Text style={{ left: 44, top: top2 + 240, color: '#FF5733', fontSize: 10, position: 'absolute' }}>sugar(g)</Text>

                    </TouchableOpacity>

                );
            })}

            <TouchableOpacity
                disabled={isLoading}
                onPress={() => {
                    postData();
                    setModalOpen(true);
                }}
                style={{
                    width: 120, height: 37, backgroundColor: '#FF5733', position: 'absolute', left: 239,
                    top: top3 + 45, borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10
                }}>
                <Text style={styles.doneStyle}>  {isLoading && <ActivityIndicator size="small" />}Cooked</Text>
            </TouchableOpacity>

            <Modal visible={modalOpen}>
                <MaterialIcons
                    name='close'
                    size={24}
                    color='#FF5733'
                    onPress={() => setModalOpen(false)} />
                <Text style={styles.aStyle}>You have cooked a great menu {"\n"}Wanna burn it out?</Text>
                <TouchableOpacity
                    style={styles.seeBoxStyle}
                    onPress={() => {
                        navigation.navigate('Total Workout');
                        setModalOpen(false);
                    }
                    }>
                    <Text style={styles.seeStyle}>Definitely!</Text>
                </TouchableOpacity>
            </Modal>

        </ScrollView>
    )

};

const styles = StyleSheet.create({
    headerStyle: {
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
        fontWeight: "bold",
        left: 36,
        top: 230
    },

    doneStyle: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    backStyle: {
        color: '#FF5733',
        fontSize: 12,
        top: 10,
        position: 'absolute',
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
        left: 85,
        textAlign: "center",
    },
});


export default MenuInformation;