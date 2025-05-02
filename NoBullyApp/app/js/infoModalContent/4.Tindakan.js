import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Info2_DiBuliAtauMelihat() {
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
        Apa yang perlu dilakukan jika anda dibuli atau melihat kejadian buli:
      </Text>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20, color: '#002B53' }}>
        Jika anda dibuli:
      </Text>

      {sectionItem(
        'warning',
        'Jangan balas dengan keganasan atau kemarahan',
        'Kekalkan ketenangan dan elakkan membalas dengan kata-kata atau tindakan agresif.'
      )}

      {sectionItem(
        'users',
        'Beritahu seseorang yang dipercayai',
        'Laporkan kepada guru, kaunselor, ibu bapa, atau mana-mana orang dewasa yang boleh membantu.'
      )}

      {sectionItem(
        'file-text',
        'Catat kejadian buli',
        'Simpan bukti seperti mesej teks, gambar, atau rekod tarikh dan butiran kejadian untuk rujukan.'
      )}

      {sectionItem(
        'eye',
        'Jangan hadapi pembuli bersendirian',
        'Elakkan berada di tempat sunyi atau seorang diri dengan pembuli.'
      )}

      {sectionItem(
        'group',
        'Minta sokongan',
        'Sertai kumpulan sokongan atau program anti-buli di sekolah untuk mendapatkan bantuan emosi.'
      )}

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20, color: '#002B53', marginTop: 20 }}>
        Jika anda melihat kejadian buli:
      </Text>

      {sectionItem(
        'pause',
        'Jangan menjadi penonton yang pasif',
        'Tindakan anda boleh membantu menghentikan buli – jangan ketawakan atau rakam kejadian buli.'
      )}

      {sectionItem(
        'hand-paper-o',
        'Tolong mangsa dengan selamat',
        'Jika selamat untuk berbuat demikian, alihkan perhatian pembuli atau bantu mangsa menjauhkan diri.'
      )}

      {sectionItem(
        'bell',
        'Laporkan kepada pihak berkuasa',
        'Beritahu guru, pengawal keselamatan, atau kaunselor sekolah segera.'
      )}

      {sectionItem(
        'comment',
        'Sokong mangsa',
        'Berbual dengan mangsa selepas kejadian, beri sokongan moral, dan galakkan mereka membuat laporan.'
      )}

      {sectionItem(
        'share-alt',
        'Jangan simpan rahsia buli',
        'Melaporkan bukan “membawa mulut” – ia tindakan berani dan bertanggungjawab.'
      )}
      
    </ScrollView>
  );
}
