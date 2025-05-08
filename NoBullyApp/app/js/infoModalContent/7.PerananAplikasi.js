import React from 'react';
import { View, Text, ScrollView,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Info2_AplikasiAntiBuli() {
  const sectionItem = (icon, title, description) => (
    <View style={{ marginBottom: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
        <FontAwesome name={icon} size={18} color="#007AFF" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#002B53', width:'85%' }}>{title}</Text>
      </View>
      <Text style={{ fontSize: 15, color: '#444', paddingLeft: 28 , width:'90%'}}>{description}</Text>
    </View>
  );

  return (
    <ScrollView style={{ padding: 0 , paddingTop: 0}}>
        <Image
                source={require('../../assets/peranan.png')}
                style={{
                  width: 200,
                  height: 120,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                  marginBottom: 16,
                }}
              />
      <Text style={{ fontSize: 16, marginBottom: 14, color: '#333' }}>
        Peranan Aplikasi Anti Buli:
      </Text>

      {sectionItem(
        'exclamation-circle',
        'Meningkatkan Kesedaran',
        'Aplikasi anti-buli membantu meningkatkan kesedaran tentang kesan buli dan cara-cara untuk menghadapinya, memberi pengetahuan kepada masyarakat tentang isu ini.'
      )}

      {sectionItem(
        'envelope',
        'Saluran Aduan yang Selamat',
        'Memberi saluran aduan yang selamat bagi mangsa buli untuk melaporkan kejadian tanpa rasa takut atau risiko balas dendam, memastikan kerahsiaan mereka dilindungi.'
      )}

      {sectionItem(
        'shield',
        'Pencegahan Awal',
        'Dengan pemantauan yang berterusan, aplikasi ini dapat mengesan tanda-tanda awal buli dan bertindak untuk mencegah kejadian buli sebelum ia berkembang lebih jauh.'
      )}

      {sectionItem(
        'graduation-cap',
        'Pendidikan dan Sokongan Emosi',
        'Aplikasi ini menyediakan sumber pendidikan untuk mangsa buli dan individu yang berisiko, serta menawarkan sokongan emosi melalui kumpulan sokongan atau kaunselor.'
      )}

      {sectionItem(
        'tasks',
        'Pemantauan dan Analisis Data',
        'Aplikasi ini mengumpul data berkenaan kejadian buli yang berlaku dan menyediakan analisis yang membantu dalam merancang langkah-langkah pencegahan dan pemulihan yang lebih berkesan.'
      )}
      
    </ScrollView>
  );
}
