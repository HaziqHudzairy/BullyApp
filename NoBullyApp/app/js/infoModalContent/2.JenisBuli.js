import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Info2_JenisBuli() {
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
    <ScrollView style={{ padding: 20, paddingTop: 0}}>

      <Text style={{ fontSize: 16, marginBottom: 14, color: '#333' }}>
        Buli boleh dibahagikan kepada beberapa jenis utama yang berbeza berdasarkan cara ia dilakukan:
      </Text>

      {sectionItem(
        'cloud',
        'Buli Siber',
        'Buli yang dilakukan melalui platform digital seperti media sosial, mesej teks, dan laman web. Ia boleh berlaku secara anonim dan sering kali menyebabkan kesan psikologi yang serius kepada mangsa.'
      )}

      {sectionItem(
        'hand-rock-o',
        'Buli Fizikal',
        'Melibatkan tindakan fizikal seperti pukulan, tamparan, dan serangan tubuh badan yang bertujuan menyakitkan mangsa. Buli fizikal selalunya lebih mudah dikesan kerana kesan luaran seperti lebam atau luka.'
      )}

      {sectionItem(
        'comment',
        'Buli Verbal',
        'Buli yang dilakukan melalui kata-kata kesat, ejekan, atau ancaman untuk merendahkan maruah atau menyebabkan trauma psikologi kepada mangsa. Buli verbal sering kali berlaku dalam bentuk penghinaan atau makian.'
      )}
    </ScrollView>
  );
}
