import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  Animated,
  FlatList,
  imageSize
} from 'react-native';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const steps = [
    { id: '1', text: 'Caută', image: require('../assets/onboarding/firstImage.png') },
    { id: '2', text: 'Găsește', image: require('../assets/onboarding/secondImage.png') },
    { id: '3', text: 'Acționează', image: require('../assets/onboarding/thirdImage.png') },
  ];

  const [step, setStep] = useState(0);
  const flatListRef = useRef();
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const progress = () => {
      animation.setValue(0);
      Animated.timing(animation, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      }).start();
    };

    progress();
    const interval = setInterval(() => {
      if (step < steps.length - 1) {
        setStep(step + 1);
        flatListRef.current.scrollToIndex({ index: step + 1 });
        progress();
      } else {
        clearInterval(interval);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [step]);

  const progressBarWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });


  const renderStep = ({ item }) => (
    <View style={styles.step}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  const imageSize = 35;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={[styles.logo, { width: imageSize, height: imageSize }]}
          />
          <Text style={styles.logoText}>BConnect</Text>
        </View>
      </View>
      <FlatList
        ref={flatListRef}
        data={steps}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderStep}
      />
      <View style={styles.progressBar}>
        <Animated.View style={[styles.progress, { width: progressBarWidth }]} />
      </View>
      <View style={styles.registerContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() =>
            navigation.navigate("BottomTabNavigator", { screen: "Home" })
          }
        >
          <Text style={styles.registerText}>Înregistrează-te</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BottomTabNavigator", { screen: "Home" })
          }
        >
          <Text style={styles.loginText}>Ai deja un cont? Autentifică-te.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "white"
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  logo: {
    width: imageSize,
    height: imageSize,
    position: 'absolute',
    left: 117,
  },
  logoText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold"
  },
  step: {
    width: width,
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 10,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 180,
    height: 10,
    marginHorizontal: 70,
  },
  progress: {
    borderRadius: 50,
    backgroundColor: '#3F95EB',
    height: '80%',
  },
  registerContainer: {
    width: '100%',
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginBottom: 40,
  },
  registerButton: {
    backgroundColor: '#3F95EB',
    borderRadius: 10,
    padding: 10,
    width: 300,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 18,
    color: '#fff',
  },
  loginText: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
});

export default OnboardingScreen;