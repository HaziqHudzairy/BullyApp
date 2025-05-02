import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Info1_MaksudBuli() {
  const sectionItem = (icon, title, description) => (
    <View style={{ marginBottom:20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
        <FontAwesome name={icon} size={18} color="#007AFF" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#002B53', width: '90%' }}>{title}</Text>
      </View>
      <Text style={{ fontSize: 15, color: '#444', paddingLeft: 28, width: '95%' }}>{description}</Text>
    </View>
  );

  return (
    <ScrollView style={{ padding: 20, paddingTop: 0 }}>

      <Text style={{ fontSize: 16, marginBottom: 14, color: '#333' }}>
        Buli ialah satu bentuk keganasan interpersonal yang berlaku secara berulang antara individu,
        di mana terdapat ketidakseimbangan kuasa fizikal, sosial atau psikologi yang digunakan untuk
        menyakiti atau mengawal pihak lain.
      </Text>

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#002B53' }}>
        Buli dianggap:
      </Text>

      {sectionItem(
        'medkit',
        'Isu kesihatan awam',
        'Ia boleh menyebabkan kesan jangka panjang terhadap kesejahteraan mental, fizikal dan sosial mangsa serta pelaku.'
      )}

      {sectionItem(
        'heartbeat',
        'Faktor risiko kepada masalah kesihatan mental',
        'Contohnya kemurungan, kebimbangan, PTSD, dan juga risiko bunuh diri. Ia memerlukan intervensi komuniti seperti di sekolah, tempat kerja dan komuniti setempat.'
      )}

      {sectionItem(
        'exchange',
        'Boleh berlaku secara langsung atau tidak langsung',
        'Termasuk buli fizikal, verbal, sosial (pengasingan), dan siber (cyberbullying).'
      )}
    </ScrollView>
  );
}
