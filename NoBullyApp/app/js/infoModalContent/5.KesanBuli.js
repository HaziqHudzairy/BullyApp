import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Info2_KesanBuli() {
  const sectionItem = (icon, title, description) => (
    <View style={{ marginBottom: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
        <FontAwesome name={icon} size={18} color="#007AFF" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#002B53' }}>{title}</Text>
      </View>
      <Text style={{ fontSize: 15, color: '#444', paddingLeft: 28 }}>{description}</Text>
    </View>
  );

  return (
    <ScrollView style={{ padding: 20, paddingTop: 0 }}>

      <Text style={{ fontSize: 16, marginBottom: 14, color: '#333' }}>
        Kesan-kesan buli terhadap manusia (emosi, fizikal, sosial, akademik):
      </Text>

      {sectionItem(
        'smile-o',
        'Emosi',
        'Keyakinan diri murid menurun, trauma yang dialami sering menjadi igauan buruk, perubahan personaliti yang ketara.'
      )}

      {sectionItem(
        'heartbeat',
        'Fizikal',
        'Kecederaan yang jelas pada mangsa buli, insomnia, kelesuan.'
      )}

      {sectionItem(
        'users',
        'Sosial',
        'Mula mengasingkan diri dari masyarakat, sukar meletakkan kepercayaan kepada orang lain, sering berasa dirinya berada pada suasana yang tidak selamat.'
      )}

      {sectionItem(
        'graduation-cap',
        'Akademik',
        'Prestasi akademik merosot, gejala ponteng sekolah makin berleluasa, mengurangkan fokus di dalam kelas.'
      )}
      
    </ScrollView>
  );
}
