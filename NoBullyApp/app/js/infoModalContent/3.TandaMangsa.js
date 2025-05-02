import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Info2_TandaMangsaBuli() {
  const sectionItem = (icon, title, description) => (
    <View style={{ marginBottom: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 6 }}>
        <FontAwesome name={icon} size={18} color="#007AFF" style={{ marginRight: 10 }} />
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#002B53' }}>{title}</Text>
      </View>
      <Text style={{ fontSize: 15, color: '#444', paddingLeft: 28 }}>
        {description}
      </Text>
    </View>
  );

  return (
    <ScrollView style={{ padding: 20 , paddingTop: 0}}>

      <Text style={{ fontSize: 16, marginBottom: 14, color: '#333' }}>
        Tanda-tanda mangsa buli boleh dilihat dalam pelbagai bentuk, termasuk emosi, fizikal, kesihatan, dan akademik.
      </Text>

      {sectionItem(
        'cloud',
        'Emosi & Tingkah Laku',
        <Text>
            Mangsa buli sering menunjukkan perubahan dalam emosi dan tingkah laku, seperti <Text style={{ fontWeight: 'bold' }}>takut</Text> atau enggan pergi ke sekolah serta <Text style={{ fontWeight: 'bold' }}>mengasingkan diri</Text> daripada rakan-rakan. Mereka mungkin juga menjadi lebih pendiam atau cemas.
        </Text>
        
      )}

      {sectionItem(
        'medkit',
        'Fizikal',
        <Text>Kesan fizikal seperti <Text style={{ fontWeight: 'bold' }}>luka, lebam, atau calar</Text> yang mencurigakan boleh menunjukkan tanda-tanda buli. <Text style={{ fontWeight: 'bold' }}>Barang peribadi</Text> seperti beg atau telefon mungkin <Text style={{ fontWeight: 'bold' }}>hilang atau rosak</Text> secara tidak dijangka.</Text>
        
      )}

      {sectionItem(
        'heart',
        'Kesihatan',
        <Text>Mangsa buli sering mengadu sakit perut atau kepala tanpa sebab perubatan yang jelas. Mereka juga mungkin mengalami <Text style={{ fontWeight: 'bold' }}>masalah tidur atau kehilangan selera makan.</Text></Text>
        
      )}

      {sectionItem(
        'book',
        'Akademik',
        <Text>Akademik mangsa buli boleh merosot, dengan <Text style={{ fontWeight: 'bold' }}>prestasi pelajaran yang semakin menurun.</Text> Mereka juga mungkin kehilangan minat terhadap aktiviti sekolah seperti sukan atau perbincangan kelas.</Text>
        
      )}

    </ScrollView>
  );
}
