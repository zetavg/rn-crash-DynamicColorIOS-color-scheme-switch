import {
  Appearance,
  DynamicColorIOS,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={styles.text}>
        Press the gray area below to switch color scheme (or switch the color
        scheme via system settings) and the dev app will crash. Remove this Text
        element, do not use DynamicColorIOS, or add more Text elements can avoid
        the crash.
      </Text>
      <Pressable
        style={styles.switchColorSchemeBtn}
        onPress={() => {
          const current = Appearance.getColorScheme();
          const next = current === 'light' ? 'dark' : 'light';
          Appearance.setColorScheme(next);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: DynamicColorIOS({
      light: '#000',
      dark: '#fff',
    }),
  },
  switchColorSchemeBtn: {
    backgroundColor: '#eee',
    width: 100,
    height: 100,
  },
});

export default App;
