import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import CommentInput from "../components/CommentInput";
import CommentItem from "../components/CommentItem";

export function HomeScreen({ route, navigation }) {
  //deklaracija state varjable
  const [comment, setComment] = useState([]);

  //uzima vrijednost koju smo unijeli u textInput i dodaje istu u niz, dodjeljuje id (generirani) i value (vrijednost koju upišemo u textInput)
  const addCommentHandler = (commentTitle) => {
    setComment((currentComment) => [
      ...currentComment,
      { id: Math.random().toString(), value: commentTitle },
    ]);
  };

  //uzima id vrijednosti na koju smo kliknuli i briše tu vrijednost iz niza
  const removeCommentHandler = (commentId) => {
    setComment((currentComment) => {
      return currentComment.filter((comment) => comment.id !== commentId);
    });
  };
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      
        <CommentInput onAddComment={addCommentHandler} />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={comment}
          renderItem={(itemData) => (
            <CommentItem
              id={itemData.item.id}
              onDelete={removeCommentHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 200
  }
});
