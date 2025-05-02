import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Info2_UndangUndangBuli() {
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
        Undang-undang terhadap kes buli (alia):
      </Text>

      {sectionItem(
        'gavel',
        'Kanun Keseksaan - Seksyen 321 dan Seksyen 323',
        'Seseorang itu didapati bersalah apabila menyebabkan kecederaan ringan secara sengaja. Hukuman bagi kesalahan ini adalah penjara selama satu tahun, atau denda sehingga RM 2000, atau kedua-duanya. Seksyen ini berkait rapat dengan buli fizikal.'
      )}

      {sectionItem(
        'wifi',
        'Buli Siber - Akta Komunikasi dan Multimedia, Seksyen 233',
        'Kesalahan boleh disabitkan di bawah akta ini untuk penggunaan tidak wajar kemudahan rangkaian atau perkhidmatan rangkaian dan boleh dikenakan denda maksimum RM50,000 atau penjara sehingga 1 tahun atau kedua-duanya.'
      )}

      {sectionItem(
        'university',
        'Tindakan Tata Tertib di Sekolah',
        'Jika buli berlaku di sekolah, tindakan tata tertib juga boleh dikenakan.'
      )}
      
    </ScrollView>
  );
}
