import React, { useRef, useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions, 
  FlatList,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const AccountConfig = ({ navigation }) => {
  const steps = [
    { text: "Completează informațiile de bază despre afacerea ta. Aceste detalii ne vor ajuta să menținem legătura cu tine și să facilităm interacțiunea cu afacerea ta.", image: require('../assets/accountConfGreet/first_section.png') },
    { text: "Alege categoria potrivită pentru afacerea ta și oferă o descriere scurtă și atrăgătoare, astfel încât utilizatorii să înțeleagă în mod clar ce face afacerea ta specială.", image: require('../assets/accountConfGreet/second_section.png') },
    { text: "Răspunde la trei întrebări-cheie care vor face informațiile despre afacerea ta, extrem de utile pentru potențialii cumpărători.", image: require('../assets/accountConfGreet/third_section.png') },
    { text: "Încarcă câteva fotografii reprezentative ale afacerii tale. Imaginile pot transmite mai mult decât cuvintele și pot atrage atenția utilizatorilor.", image: require('../assets/accountConfGreet/fourth_section.png') },
    { text: "După ce ai completat toate informațiile necesare și ai adăugat imaginile relevante, apasă butonul \"\Salvează\"\ pentru a adăuga afacerea ta în baza noastră de date.", image: require('../assets/accountConfGreet/fifth_section.png') },
  ];
  
  const [step, setStep] = useState(0);
  const flatListRef = useRef();

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      flatListRef.current.scrollToIndex({index: step + 1});
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
      flatListRef.current.scrollToIndex({index: step - 1});
    }
  };

  const handleAddAction = () => {
    navigation.navigate("AccountQ");
  };

  const renderStep = ({ item }) => (
    <View style={styles.step}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList 
        ref={flatListRef}
        data={steps}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderStep}
        onMomentumScrollEnd={ev => {
          setStep(Math.round(ev.nativeEvent.contentOffset.x / width));
        }}
      />
      <View style={styles.dotsContainer}>
        {steps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === step ? "#00273D" : "#ddd" },
            ]}
          />
        ))}
      </View>
      <View style={styles.buttonsContainer}>
  {step > 0 && (
    <TouchableOpacity style={styles.button} onPress={previousStep}>
      <Text style={styles.buttonText}>Înapoi</Text>
    </TouchableOpacity>
  )}
  <TouchableOpacity 
    style={[styles.button, { marginLeft: step > 0 ? 10 : 0 }]} 
    onPress={step === steps.length - 1 ? handleAddAction : nextStep}
  >
    <Text style={styles.buttonText}>{step === steps.length - 1 ? "Adauga" : "Înainte"}</Text>
  </TouchableOpacity>
</View>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingBottom: 20,
    },
    step: {
      width: width,
      paddingHorizontal: 25, 
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16, 
      textAlign: 'center',
      marginBottom: 20, 
    },
    image: {
      width: 300,
      height: 300, 
      resizeMode: 'contain',
    },
    dotsContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      margin: 5,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
      marginTop: 20,
    },
    button: {
      backgroundColor: "#00273D",
      padding: 10,
      borderRadius: 5,
      flex: 1, 
      margin: 10, 
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      textAlign: 'center', 
    },
  });
  
  export default AccountConfig;