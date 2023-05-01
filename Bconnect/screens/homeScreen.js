import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from '../components/searchBar';

const App = () => {
  return (
    <View style={styles.container}>
      <SearchBar style={styles.searchBar}/>
      {/* <View style={styles.searchBar}>
        <TextInput
          placeholder="Caută o afacere"
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons name="filter-variant" size={28} color="#000" />
        </TouchableOpacity>
      </View> */}
      {/* Section 1 */}

      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <View style={styles.line}></View>
            <Text style={styles.title}>Handmade</Text>
            <View style={styles.line}></View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {/*card 11*/}

            <View style={styles.card}>
              <Image source={{ uri: "https://images.unsplash.com/photo-1556095667-9760aa7f4885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={styles.image} />
              <Text style={styles.cardText}>Creații de Vis</Text>
              <Text style={styles.cardDescription}>Transformăm materiale simple în opere de artă unice, prin împletirea pasiunii și priceperii noastre.</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.locationButton}>
                  <MaterialCommunityIcons name="map-marker" size={18} color="#00273D" />
                  <Text style={styles.buttonText}>Locație</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                  {/* <MaterialCommunityIcons name="phone" size={18} color="#00273D" /> */}
                  <Text style={styles.buttonText}>Detalii</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*card 12*/}

            <View style={styles.card}>
              <Image source={{ uri: "https://images.unsplash.com/photo-1660246156333-eea5fc75b540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={styles.image} />
              <Text style={styles.cardText}>BijuDelicat</Text>
              <Text style={styles.cardDescription}>Bijuterii lucrate manual, care aduc strălucire și eleganță ținutelor dumneavoastră.</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.locationButton}>
                  <MaterialCommunityIcons name="map-marker" size={18} color="#00273D" />
                  <Text style={styles.buttonText}>Locație</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                  {/* <MaterialCommunityIcons name="phone" size={18} color="#00273D" /> */}
                  <Text style={styles.buttonText}>Detalii</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*Card 13*/}

            <View style={styles.card}>
              <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1675799133719-2579ed2b41a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" }} style={styles.image} />
              <Text style={styles.cardText}>Amintiri Tricotate</Text>
              <Text style={styles.cardDescription}>Cadouri personalizate și jucării tricotate cu drag, pentru a încânta sufletele celor dragi.</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.locationButton}>
                  <MaterialCommunityIcons name="map-marker" size={18} color="#00273D" />
                  <Text style={styles.buttonText}>Locație</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                  {/* <MaterialCommunityIcons name="phone" size={18} color="#00273D" /> */}
                  <Text style={styles.buttonText}>Detalii</Text>
                </TouchableOpacity>
              </View>
            </View>


          </ScrollView>
        </View>


        {/*Section 2*/}


        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <View style={styles.line}></View>
            <Text style={styles.title}>Cafenele</Text>
            <View style={styles.line}></View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {/*card 21*/}

            <View style={styles.card}>
              <Image source={{ uri: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" }} style={styles.image} />
              <Text style={styles.cardText}>Espresso Delights	</Text>
              <Text style={styles.cardDescription}>Savurați o ceașcă de cafea perfectă într-o atmosferă plăcută sufletului. Espresso Delights, cafeaua cu caracter!</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.locationButton}>
                  <MaterialCommunityIcons name="map-marker" size={18} color="#00273D" />
                  <Text style={styles.buttonText}>Locație</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                  {/* <MaterialCommunityIcons name="phone" size={18} color="#00273D" /> */}
                  <Text style={styles.buttonText}>Detalii</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*card 22*/}

            <View style={styles.card}>
              <Image source={{ uri: "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={styles.image} />
              <Text style={styles.cardText}>Aroma Nostra</Text>
              <Text style={styles.cardDescription}>Descoperiți gustul autentic al cafelei din Moddova, într-un spațiu plin de tradiție și bun gust. Te așteptăm cu drag!</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.locationButton}>
                  <MaterialCommunityIcons name="map-marker" size={18} color="#00273D" />
                  <Text style={styles.buttonText}>Locație</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                  {/* <MaterialCommunityIcons name="phone" size={18} color="#00273D" /> */}
                  <Text style={styles.buttonText}>Detalii</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*Card 23*/}

            <View style={styles.card}>
              <Image source={{ uri: "https://images.unsplash.com/photo-1566897819059-db42e135fa69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" }} style={styles.image} />
              <Text style={styles.cardText}>SweetEscape</Text>
              <Text style={styles.cardDescription}>Refugiul vostru în mijlocul agitației orașului! Spațiu elegant și modern, conceput pentru a vă oferi o experiență de relaxare și răsfăț culinar.</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.locationButton}>
                  <MaterialCommunityIcons name="map-marker" size={18} color="#00273D" />
                  <Text style={styles.buttonText}>Locație</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                  {/* <MaterialCommunityIcons name="phone" size={18} color="#00273D" /> */}
                  <Text style={styles.buttonText}>Detalii</Text>
                </TouchableOpacity>
              </View>
            </View>


          </ScrollView>
        </View>

        {/* Section 3 */}

        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <View style={styles.line}></View>
            <Text style={styles.title}>Recente</Text>
            <View style={styles.line}></View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {/*card 31*/}

            <View style={styles.card}>
              <Image source={{ uri: "https://gurmand.md/wp-content/uploads/2022/04/276279402_4539602826143548_6612129691506785192_n.jpg" }} style={styles.image} />
              <Text style={styles.cardText}>Terasa Vremurilor</Text>
              <Text style={styles.cardDescription}>Vă învităm în locul unde tradiția și modernitatea se îmbină, oferind preparate cu gust de neuitat și emoții splendide. Terasa Vremurilor te așteaptă!</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.locationButton}>
                  <MaterialCommunityIcons name="map-marker" size={18} color="#00273D" />
                  <Text style={styles.buttonText}>Locație</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                  {/* <MaterialCommunityIcons name="phone" size={18} color="#00273D" /> */}
                  <Text style={styles.buttonText}>Detalii</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*card 32*/}

            <View style={styles.card}>
              <Image source={{ uri: "https://images.unsplash.com/photo-1660246156333-eea5fc75b540?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={styles.image} />
              <Text style={styles.cardText}>BijuDelicat</Text>
              <Text style={styles.cardDescription}>Bijuterii lucrate manual, care aduc strălucire și eleganță ținutelor dumneavoastră.</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.locationButton}>
                  <MaterialCommunityIcons name="map-marker" size={18} color="#00273D" />
                  <Text style={styles.buttonText}>Locație</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                  {/* <MaterialCommunityIcons name="phone" size={18} color="#00273D" /> */}
                  <Text style={styles.buttonText}>Detalii</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*Card 33*/}

            <View style={styles.card}>
              <Image source={{ uri: "https://images.unsplash.com/photo-1566897819059-db42e135fa69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" }} style={styles.image} />
              <Text style={styles.cardText}>SweetEscape</Text>
              <Text style={styles.cardDescription}>Refugiul vostru în mijlocul agitației orașului! Spațiu elegant și modern, conceput pentru a vă oferi o experiență de relaxare și răsfăț culinar.</Text>
              <View style={styles.buttons}>
                <TouchableOpacity style={styles.locationButton}>
                  <MaterialCommunityIcons name="map-marker" size={18} color="#00273D" />
                  <Text style={styles.buttonText}>Locație</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.callButton}>
                  {/* <MaterialCommunityIcons name="phone" size={18} color="#00273D" /> */}
                  <Text style={styles.buttonText}>Detalii</Text>
                </TouchableOpacity>
              </View>
            </View>


          </ScrollView>
        </View>

      </ScrollView>





    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 0,
    paddingHorizontal: 0,
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    flex: 1,
    marginRight: 10,
  },
  section: {
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  line: {
    height: 3,
    backgroundColor: '#000',
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  card: {
    width: 350,
    height: 320,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
  },
  cardText: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginVertical: 5,
    paddingHorizontal: 10,
    // fontStyle: 'italic',
    fontSize: 12,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32BADE',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 30,
    minWidth: 110,
    marginHorizontal: 2.5,
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32BADE',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: 30,
    minWidth: 190,
    marginHorizontal: 2.5,
  },
  buttonText: {
    color: '#00273D',
    fontWeight: 'bold',
    marginLeft: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default App;