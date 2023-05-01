import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  UIManager,
  Platform,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SearchBar from "../components/searchBar";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// {
//   id: 1,
//   title: "Category 1",
//   subcategories: ["Subcategory 1.1", "Subcategory 1.2"],
//   iconPath: require('path/to/your/icon1.png'),
// },

const categoriesData = [
  {
    id: 1,
    title: "Agricultura & Alimentare",
    subcategories: [
      "Animale de crescatorie (zootehnie) si peste",
      "Agricultura si exploatare forestiera",
      "Produse alimentare",
      "Bauturi",
      "Produse ecologice (organice, bio)",
      "Mașini și echipamente agricole și forestiere",
      "Mașini și echipamente pentru industriile: alimentara, a bauturilor, a tutunului și pentru catering",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 2,
    title: "Chimice, Farmaceutice & Plastice",
    subcategories: [
      "Produse din cauciuc",
      "Produse din plastic",
      "Compusi chimici de baza",
      "Produse chimice",
      "Sanatate, medicina si farmacologie",
      "Echipamente și instalații pentru industria chimica",
      "Echipamente si instalatii pentru industria cauciucului si a materialelor plastice",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 3,
    title: "Constructii",
    subcategories: [
      "Cherestea, produse din lemn, masini si echipamente pentru industria de prelucrare a lemnului",
      "Mobilier si lenjerie de casa",
      "Construcții metalice pentru industria construcțiilor",
      "Conducte, supape și containere/rezervoare, din metal",
      "Feronerie, cutite si scule",
      "Echipament de paza si protectie",
      "Echipamente de incalzire, ventilatie, conditionare a aerului (HVAC) si refrigerare",
      "Utilaje și echipamente pentru construcții civile și industriale",
      "Contractori de constructii civile si maritime",
      "Constructii",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 4,
    title: "Educatie, Instruire & Organizatii",
    subcategories: [
      "Educatie si instruire/training",
      "Organizatii, administratii si asociatii internationale",
      "Servicii sociale si de ingrijiri medicale, la domiciliu",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 5,
    title: "Electrice, Electronice & Optice",
    subcategories: [
      "Echipamente electrice Echipamente nucleare",
      "Echipamente opto-electronice Echipamente de telecomunicatii",
      "Echipamente de masura si testare",
      "Echipamente optice, fotografice si cinematografice",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 6,
    title: "Energie, Mediu",
    subcategories: [
      "Energie, combustibili si apa",
      "Echipamente și instalații pentru industria petrolului și gazelor",
      "Servicii de mediu, energii regenerabile",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 7,
    title: "Hartie, Tiparire, Publicare",
    subcategories: [
      "Hartie si carton",
      "Tiparire si editare",
      "Echipamente si instalatii de fabricare a hartiei si cartonului",
      "Echipamente de tiparit. Echipamente de birou si magazin",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 8,
    title: "IT, Internet, Cercetare & Dezvoltare",
    subcategories: [
      "Tehnologia informației (IT) și Internet",
      "Birouri tehnice si consultanta in inginerie, arhitecti",
      "Cercetare si testari",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 9,
    title: "Metale, Masini si Utilaje & Inginerie",
    subcategories: [
      "Produse metalurgice",
      "Motoare si piese mecanice",
      "Masini si echipamente pentru prelucrarea metalelor",
      "Subcontractori industriali",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 10,
    title: "Minerale",
    subcategories: [
      "Minereuri si minerale",
      "Roca de cariera",
      "Sticla, ciment si ceramica",
      "Utilaje și echipamente pentru minerit, exploatare in cariera și prelucrarea pietrelor naturale",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 11,
    title: "Retail & Comercianti",
    subcategories: [
      "Comercianti in general, depozite angro si magazine de vanzare cu amanuntul",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 12,
    title: "Servicii Business",
    subcategories: [
      "Igiena și curațenie",
      "Servicii pentru afaceri",
      "Servicii financiare si de asigurari",
      "Servicii de inchiriere",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 13,
    title: "Textile, Confectii, Piele, Ceasuri, Bijuterii",
    subcategories: [
      "Piei, blanuri si produsele lor",
      "Textile",
      "Imbracaminte si incaltaminte",
      "Prelucrarea pietrelor pretioase, fabricarea ceasurilor si a bijuteriilor",
      "Masini si echipamente pentru fabricarea produselor textile, imbracamintei, pielii si incaltamintei",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 14,
    title: "Transport & Logistica",
    subcategories: [
      "Instalații și echipamente de manipulare și depozitare",
      "Mașini, echipamente și servicii de ambalat",
      "Mijloace de transport (Automotive si celelalte)",
      "Servicii de transport si logistica",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
  {
    id: 15,
    title: "Turism & Recreere",
    subcategories: [
      "Echipamente pentru sport și agrement",
      "Industriile de turism si ospitalitate hoteliera si de catering",
      "Comunicatii (servicii postale), telecomunicatii, radio si televiziune",
      "Odihna, cultura si agrement",
    ],
    //   iconPath: require('path/to/your/icon1.png'),
  },
];

export default function App() {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedCategories((prevState) => {
      if (prevState.includes(categoryId)) {
        return prevState.filter((id) => id !== categoryId);
      } else {
        return [...prevState, categoryId];
      }
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
      {/* <View style={styles.titleContainer}>
        <Text style={styles.title}>Categoriile afacerilor</Text>
      </View> */}

      <View style={styles.categoriesContainer}>
        {categoriesData.map((category) => {
          const isExpanded = expandedCategories.includes(category.id);
          const rotation = new Animated.Value(isExpanded ? 1 : 0);

          useEffect(() => {
            Animated.timing(rotation, {
              toValue: isExpanded ? 1 : 0,
              duration: 200,
              useNativeDriver: true,
            }).start();
          }, [isExpanded]);

          const rotate = rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "180deg"],
          });

          return (
            <View key={category.id} style={styles.categoryContainer}>
              <TouchableOpacity
                onPress={() => toggleCategory(category.id)}
                style={styles.category}
              >
                <Animated.View style={{ transform: [{ rotate }] }}>
                  <MaterialIcons name="expand-more" size={24} color="black" />
                </Animated.View>
                <Text style={styles.categoryText}>{category.title}</Text>
                {/* <Image source={category.iconPath} style={styles.icon} /> */}
              </TouchableOpacity>

              {isExpanded && (
                <View style={styles.subcategoriesContainer}>
                  {category.subcategories.map((subcategory, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        console.log("Subcategory pressed:", subcategory);
                        // Handle subcategory press event here
                      }}
                      style={styles.subcategoryButton}
                    >
                      <Text style={styles.subcategoryText}>{subcategory}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>
      </ScrollView>
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // titleContainer: {
  //   paddingHorizontal: 16,
  //   paddingVertical: 8,
  // },
  // title: {
  //   fontSize: 30,
  //   fontWeight: "bold",
  //   textAlign: 'center',
  // },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  categoryContainer: {
    marginBottom: 16,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
    maxWidth: "100%",
  },
  categoryText: {
    marginLeft: 16,
    fontSize: 18,
  },
  icon: {
    marginLeft: "auto",
    width: 24,
    height: 24,
  },
  subcategoriesContainer: {
    paddingLeft: 48,
    marginTop: 8,
  },
  subcategoryButton: {
    marginBottom: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  subcategoryText: {
    fontSize: 16,
  },
});
