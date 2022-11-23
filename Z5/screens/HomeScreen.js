import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, FlatList } from 'react-native';
import CommentInput from "../components/CommentInput"
import CommentItem from "../components/CommentItem"

export function HomeScreen({ route, navigation }) {

const [comment, setComment] = useState([])

const addCommentHandler = (commentTitle) => {
  setComment((currentComment) => [
    ...currentComment, {
      id: Math.random().toString(), value: commentTitle
    }
  ])
};

  const removeCommentHandler = (commentId) => {
    setComment((currentComment) => {
      return currentComment.filter((comment) => comment.id !== commentId);
    });
  };

  function handleSettingsPress() {
    navigation.navigate('Settings');
  }
  

  return (
    <View style={styles.screen}>
      <View style={styles.jumbotron}>
        <View style={styles.gameResultWrapper}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg',
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text> 0</Text>
        </View>
        <View style={styles.gameResultWrapper}>
          <Text>:</Text>
        </View>
        <View style={styles.gameResultWrapper}>
          <Text>0 </Text>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Flag_of_Morocco_%28Pantone%29.svg',
            }}
            style={{ width: 100, height: 100 }}
          />
        </View>
      </View>
       <View style={styles.gameCommentsJubotron}>
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

    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20
  },
  jumbotron: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "red",
    borderBottomWidth: 2,
    padding: 20
  },
  gameResultWrapper:{
    flexDirection: "row",
    alignItems: "center"
  }
});
