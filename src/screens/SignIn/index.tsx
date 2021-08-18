import React from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./style";
import { theme } from "../../global/styles/theme";

import { ButtonIcon } from "../../components/Buttonicon";
import { Background } from "../../components/Background";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const { signIn, loading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"}e organize{"\n"}
            suas jogatinas{" "}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
