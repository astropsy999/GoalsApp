import { Pressable, StyleSheet, Text, View } from 'react-native';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutherContainer}>
      <Pressable
        style={({ pressed }) =>
          !pressed
            ? styles.buttonInnerContainer
            : [styles.buttonInnerContainer, styles.pressed]
        }
        onPress={onPress}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOutherContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
