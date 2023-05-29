import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';

// mock data üretimi
const mockItems = Array(100).fill(0).map((_, i) => {
  return {
    id: i,
    title: `Item ${i + 1}`,
    description: `This is the description of item ${i + 1}`,
  }
});

const Item = ({ title, description }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{title}</Text>
    <Text style={styles.itemDescription}>{description}</Text>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        alwaysBounceVertical={true} // default is true
        scrollEventThrottle={32} // onScroll eventi için kaç ms de bir event alacağımızı belirler
        onScroll={(e) => {
          // scroll event throttle büyüdükçe daha az event alırız
          // animasyonlu efektlerde kullanılabilir
        }}
        // scroll yaparken item'lar yer değiştirirse, scroll pozisyonunu korur
        // mesela bir chat uygukamasında yeni mesaj geldiğinde scroll pozisyonu korunur
        // fakat ustteki mesajların pozisyonu değişirse istenilen sonuç alınmayabilir
        // maintainVisibleContentPosition={true}
        minimumZoomScale={0.5} // default 1
        maximumZoomScale={3} // foto galeri gibi zoom yapılabilen bir uygulamada kullanılabilir, default 1
      >
        {mockItems.map((item) => (
          <Item key={item.id} title={item.title} description={item.description} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  itemDescription: {
    color: 'gray',
    fontWeight: 'normal',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  itemContainer: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'aquamarine',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  }
});
