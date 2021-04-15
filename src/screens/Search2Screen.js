import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const Search2Screen = ({ navigation }) => {
    const [igd, setIgd] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [nutrition, setNutrition] = useState([]);
    const [header, setheader] = useState([]);
    const [top, setTop] = useState(0);
    const [top1, setTop1] = useState(0);
    const [top2, setTop2] = useState(0);
    const [url, setUrl] = useState("");
    const [isLoading, setLoading] = useState(false);

    let data = {};

    useEffect(async () => {
        const id = await AsyncStorage.getItem("userID");
        const sk = await AsyncStorage.getItem("sk")
        const response = await fetch(
            `https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/menuPage/menu/123/${sk}`
        );
        data = await response.json();
        addDataToArray(data);
        console.log(data)
    }, []);

    console.log(top)


    useEffect(() => {
        if (!url) return;
    }, [url]);


    async function postData() {
        if (isLoading) {
            return;
        }
        try {
            const id = await AsyncStorage.getItem("userID");
            const article = {
                userID: id,
                cookedMenu: data

            };
            setLoading(true);
            const res = await axios.post(
                "https://aejilvrlbj.execute-api.ap-southeast-1.amazonaws.com/dev/menuPage/menu",
                article
            );
            console.log(article);
            //navigation.navigate("Home1");
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
            var positionAmountLeft = 200;
            var positionUnitLeft = 330;
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

        var recipeArray = [];
        var positionInstructionTop = positionIgdTop + 45;


        for (var j in data[0].recipe) {
            var positionInstructionLeft = 46;
            positionInstructionTop += 25;
            var recipeWithPosition = { recipeInstruction: data[0].recipe[j].instruction, step: data[0].recipe[j].step, leftInstruction: positionInstructionLeft, topInstruction: positionInstructionTop }
            recipeArray.push(recipeWithPosition);
        }
        setRecipe(recipeArray);
        console.log(recipeArray)
        setTop1(positionInstructionTop);


        var nutritionArray = [];
        var positionNutritionTop = positionInstructionTop + 45;
        for (var k in data[0].nutrition) {

            positionNutritionTop += 25;
            var nutritionWithPosition = { menuInfo: data[0].nutrition[k], topNutrition: positionNutritionTop }
            nutritionArray.push(nutritionWithPosition)

        }
        setNutrition(nutritionArray)
        console.log(nutritionArray);
        setTop2(positionNutritionTop);
    }






    return (
        <ScrollView>
             <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Search1")
                }}>
                <Text style={styles.backStyle}> &lt;&lt;back</Text>
            </TouchableOpacity>

            {header && header.map(({ title, url }) => {
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

            {recipe && recipe.map(({ recipeInstruction, topInstruction, step }) => {
                return (

                    <TouchableOpacity
                        key={recipeInstruction}>

                        <Text style={{
                            left: 36,
                            top: top + 35,
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
                            top: top1 + 35,
                            color: '#FF5733',
                            fontSize: 15,
                            position: 'absolute',
                            fontWeight: "bold",
                        }}>Menu Information</Text>
                        <Text style={{
                            left: 270,
                            top: topNutrition,
                            color: '#FF5733',
                            fontSize: 10,
                            position: 'absolute',
                        }}>{menuInfo}</Text>

                        <Text style={{ left: 44, top: top1 + 70, color: '#FF5733', fontSize: 10, position: 'absolute' }}>carb(g)</Text>
                        <Text style={{ left: 44, top: top1 + 95, color: '#FF5733', fontSize: 10, position: 'absolute' }}>Energy(kcal)</Text>
                        <Text style={{ left: 44, top: top1 + 120, color: '#FF5733', fontSize: 10, position: 'absolute' }}>fat(g)</Text>
                        <Text style={{ left: 44, top: top1 + 145, color: '#FF5733', fontSize: 10, position: 'absolute' }}>fiber(g)</Text>
                        <Text style={{ left: 44, top: top1 + 170, color: '#FF5733', fontSize: 10, position: 'absolute' }}>protein(g)</Text>
                        <Text style={{ left: 44, top: top1 + 195, color: '#FF5733', fontSize: 10, position: 'absolute' }}>sodium(g)</Text>
                        <Text style={{ left: 44, top: top1 + 220, color: '#FF5733', fontSize: 10, position: 'absolute' }}>sugar(g)</Text>

                    </TouchableOpacity>

                );
            })}

            <TouchableOpacity 
             disabled={isLoading}
             onPress={() => {
                 postData();
             }}
            style={{
                width: 120, height: 37, backgroundColor: '#FF5733', position: 'absolute', left: 239,
                top: top2 + 45, borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10
            }}>
                <Text style={styles.doneStyle}>  {isLoading && <ActivityIndicator size="small" />}Cooked</Text>
            </TouchableOpacity>



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
    backStyle:{
        color: '#FF5733',
        fontSize: 12,
        top:10,
        position: 'absolute',
      }
});


export default Search2Screen;