import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import ReportPage from './reportPage';
import { router } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Info1 from './js/infoModalContent/1.MaksudBuli.js';
import Info2 from './js/infoModalContent/2.JenisBuli.js';
import Info3 from './js/infoModalContent/3.TandaMangsa.js';
import Info4 from './js/infoModalContent/4.Tindakan.js';
import Info5 from './js/infoModalContent/5.KesanBuli.js';
import Info6 from './js/infoModalContent/6.UndangUndang.js';
import Info7 from './js/infoModalContent/7.PerananAplikasi.js';




const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isSmallPhone = screenWidth < 1080;


const MainPage = () => {
  const navigation = useNavigation();

  const [visibleModalIndex, setVisibleModalIndex] = React.useState(null);


  return (
    <ScrollView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <Image source={require('./assets/BuddyGuardLogo.png')} style={styles.schoolLogo} />
        <View style={styles.headerContent}>
          <Text style={styles.appTitle}>Aplikasi</Text>
          <Text style={styles.schoolName}>BuddyGuard</Text>
        </View>
        {/* <TouchableOpacity style={styles.settingsIcon}>
          <Text style={{ fontSize: 20 }}>⚙️</Text>
        </TouchableOpacity> */}
      </View>

      {/* Cards */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.largeCard} onPress={() => router.push('/reportPage')}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle1}>Lapor Kejadian Buli</Text>
            <Text style={styles.cardText1}>Lapor sekarang, setiap saat amat berharga</Text>
          </View>
          <Image source={image1} style={styles.cardImage1} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.largeCard} onPress={() => router.push('/bookingPage')}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle1}>Temu Janji</Text>
            <Text style={[styles.cardText1, { width: '90%' }]}>Tempah sesi dengan kaunselor pilihan</Text>
          </View>
          <Image source={image2} style={styles.cardImage2} />
        </TouchableOpacity>

        {/* <View style={styles.row}>
          <TouchableOpacity style={styles.smallCard} onPress={() => router.push('/bookingPage')}>
            <Image source={image2} style={styles.cardImage2} />
            <View style={styles.cardTextContainer2}>
              <Text style={styles.cardTitle2}>Temu Janji</Text>
              <Text style={styles.cardText2}>Tempah sesi dengan kaunselor pilihan</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallCard}>
            <Image source={image3} style={styles.cardImage2} />
            <View style={styles.cardTextContainer2}>
              <Text style={styles.cardTitle2}>Borang RMBQ</Text>
              <Text style={styles.cardText2}>Klik untuk info lebih lanjut</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>

      {/* Carta Organisasi */}
      <View style={styles.bottomContainer}>

        {/* <View style={styles.orgBox}>
          <Image source={require('./assets/school-logo.png')} style={styles.orgLogo} />
        </View> */}
        <Text style={styles.sectionTitle}>Info Berkenaan Buli</Text>
        <View style={styles.divider} />
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.infoSection}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {[
            { title: 'Maksud Buli', icon: 'info-circle', image: require('./assets/maksud.png') },
            { title: 'Jenis-jenis Buli', icon: 'list', image: require('./assets/jenis.png') },
            { title: 'Tanda-tanda Mangsa Buli', icon: 'exclamation-triangle', image: require('./assets/tanda.png') },
            { title: 'Tindakan yang Perlu Diambil', icon: 'hand-paper-o', image: require('./assets/tindakan.png') },
            { title: 'Kesan-kesan Buli', icon: 'heartbeat', image: require('./assets/kesan.png') },
            { title: 'Undang-undang Kes Buli', icon: 'gavel', image: require('./assets/undang2.png') },
            { title: 'Peranan Aplikasi Anti Buli', icon: 'mobile', image: require('./assets/aplikasi.png') },
          ].map((item, index) => (
            <View key={index}>
              
              <TouchableOpacity style={styles.infoCard} onPress={() => setVisibleModalIndex(index)}>
                <Image source={item.image} style={styles.infoCardImage} />
                <Text style={styles.infoCardText}>{item.title}</Text>
              </TouchableOpacity>
              

              {visibleModalIndex === index && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={true}
                  onRequestClose={() => setVisibleModalIndex(null)}
                >
                  <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <View style={{
                      backgroundColor: '#fff',
                      padding: 35,
                      borderRadius: 10,
                      width: '90%',
                      maxHeight: '90%',
                      elevation: 5,
                    }}>
                      {/* Header */}
                      <View style={styles.headerRow}>
                        <FontAwesome name={item.icon} size={30} color="#002B53" style={styles.infoCardIconModal} />
                        <Text style={styles.headerTitle}>{item.title}</Text>
                      </View>

                      {/* Content Component */}
                      <ScrollView style={{ marginTop: 10 }}>
                        {index === 0 && <Info1 />}
                        {index === 1 && <Info2 />}
                        {index === 2 && <Info3 />}
                        {index === 3 && <Info4 />}
                        {index === 4 && <Info5 />}
                        {index === 5 && <Info6 />}
                        {index === 6 && <Info7 />}
                      </ScrollView>

                      {/* Close Button */}
                      <Pressable
                        onPress={() => setVisibleModalIndex(null)}
                        style={{
                          marginTop: 20,
                          alignSelf: 'flex-end',
                          backgroundColor: '#002B53',
                          paddingVertical: 10,
                          paddingHorizontal: 20,
                          borderRadius: 8,
                          shadowColor: '#000',
                          shadowOffset: { width: 0, height: 2 },
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,
                          elevation: 5,
                        }}
                      >
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Tutup</Text>
                      </Pressable>

                    </View>
                  </View>
                </Modal>
              )}

            </View>
          ))}
        </ScrollView>
        <View style={styles.divider2} />


        <View style={styles.scrollHint}>
          <Text style={styles.scrollHintText}>© 2025 BuddyGuard</Text>
          {/* <View style={styles.iconWrapper}>
            <FontAwesome5 name="chevron-down" size={16} color="#000" />
          </View> */}
        </View>

      </View>

    </ScrollView>
    
  );
};




