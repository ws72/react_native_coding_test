import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BodyText } from '../Typography';
import { BODY_TEXT_COLOR_LIGHTER } from '../../config/colors';
import { SIZING_SMALL } from '../../config/sizing';

const styles = StyleSheet.create({
  root: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  information: {
    flex: 3,
    marginLeft: 5,
    marginRight: 5,
  },
  dateText: {
    color: BODY_TEXT_COLOR_LIGHTER,
    fontSize: SIZING_SMALL,
  },
});

const NewsCard = ({ news, navigation }) => {
  const {
    root,
    imageContainer,
    image,
    information,
    dateText,
  } = styles;

  const renderImage = () => (
    <View style={imageContainer}>
      <Image
        source={{ uri: news && news.image }}
        style={image}
      />
    </View>
  );

  const renderTime = () => (
    <View>
      <BodyText style={dateText}>
        {news.date}
      </BodyText>
    </View>
  );

  const renderNewsTitle = () => (
    <View>
      <BodyText numberOfLines={2}>
        {news.title}
      </BodyText>
    </View>
  );

  const renderInformation = () => (
    <View style={information}>
      {renderTime()}
      {renderNewsTitle()}
    </View>
  );

  const navigateToNewsDetailPage = () => navigation.navigate('NewsDetail', { newsTitle: news.title, newsBody: news.body });

  return (
    <TouchableOpacity onPress={navigateToNewsDetailPage}>
      <View style={root}>
        {renderImage()}
        {renderInformation()}
      </View>
    </TouchableOpacity>
  );
};

NewsCard.defaultProps = {
  news: {},
};

NewsCard.propTypes = {
  navigation: PropTypes.shape().isRequired,
  news: PropTypes.shape(),
};

export default NewsCard;
