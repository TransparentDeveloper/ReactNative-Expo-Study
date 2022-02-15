import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { Container, Content, Text, Form, Button } from "native-base";
const bImage = require("../assets/background.png");
import ItemInput from "../components/ItemInput";

export default function SignInPage({ navigation }) {
  const goSignUp = () => {
    navigation.navigate("SignUpPage");
  };

  return (
    <Container style={styles.container}>
      <ImageBackground source={bImage} style={styles.backgroundImage}>
        <Content contentContainerStyle={styles.content} scrollEnabled={false}>
          <Text style={styles.title}>
            <Text style={styles.highlite}>we</Text>gram
          </Text>
          <Form style={styles.form}>
            <ItemInput title={"이메일"} />
            <ItemInput title={"비밀번호"} />
          </Form>
          {/* <Button full style={styles.snsSignUp}>
            <Text>Facebook 로그인</Text>
          </Button> */}
          <Button full style={styles.emailSignIn}>
            <Text>Email 로그인</Text>
          </Button>
          <Button full style={styles.emailSignUp} onPress={goSignUp}>
            <Text style={{ color: "#333" }}>회원가입</Text>
          </Button>
        </Content>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  highlite: {
    fontSize: 25,
    fontWeight: "700",
    color: "deeppink",
    textAlign: "center",
  },
  form: {
    width: 250,
    borderRadius: 10,
    paddingBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
  },
  label: {
    color: "#fff",
  },
  input: {
    color: "#fff",
  },
  snsSignUp: {
    alignSelf: "center",
    width: 250,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#4667A5",
  },
  emailSignIn: {
    alignSelf: "center",
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "#333",
  },
  emailSignUp: {
    alignSelf: "center",
    width: 250,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#333",
  },
});