export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002B53',
  },
  header: {
    marginTop: 30,
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
    position: 'relative',
  },
  appTitle: {
    color: '#fff',
    fontSize: isSmallPhone ? 12 : 14,
  },
  headerContent: {
    flex: 1,
    marginLeft: 60,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  schoolName: {
    color: '#fff',
    fontSize: isSmallPhone ? 20 : 22,
    fontWeight: 'bold',
  },
  schoolLogo: {
    position: 'absolute',
    left: 20,
    top: 45,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  settingsIcon: {
    position: 'absolute',
    top: 45,
    right: 20,
  },
  cardContainer: {
    backgroundColor: '#002B53',
    padding: 30,
    marginBottom: -12,
  },
  largeCard: {
    backgroundColor: '#fff',
    height: isSmallPhone ? 120 : 140,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'visible', // allow image to extend outside
    position: 'relative',
  },
  cardImage1: {
    position: 'absolute',
    width: 160,
    height: 160,
    resizeMode: 'contain',
    bottom: 10,
    right: -10
  },
  cardTextContainer: {
    marginBottom: 5,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    paddingTop: 0,
    width: '48%',
    alignItems: 'left',
  },
  cardImage2: {
    width: 90,
    height: 90,
    marginTop: 0,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  cardTextContainer2: {
    marginBottom: 5,
    flex: 1,
  },
  cardTitle1: {
    fontWeight: 'bold',
    fontSize: isSmallPhone ? 20 : 24,
    marginBottom: 0,
    textAlign: 'left',
  },
  cardTitle2: {
    fontWeight: 'bold',
    fontSize: isSmallPhone ? 18 : 20,
    marginBottom: 0,
    textAlign: 'center',
  },
  cardText1: {
    width: isSmallPhone ? 200 : 400,
    fontSize: isSmallPhone ? 11 : 12,
    textAlign: 'left',
  },
  cardText2: {
    fontSize: isSmallPhone ? 11 : 12,
    textAlign: 'center',
  },
  cardEmoji: {
    fontSize: 30,
    marginTop: 10,
  },
  bottomContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
    flexGrow: 1,  // Ensures the container expands to fill the remaining space
  },
  orgChart: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: isSmallPhone ? 20 : 22,
    marginBottom: 0,
  },
  orgBox: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orgLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  extraContent: {
    marginTop: 20,
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 10,
  },
  extraContentText: {
    fontSize: 14,
    textAlign: 'center',
  },
  infoSection: {
    marginTop: 20,
    paddingTop: 10,
    height: 280,
  },

  infoCard: {
    width: 180,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    position: 'relative',
  },


  iconTextRow: {
    position: 'absolute',
    bottom: 25,
    left: 5,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  infoCardIcon: {
    width: 30,
    textAlign: 'center',
    marginRight: 5,
  },

  infoCardImage: {
    marginTop: 15,
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  infoCardText: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 15,
    color: '#002B53',
    fontWeight: 'bold',
    flexShrink: 1,
    flex: 1,
  },

  scrollHint: {
    height: 100,
    alignItems: 'center',
    marginTop: 5,
  },

  scrollHintText: {
    marginTop: 50,
    fontSize: 12,
    color: '#666',
  },
  iconWrapper: {
    alignItems: 'center', // Center the icon horizontally
    justifyContent: 'center', // Center the icon vertically
    marginTop: 5,
  },

  scrollHintArrow: {
    fontSize: 18,
    color: '#666',
    marginTop: -4,
  },
  infoCardIconModal: {
    width: 30,
    textAlign: 'center',
    marginRight: 5,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    width: '80%',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // spacing between icon and text
  },

  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 20,
    marginBottom: -15,
  },
  divider2: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: -50,
    marginBottom: -15,
  },
});
