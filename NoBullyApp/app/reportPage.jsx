import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet, Image, Modal, Pressable, Keyboard, KeyboardAvoidingView, Dimensions, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isSmallPhone = screenWidth < 1080;


export default function ReportPage() {
    const [role, setRole] = useState(null);
    const [date, setDate] = useState(new Date());
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [school, setSchool] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [bullyTypes, setBullyType] = useState('');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    // Get current date and time
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);

    const selectBullyType = (type) => {
        setBullyType(type === bullyTypes ? '' : type); // Optional: deselect if clicked again
    };

    const selectSchool = (type) => {
        setSchool(type === school ? '' : type); // Optional: deselect if clicked again
    };



    const onChange = (event, selectedDate) => {
        if (Platform.OS === 'android') {
            if (event.type === 'set' && selectedDate) {
                setDate(selectedDate);
            }
            // Close the picker regardless of action
            setShow(false);
        } else {
            // iOS: Update value on selection, keep picker open
            if (selectedDate) {
                setDate(selectedDate);
            }
        }
    };

    const showPicker = (currentMode) => {
        setMode(currentMode);
        setShow(true);
    };

    const handleOK = () => {
        setShow(false);
        // Additional validation if needed
        const now = new Date();
        if (date > now) {
            alert('Tarikh/masa tidak boleh melebihi hari ini!');
            setDate(now); // Reset to current date
        }
    };

    const handleCancel = () => {
        setShow(false);
    };

    const handleSubmit = async () => {
        if (!role || !date || !school || !location || !bullyTypes || !description) {
            alert('Sila pastikan semua maklumat diisi sebelum menghantar laporan!');
            return; // Stop further execution
        }

        const payload = {
            targetSheet: "Sheet1",
            role,
            date: date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }),    
            time: date.toLocaleTimeString(),       
            school,
            location: location,
            bullyType: bullyTypes,
            description
        };

        // Using environment variable for API URL
        const API_URL = process.env.REACT_APP_API_URL || 'https://script.google.com/macros/s/AKfycbz1jx2ej6XkAnMn464p0rRdZ22AJq2BWxxDCqNjlxmKZWOh40EzNTj7ZzEjZCXF_w2E6w/exec'; // Default value for development

        console.log('Payload being sent:', payload);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
            if (json.status === 'success') {
                Alert.alert('Terima kasih', `Laporan berjaya dihantar.`);
                router.replace('/mainPage');
            } else {
                Alert.alert('Kegagalan sistem', `Ralat semasa menghantar laporan`);
            }
        } catch (error) {
            alert('Gagal menghantar laporan: ' + error.message);
        }
    };



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // For iOS, padding works well. For Android, height works.
        >
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Borang Laporan Kejadian Buli</Text>
                    <Image
                        source={require('./assets/iconReport.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.dividerTop} />

                <Text style={styles.label}>Adakah anda</Text>
                <Text style={styles.subLabel}>(Pilih salah satu)</Text>
                <View style={styles.roleContainer}>
                    <TouchableOpacity
                        style={[styles.roleCard, role === 'Saksi' && styles.selectedCard]}
                        onPress={() => setRole('Saksi')}
                    >
                        <Image source={require('./assets/saksi.png')} style={styles.roleImage} />
                        <Text style={styles.roleText}>Saksi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.roleCard, role === 'Mangsa' && styles.selectedCard]}
                        onPress={() => setRole('Mangsa')}
                    >
                        <Image source={require('./assets/mangsa.png')} style={styles.roleImage} />
                        <Text style={styles.roleText}>Mangsa</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.divider} />

                <Text style={styles.label}>Bilakah kejadian ini berlaku?</Text>
                <Text style={styles.subLabel}>(Klik untuk pilih tarikh dan masa)</Text>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.dateTimeButton}
                        onPress={() => showPicker('date')}
                    >
                        <FontAwesome name="calendar" size={18} color="white" />
                        <Text style={styles.dateTimeText}>
                            {date.toLocaleDateString() === currentDate.toLocaleDateString()
                                ? 'Pilih Tarikh'
                                : date.toLocaleDateString()}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.dateTimeButton}
                        onPress={() => showPicker('time')}
                    >
                        <FontAwesome name="clock-o" size={18} color="white" />
                        <Text style={styles.dateTimeText}>
                            {date.toLocaleTimeString()}
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* iOS Popup-like Picker */}
                {Platform.OS === 'ios' && show ? (
                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={show}
                        onRequestClose={handleCancel}
                    >
                        <View style={styles.iosPickerContainer}>
                            <View style={styles.iosPicker}>
                                <DateTimePicker
                                    value={date}
                                    mode={mode}
                                    display="inline" // Calendar-style picker
                                    onChange={onChange}
                                    maximumDate={currentDate}
                                    is24Hour={true}
                                />
                                <View style={styles.iosButtonRow}>
                                    <Pressable
                                        style={styles.iosButtonCancel}
                                        onPress={handleCancel}
                                    >
                                        <Text style={styles.iosButtonText}>Batal</Text>
                                    </Pressable>
                                    <Pressable
                                        style={styles.iosButtonOK}
                                        onPress={handleOK}
                                    >
                                        <Text style={styles.iosButtonTextOK}>Teruskan</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </Modal>
                ) : null}

                {/* Android (Default Behavior) */}
                {Platform.OS === 'android' && show && (
                    <DateTimePicker
                        value={date}
                        mode={mode}
                        display="default"
                        onChange={onChange}
                        maximumDate={currentDate}
                        is24Hour={true}
                    />
                )}



                <View style={styles.divider} />

                <Text style={styles.label}>Sekolah</Text>
                <Text style={styles.subLabel}>(Pilih sekolah anda)</Text>
                {['SMK Indera Mahkota 2'].map(type => (
                    <TouchableOpacity
                        key={type}
                        style={[
                            styles.school,
                            school === type && styles.selectedType
                        ]}
                        onPress={() => selectSchool(type)}
                    >
                        <Text>{type}</Text>
                    </TouchableOpacity>
                ))}

                <View style={styles.divider} />

                <Text style={styles.label}>Di manakah kejadian ini berlaku?</Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="Tuliskan di sini ..."
                    multiline
                    value={location}
                    onChangeText={setLocation}

                />

                <View style={styles.divider} />

                <Text style={styles.label}>Jenis Aktiviti Pembulian</Text>
                <Text style={styles.subLabel}>(Pilih yang berkaitan)</Text>
                {['Buli fizikal', 'Buli verbal', 'Buli siber', 'Buli sosial','Buli seksual', 'Saya tidak pasti'].map(type => (
                    <TouchableOpacity
                        key={type}
                        style={[
                            styles.bullyType,
                            bullyTypes === type && styles.selectedType
                        ]}
                        onPress={() => selectBullyType(type)}
                    >
                        <Text>{type}</Text>
                    </TouchableOpacity>
                ))}


                <View style={styles.divider} />

                <Text style={styles.label}>Terangkan serba sedikit mengenai apa yang terjadi</Text>
                <Text style={styles.subLabel}>
                    Tuliskan apa yang anda ingat mengenai kejadian buli ini, jika anda mengenali pembuli, nyatakan nama pembuli beserta kelasnya.
                </Text>
                <TextInput
                    style={[styles.textArea, { height: 120 }]}
                    placeholder="Tuliskan di sini ..."
                    multiline
                    value={description}
                    onChangeText={setDescription}
                />

                <View style={styles.footerButtons}>
                    <TouchableOpacity
                        style={[styles.button, styles.backBtn]}
                        onPress={() => router.back()}  // This will go back to the previous page
                    >
                        <Text style={styles.btnText}>Kembali</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.submitBtn]}
                        onPress={handleSubmit} // Attach the function here
                    >
                        <Text style={styles.btnText}>Hantar</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#fff'
    },
    dividerTop: {
        height: 1,
        backgroundColor: '#e2e8f0',
        marginBottom: 20
    },
    divider: {
        height: 1,
        backgroundColor: '#e2e8f0',
        marginVertical: 20
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'left',
        padding: 10,
        marginTop: 40,
        paddingBottom: 0
    },
    title: {
        width: '70%',
        fontSize: isSmallPhone ? 26 : 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#1e3a5f',

    },
    logo: {
        width: 100,
        height: 100,
    },
    label: {
        fontSize: 16,
        marginTop: 0,
        fontWeight: 'bold',
        color: '#1e3a5f'
    },
    subLabel: {
        marginTop: 5,
        fontSize: 12,
        color: '#6b7280'
    },
    roleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    roleCard: {
        width: '48%',
        backgroundColor: '#e1ecf4',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10
    },
    selectedCard: {
        borderWidth: 2,
        borderColor: '#1e3a5f'
    },
    roleImage: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
    },
    roleText: {
        marginTop: 10,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    dateTimeBtn: {
        backgroundColor: '#36597a',
        padding: 10,
        borderRadius: 8,
        width: '48%',
        alignItems: 'center'
    },
    dateTimeButton: {
        flexDirection: 'row',
        backgroundColor: '#3b588e',
        borderRadius: 10,
        padding: 12,
        alignItems: 'center',
        flex: 0.48,
        justifyContent: 'center',
    },
    dateTimeText: {
        color: 'white',
        marginLeft: 8,
    },
    iosPickerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    iosPicker: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '90%',
    },
    iosButtonRow: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    iosButtonCancel: {
        padding: 10,
        marginRight: 10,
    },
    iosButtonText: {
        color: '#36597a',
        fontWeight: 'bold',
    },
    iosButtonOK: {
        padding: 10,
        backgroundColor: '#36597a',
        borderRadius: 5,
    },
    iosButtonTextOK: {
        color: '#fff',
        fontWeight: 'bold',
    },

    btnText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    textArea: {
        backgroundColor: '#f1f5f9',
        borderRadius: 8,
        padding: 10,
        marginTop: 10,
        textAlignVertical: 'top'
    },
    bullyType: {
        backgroundColor: '#f4f4f4',
        padding: 12,
        borderRadius: 8,
        marginVertical: 4
    },

    school: {
        backgroundColor: '#f4f4f4',
        padding: 12,
        borderRadius: 8,
        marginVertical: 4
    },
    selectedType: {
        backgroundColor: '#dbeafe',
        borderColor: '#1e3a5f',
        borderWidth: 0.5
    },
    footerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 100
    },
    button: {
        padding: 15,
        borderRadius: 8,
        width: '48%',
        alignItems: 'center'
    },
    backBtn: { backgroundColor: '#cbd5e1' },
    submitBtn: { backgroundColor: '#1e3a5f' }
});
