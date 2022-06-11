import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Image from 'next/image';

export default function App(props) {
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    console.log('token');
    console.log(token);
  }, [router.isReady]);
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        React Native for Web & Next.js
      </Text>
      <Image
        src="/images/logo-title-3.png"
        alt="Picture of rose"
        width="350px"
        height="300px"
      />
      <Text style={styles.link} accessibilityRole="link" href="/alternate">
        A universal link
      </Text>

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Subheader
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
});
